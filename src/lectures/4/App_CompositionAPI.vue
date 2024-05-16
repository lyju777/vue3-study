<template>
  <div>
    <h2>반응형 메세지</h2>
    <p>{{ reactiveMessage }}</p>
    <button @click="addReactiveMessage">add meaasge</button>

    <h2>일반 메세지</h2>
    <p>{{ normalMessage }}</p>
    <button @click="addnomalMessage">add meaasge</button>
  </div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from 'vue'

export default {
  setup() {
    console.log('setup()')
    const reactiveMessage = ref('reactiveMessage')
    const addReactiveMessage = () => {
      reactiveMessage.value = reactiveMessage.value + '!'
    }
    console.log('isRef(reactiveMessage)', isRef(reactiveMessage))

    let normalMessage = 'normalMessage'
    const addnomalMessage = () => {
      normalMessage = normalMessage + '!'
    }
    console.log('isRef(normalMessage)', isRef(normalMessage))

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeMount(() => {
      console.log('onBeforeMounted')
    })

    return {
      reactiveMessage,
      normalMessage,
      addReactiveMessage,
      addnomalMessage
    }
  }
}
</script>

<style lang="scss" scoped></style>
