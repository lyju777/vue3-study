<template>
  <div>
    <div class="text" :class="[activeClass, errorClass]">텍스트 입니다.</div>
    <button @click="toggle">toggle</button>
    <button @click="hasError = !hasError">toggleError</button>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'

export default {
  setup() {
    const isActive = ref(true)
    const hasError = ref(false)

    // const classObject = reactive({
    //   active: true,
    //   'text-danger': true
    // })
    const classObject = computed(() => {
      return {
        active: true,
        'text-danger': true
      }
    })

    const activeClass = ref('active')
    const errorClass = ref('error')

    const toggle = () => {
      isActive.value = !isActive.value
    }
    return { isActive, toggle, hasError, classObject, activeClass, errorClass }
  }
}
</script>

<style scoped>
.active {
  font-weight: 900;
}

.text-danger {
  color: red;
}
</style>
