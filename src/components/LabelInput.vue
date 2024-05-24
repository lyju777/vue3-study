<template>
  <div>
    <label>
      {{ label }}
      <input
        type="text"
        :value="modelValue"
        @input="(event) => $emit('update:modelValue', event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
