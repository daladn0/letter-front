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
import { signupFields, signupValidationSchema } from "@/constants/form";
import { TYPES } from "@/constants/toast";
import { withAsync } from '../helpers/withAsync';

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
        fields: signupFields,
      },
      validationSchema: signupValidationSchema,
    };
  },
  methods: {
    ...mapActions("toast", ["showToast"]),

    async onSubmit(model) {
        this.error = null
        this.isLoading = true

        const { response, error, errorMessage } = await withAsync(signup, model.email, model.password)

        if ( response ) {
          this.showToast({content: { heading: 'Registration', message: 'User has been created'}, type: TYPES.SUCCESS})

          this.$router.push({name: 'login'})
        }

        if ( error ) {
          this.error = errorMessage || 'Something went wrong'
        }

        this.isLoading = false
    },
  },
};
</script>
