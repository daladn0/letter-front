<template>
  <div class="w-full">
    <DynamicForm
      class="mx-auto"
      :formSchema="formSchema"
      :validationSchema="validationSchema"
      :isLoading="isLoading"
      :errorMessage="error"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import DynamicForm from "@/components/DynamicForm.component.vue";
import { authFields, authValidationSchema } from "@/constants/form";
import { login } from '@/api/authApi'
import { TYPES } from "@/constants/toast";

export default {
  name: "LoginPage",
  components: {
    DynamicForm,
  },
  data() {
    return {
      isLoading: false,
      error: null,

      formSchema: {
        meta: {
          title: "Log in",
          submitLabel: "Login to your account",
          footer: {
            label: "Not registered?",
            linkText: "Create account",
            linkHref: "/signup",
          },
        },
        fields: authFields,
      },
      validationSchema: authValidationSchema,
    };
  },
  methods: {
    login,
    ...mapActions('auth', {
      userLogin: 'login'
    }),
    ...mapActions("toast", ["showToast"]),

    async onSubmit(model) {
      this.error = null
      this.isLoading = true 

      try {
        const response = await this.login(model.email, model.password)

        if ( response && response?.status === 200 ) {
          this.showToast({content: { heading: 'Authorization', message: 'You are now logged in!'}, type: TYPES.SUCCESS})
          
          this.userLogin(response.data.user)

          localStorage.setItem('token', response.data.accessToken)

          this.$router.push({name: 'home'})
        }
      } catch(e) {
        console.log(e)
        this.error = e?.response?.data?.message
      } finally {
        this.isLoading = false
      }
    },
  },
};
</script>
