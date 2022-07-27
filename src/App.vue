<template>
  <component :is="layout">
      <router-view />
  </component>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue"

export default {
  name: "App",
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout() {
      const value = this.$route?.meta?.layout
      return value && value === 'main' ? 'MainLayout' : 'EmptyLayout'
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/global.scss";
</style>
