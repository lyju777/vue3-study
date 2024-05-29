<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">provide inject 컴포넌트</div>
      <div class="card-body">
        <button @click="count++">버튼</button>
        <p>{{ appMessage }}</p>
        <p>{{ msg }}</p>
        <Child></Child>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, provide, ref } from 'vue'
import Child from './Child.vue'
export default {
  components: {
    Child
  },
  setup() {
    const staticMessage = 'static 메시지'
    const message = ref('message')
    const count = ref(10)
    // provide('static-message', staticMessage)
    const updateMessage = (appendMessage) => {
      message.value = message.value + appendMessage
    }
    provide('message', { message, updateMessage })
    provide('count', count)

    const appMessage = inject('app-message')
    const msg = inject('msg')
    return { count, appMessage, msg }
  }
}
</script>

<style lang="scss" scoped></style>
