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
  <a
    title="Back to top"
    class="
      fixed
      z-90
      bottom-10
      right-8
      bg-slate-600
      w-10
      h-10
      rounded-full
      drop-shadow-lg
      flex
      justify-center
      items-center
      text-white text-4xl
      hover:bg-slate-700 
      hover:drop-shadow-2xl 
      hover:animate-bounce
      duration-300
    "
    href="#"
  >
   <img src="@/assets/up-arrow.svg" alt="">
  </a>
  <footer-component />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

export default {};
</script>

<style>
</style>
