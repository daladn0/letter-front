<template>
  <div class="w-full">
    <DynamicForm
      class="mx-auto"
      :formSchema="formSchema"
      :validationSchema="validationSchema"
      :is-loading="isLoading"
      :errorMessage="error"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import DynamicForm from "@/components/DynamicForm.component.vue";
import { loginFields, loginValidationSchema } from "@/constants/form";
import { login as authLogin } from "@/api/authApi";
import { withAsync } from "../helpers/withAsync";

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
        fields: loginFields,
      },
      validationSchema: loginValidationSchema,
    };
  },
  methods: {
    authLogin,
    ...mapActions("auth", {
      authLogin: 'login'
    }),

    async onSubmit(model) {
        this.error = null;
        this.isLoading = true;

        const { response, error, errorMessage } = await withAsync(authLogin, model.email, model.password)

        if ( response ) {
          this.authLogin(response.data.user)
          localStorage.setItem('token', response.data.accessToken)
          this.$router.push({ name: "home" });
        } 
        
        if ( error ) {
          console.log(error, errorMessage)
          this.error = errorMessage || 'Something went wrong'
        }

        this.isLoading = false
    },
  },
};
</script>
