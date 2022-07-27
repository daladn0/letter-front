<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 w-full border-b border-gray-200"
  >
    <div class="container flex justify-between items-center mx-auto">
      <router-link :to="{name: 'home'}" href="https://flowbite.com/" class="flex items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Letter App</span
        >
      </router-link>
      <div class="flex items-center space-x-2">
        <router-link
          :to="{name: 'login'}"
          class="btn btn-blue"
        >
          Login
        </router-link>
        <router-link
          :to="{name: 'login'}"
          class="btn btn-blue_outline"
        >
          Sign up
        </router-link>
      </div>
    </div>
  </nav>
</template>
