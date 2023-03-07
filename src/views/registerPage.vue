<template>
  <div class="about"></div>
  <main>
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
      </div>
      <div class="field">
        <p class="control is-flex is-justify-content-center">
          <base-button class="is-success">Login</base-button>
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { useStore } from "@/store/index";

const store = useStore();

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
</style>
