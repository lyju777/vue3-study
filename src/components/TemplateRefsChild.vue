<template>
  <div></div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('hello')
    const sayHello = () => {
      alert(message.value)
    }
    return { message, sayHello }
  }
}
</script>

<style lang="scss" scoped></style>
