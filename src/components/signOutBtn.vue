<template>
  <base-button
    v-if="store.isLoggedIn"
    @click="handleSignOut()"
    class="button is-danger is-hovered is-rounded ml-4"
    title="would you like to get out?"
  >
    Get out
  </base-button>
</template>

<script setup lang="ts">
import { useStore } from "@/store/index";
import { useFirebaseApiFunc } from "@/composables/useFireBaseApi";
const store = useStore();
const { handleSignOut } = useFirebaseApiFunc();
</script>

<style scoped></style>
