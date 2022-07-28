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
      <button class="btn btn-red" v-if="isAuth" @click="onLogout">Log out</button>
      <div class="flex items-center space-x-2" v-else>
        <router-link
          :to="{name: 'login'}"
          class="btn btn-blue"
        >
          Login
        </router-link>
        <router-link
          :to="{name: 'signup'}"
          class="btn btn-blue_outline"
        >
          Sign up
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { logout } from '@/api/authApi'
export default {
  name: 'LayoutHeader',
  computed: {
    ...mapGetters('auth', ['isAuth'])
  },
  methods: {
    ...mapActions('auth', {
      authLogout: 'logout'
    }),
    async onLogout() {
      await logout()
      this.authLogout()
      localStorage.removeItem('token')
    }
  }
}
</script>