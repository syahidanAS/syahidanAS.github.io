<template>
  <navbar-component></navbar-component>

  <div class="px-4 lg:px-24 lg:py-2">
    <div
      id="content"
      class="container flex flex-wrap items-center justify-between mx-auto"
    >
      <router-view></router-view>
    </div>
  </div>

  <footer-component />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

export default {};
</script>

<style>
</style>
NavbarComponent