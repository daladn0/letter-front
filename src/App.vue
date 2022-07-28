<template>
  <div>
    <LoadingSpinner class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-20 h-20" v-if="isLoading"  />
    <component v-else :is="layout">
        <router-view />
    </component>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue"
import { checkAuth } from '@/api/authApi'
import LoadingSpinner from "@/components/LoadingSpinner.component.vue"
import { withAsync } from './helpers/withAsync';

export default {
  name: "App",
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    EmptyLayout,
    MainLayout,
    LoadingSpinner,
  },
  computed: {
    layout() {
      const value = this.$route?.meta?.layout
      return value && value === 'main' ? 'MainLayout' : 'EmptyLayout'
    }
  },
  methods: {
    ...mapActions('auth', ['login'])
  },
  async mounted() {
      this.isLoading = true

      const {response, error, errorMessage} = await withAsync(checkAuth)

      this.isLoading = false

      if ( response ) {
        localStorage.setItem('token', response.data?.accessToken)
        this.login(response.data?.user)
      }
  }
};
</script>

<style lang="scss">
@import "@/styles/global.scss";
</style>
