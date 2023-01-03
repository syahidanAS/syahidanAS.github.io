<template>
  <nav
    class="
      bg-white
      border-gray-200
      px-4
      lg:px-24
      py-2.5
      rounded
      dark:bg-gray-900
      shadow-md shadow-slate-200
      sticky
      top-0
      z-50
    "
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center">
        <h1 class="text-slate text-2xl font-bold">
          <img class="w-14" src="@/assets/logo.png" alt="" />
        </h1>
      </router-link>
<router-link
              class="
                block              
                border-2
                border-slate-700
                rounded-full
                p-2
                hover:bg-slate-700
                hover:text-white
                lg:hidden
                
              "
              to="/contact"
              >Say Hello</router-link
            >
      <div class="hidden lg:block w-full  md:w-auto " id="navbar-default">
        <ul
          class="
            flex flex-col
            p-4
            mt-4
            border border-gray-100
            rounded-lg
            bg-gray-50
            md:flex-row
            md:space-x-8
            md:mt-0
            md:text-sm
            md:font-medium
            md:border-0
            md:bg-white
            dark:bg-gray-800
            md:dark:bg-gray-900
            dark:border-gray-700
          "
        >
          <li>
            <router-link
              class="
                block              
                border-2
                border-slate-700
                rounded-full
                p-2
                hover:bg-slate-700
                hover:text-white
              "
              to="/contact"
              >Say Hello</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>