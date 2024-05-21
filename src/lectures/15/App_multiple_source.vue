<template>
  <div></div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup() {
    const x = ref(0)
    const y = ref(0)

    watch(
      () => x.value + y.value,
      (sum, oldValue) => {
        console.log('sum:', sum)
        console.log('oldValue:', oldValue)
      }
    )
    return { x, y }
  }
}
</script>

<style lang="scss" scoped></style>
