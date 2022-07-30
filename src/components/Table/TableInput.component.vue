<template>
  <textarea
    @change="$emit('inputChanged')"
    @input="onInput($event.target)"
    :disabled="!allowEditing"
    :value="modelValue"
    :placeholder="placeholder"
    ref="textarea"
    class="bg-transparent w-full h-full py-4 outline-none resize-none block"
    type="text"
    rows="1"
  />
</template>

<script>
export default {
  name: "TableInput",
  emits: ['inputChanged', 'update:modelValue'],
  props: ["allowEditing", "modelValue", "placeholder"],
  methods: {
    onInput(e) {
      this.$emit('update:modelValue', e.value)

      e.style.height = 'auto'
      e.style.height = (e.scrollHeight) + 'px'
    }
  },
  mounted() {
    const textarea = this.$refs.textarea
    textarea.style.height = textarea.scrollHeight + 'px'
  }
};
</script>
