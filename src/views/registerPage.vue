<template>
  <div class="about"></div>
  <main>
    <transition name="toast">
    <base-toast @closeToast="closeToast()" v-if="store.errMessage"
      >{{ store.errMessage }}
    </base-toast>
  </transition>
    <div class="box">
      <div class="block is-flex is-justify-content-center">
        <h1 class="subtitle">create your masterpiece</h1>
      </div>
      <div class="tabs">
        <ul class="is-justify-content-center">
          <li>
            <router-link active-class="active" class="link" to="/sign-in"
              >Sign In</router-link
            >
          </li>
          <li>
            <router-link active-class="active" class="link" to="/register"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
      <div class="field">
        <form @submit.prevent="LogIn">
          <div v-for="(input, i) in store.authForm" :key="i">
            <p class="control has-icons-left has-icons-right mb-3">
              <base-input
                :type="input.type"
                :placeholder="input.placeholder"
                v-model="store[input.model]"
              >
              </base-input>
            </p>
          </div>
          <div class="field">
            <p class="control is-flex is-justify-content-center">
              <base-button class="is-success">Login</base-button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseToast from "@/components/base/BaseToast.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { useStore } from "@/store/index";
import { useFirebaseApiFunc } from "@/composables/useFireBaseApi";
import { useNotificationHandler } from "@/composables/useNotificationHandler";
import { useErrorHandler } from "@/composables/useErrorHandler";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const { closeToast, autoHideToast} = useNotificationHandler();
const { authObject } = useFirebaseApiFunc();
const { getError } = useErrorHandler();

const LogIn = () => {
  authObject[store.currentRoute](store.email, store.password, store.confirm)
    .then(() => {
      store.errMessage = "Succesfully done!";
      router.push("/");
    })
    .catch((error: Error) => {
      store.errMessage = getError(error.code);
      autoHideToast();
      console.log(error.code);
    });
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding-top: 50px;
}
.active {
  color: rgb(56, 212, 137);
}
.toast-enter-from, .toast-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.toast-enter-active, .toast-leave-active {
  transition: all 0.5s ease;
}

</style>
