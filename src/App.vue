<template>

  <div class="btnWrapper">
    <headerComp  v-if="store.isLoggedIn"> </headerComp>
     <base-button v-if="store.isLoggedIn"
      @click="handleSignOut()"
      class="button is-danger is-hovered  is-rounded"
      title="would you like to get out?"     
      >
      Get out
    </base-button>
  
   
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import headerComp from "./components/headerComp.vue";
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
      store.email = user.email;
    } else {
      store.isLoggedIn = false;
      store.email = "";
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
  display: flex;  
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;  
}
</style>
