<template>
  <header class="header">  
    <nav class="menu">
      <router-link class="menu__link mr-2" to="/">Home</router-link>
      <router-link class="menu__link" to="/recent">Pictures</router-link>
    </nav>
    <div class="header-right-side">
      <div class="header__username">
      {{ store.email }}
    </div>
    <signOutBtn></signOutBtn>
    </div>
  
  </header>
</template>

<script setup lang="ts">
import { useStore } from "@/store/index";
import signOutBtn from '@/components/signOutBtn.vue';

const store = useStore();

</script>

<style lang="scss" scoped>
.header-right-side {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
