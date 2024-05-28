<template>
  <div class="p-3 bg-danger">
    <button v-bind="$attrs" class="btn btn-primary" type="button">My button</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  setup(props, context) {
    console.log('context.attrs:', context.attrs)
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
