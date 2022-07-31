<template>
  <div
    class="relative w-full h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- home button -->
    <router-link
      :to="{ name: 'home' }"
      class="absolute top-4 left-4 w-fit whitespace-nowrap flex items-center text-gray-500 hover:text-blue-700 transition-all cursor-pointer"
    >
      <svg class="mr-2 w-6 h-6 pt-1.5">
        <use xlink:href="/sprite.svg#arrow-left" />
      </svg>
      go home
    </router-link>

    <slot />
  </div>
</template>
<script>
export default {
  name: "EmptyLayout",
};
</script>
