<template>
  <div class="w-full">
    <DynamicForm
      ref="form"
      class="mx-auto"
      :formSchema="formSchema"
      :validationSchema="validationSchema"
      :is-loading="isLoading"
      :error-message="error"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { signup } from '@/api/authApi'
import DynamicForm from "@/components/DynamicForm.component.vue";
import { authFields, authValidationSchema } from "@/constants/form";
import { TYPES } from "@/constants/toast";

export default {
  name: "SignupPage",
  components: {
    DynamicForm,
  },
  data() {
    return {
      isLoading: false,
      error: null,

      formSchema: {
        meta: {
          title: "Sign up",
          submitLabel: "Create a new account",
          footer: {
            label: "Already have an account?",
            linkText: "Login to account",
            linkHref: "/login",
          },
        },
        fields: authFields,
      },
      validationSchema: authValidationSchema,
    };
  },
  methods: {
    signup,
    ...mapActions("toast", ["showToast"]),

    async onSubmit(model) {
      this.error = null
      this.isLoading = true

      try {
        const response = await this.signup(model.email, model.password)

        if ( response.status === 200 ) {
          this.showToast({content: { heading: 'Registration', message: response.data.message}, type: TYPES.SUCCESS})
          this.$router.push({name: 'login'})
        }
      } catch(e) {
        this.error = e.response.data.message
      } finally {
        this.isLoading = false
      }
    },
  },
};
</script>
