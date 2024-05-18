<template>
  <div></div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    // ref -> Object
    const count = ref(0)
    const state = reactive({
      count: count
    })
    // count.value++
    // count.value++
    // console.log('state.count:', state.count)

    //ref -> Array
    const messgae = ref('hello')
    const arr = reactive([messgae])
    console.log('arr[0]:', arr[0].value)

    return {
      count,
      state,
      messgae,
      arr
    }
  }
}
</script>

<style lang="scss" scoped></style>
