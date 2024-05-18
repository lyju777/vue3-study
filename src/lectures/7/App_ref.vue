<template>
  <div>
    <p>{{ message }}</p>
    <button @click="addMessage">add click</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    let message = ref('hello vue')

    const addMessage = () => {
      message.value = message.value + '!'
    }
    return { message, addMessage }
  }
}
</script>

<style lang="scss" scoped></style>
