<template>
  <nav>
    <router-link to="/sign-in">Sign In</router-link> |
    <router-link to="/register">Register</router-link>
  </nav>
  <div class="btnWrapper">
    <base-button 
      @click="handleSignOut(router)"
      class="button is-danger is-hovered"
      title="would you like to get out?"
      v-if="store.isLoggedIn"
      >
      Get out
    </base-button>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount} from "vue";
import { useFirebaseApiFunc } from "@/composables/useFireBaseApi";
import { useRouter } from "vue-router";
import { useStore } from "@/store/index";

import { onAuthStateChanged } from "firebase/auth";

const store = useStore();
const router = useRouter();
const { handleSignOut, auth } = useFirebaseApiFunc();


onBeforeMount(() => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.replace("/sign-in");            
    } else {
      router.replace("/");
    }
  });
});

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.isLoggedIn = true;
    } else {
      store.isLoggedIn = false;
    }
  });
});

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.btnWrapper {
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
