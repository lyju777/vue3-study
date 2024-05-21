<template>
  <div>
    <button @click="printEventInfo('hello vue3', $event)">이벤트 핸들러</button>
  </div>
  <hr />
  <input type="text" @keyup="onKeyupHandler" />
</template>

<script>
export default {
  setup() {
    const printEventInfo = (message, event) => {
      console.log('message:', message)
      console.log('event:', event)
      console.log('event.target:', event.target.tagName)
    }

    const onKeyupHandler = (event) => {
      console.log('event.key: ', event.key)
    }
    return { printEventInfo, onKeyupHandler }
  }
}
</script>

<style lang="scss" scoped></style>
