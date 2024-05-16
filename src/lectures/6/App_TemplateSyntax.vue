<template>
  <div>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button @click="message = message + '!'">click</button>
    <hr />
    <h2>HTML</h2>
    <p v-html="rawHtml"></p>
    <hr />
    <h2>속성 바인딩</h2>
    <div :title="dynmicTitle">마우스를 올려보세요</div>
    <input type="text" value="홍길동" :disabled="isInputDisabled" />
    <input :="attrs" />
    <h2>javaScript</h2>
    {{ message.split('').reverse().join('') }}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('안녕하세요!')
    const rawHtml = ref('<strong>안녕하세요</string>')

    const dynmicTitle = ref('안녕하세요~~')
    const isInputDisabled = ref(false)

    const attrs = ref({
      type: 'text',
      value: '12345678',
      disabled: false
    })

    return {
      message,
      rawHtml,
      dynmicTitle,
      isInputDisabled,
      attrs
    }
  }
}
</script>

<style lang="scss" scoped></style>
