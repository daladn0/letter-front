<template>
  <div>
    <component :is="layout">
        <router-view />

        <!-- toast -->
        <transition name="slide-in">
          <ToastMessage v-if="isVisible" @close="hideToast" />
        </transition>
    </component>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue"
import ToastMessage from "@/components/ToastMessage.component.vue";

export default {
  name: "App",
  components: {
    EmptyLayout,
    MainLayout,
    ToastMessage,
  },
  computed: {
    ...mapGetters("toast", ["isVisible"]),
    layout() {
      const value = this.$route?.meta?.layout
      return value && value === 'main' ? 'MainLayout' : 'EmptyLayout'
    }
  },
  methods: {
    ...mapActions("toast", ["hideToast"]),
  },
};
</script>

<style lang="scss">
@import "@/styles/global.scss";
</style>
