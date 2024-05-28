<template>
  <label class="child-class" style="border: ipx solid black" id="child-id">
    {{ label }}
    <input
      :="$attrs"
      type="text"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
  </label>
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
