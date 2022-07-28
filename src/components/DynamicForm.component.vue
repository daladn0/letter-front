<template>
  <Form
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
    :validation-schema="validationSchema"
    class="space-y-6 bg-white p-8 rounded-md w-full max-w-md"
  >
    <h3 class="text-xl font-medium text-gray-900 text-center">
      {{ formSchema.meta.title }}
    </h3>
    <Field
      v-for="schemaField in formSchema.fields"
      :name="schemaField.name"
      v-slot="{ field, errorMessage, meta, handleChange }"
      :key="schemaField.name"
    >
      <label class="text-sm font-medium text-gray-900 block mb-2"
        >{{ schemaField.label }}
        <input
          @input="($event) => handleChange($event, meta.touched)"
          v-model="schemaField.model"
          v-bind="field"
          :type="schemaField.type"
          :name="schemaField.name"
          :ref="schemaField.name"
          class="h-12 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
          :class="{
            'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500':
              errorMessage,
          }"
          :placeholder="schemaField.placeholder"
        />
        <span v-if="errorMessage" class="text-sm text-red-500 mt-2 block">{{
          errorMessage
        }}</span>
      </label>
    </Field>
    <button
      :disabled="isLoading"
      type="submit"
      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all h-12 disabled:opacity-80 disabled:hover:bg-blue-700"
    >
      <span v-if="!isLoading">{{ formSchema.meta.submitLabel }}</span>
      <LoadingSpinner v-else class="mx-auto w-6 h-6" />
    </button>
    <span
      class="block text-center text-red-500 font-semibold text-sm"
      v-if="errorMessage"
      >{{ errorMessage }}</span
    >
    <div
      v-if="formSchema.meta.footer"
      class="text-sm font-medium text-gray-500 text-center"
    >
      {{ formSchema.meta.footer.label }}
      <router-link
        :to="formSchema.meta.footer.linkHref"
        class="text-blue-700 hover:underline"
        >{{ formSchema.meta.footer.linkText }}</router-link
      >
    </div>
  </Form>
</template>

<script>
import { Field, Form, configure } from "vee-validate";
import LoadingSpinner from "@/components/LoadingSpinner.component.vue";

configure({
  validateOnModelUpdate: false,
  validateOnBlur: false,
});

export default {
  name: "AuthForm",
  emits: ["submit"],
  props: {
    formSchema: {
      type: Object,
      required: true,
    },
    validationSchema: {
      type: Object,
    },
    isLoading: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
  },
  components: {
    Field,
    Form,
    LoadingSpinner,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values, { resetForm }) {
      const model = {};
      const fields = this.formSchema.fields;

      fields.forEach((field) => {
        model[field.name] = field.model;
      });

      this.$emit("submit", model);

      // resetForm()
    
      // fields.forEach((field) => {
      //   field.model = ''
      // });
    },
    onInvalidSubmit({ errors }) {
      const errorRefs = Array.from(Object.keys(errors));

      if (!errorRefs) return;

      const firstInvalidInput = this.$refs[errorRefs[0]][0];

      if (!firstInvalidInput) return;

      firstInvalidInput.focus();
    },
  },
  mounted() {
    const refs = Object.keys(this.$refs);

    if (!refs.length) return;

    this.$refs[refs[0]][0].focus();
  },
};
</script>
