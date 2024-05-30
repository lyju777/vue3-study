<template>
  <div class="container py-4">
    <input type="text" ref="input" />
    <p>{{ input }}</p>
    <p v-if="input">{{ input.value }}, {{ $refs.input.value }}</p>
    <hr />

    <ul>
      <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li>
    </ul>
    <hr />
    <TemplateRefsChild ref="child"></TemplateRefsChild>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import TemplateRefsChild from './TemplateRefsChild.vue'

export default {
  components: {
    TemplateRefsChild
  },
  setup() {
    const input = ref(null)
    console.log('onMounted:', input.value)
    onMounted(() => {
      input.value.value = 'hello'
      console.log('onMounted:', input.value)

      itemRefs.value.forEach((item) => console.log('item:', item.textContent))
    })
    const fruits = ref(['사과', '딸기', '포도'])
    const itemRefs = ref([])

    const child = ref(null)
    return { input, fruits, itemRefs, child }
  }
}
</script>

<style lang="scss" scoped></style>
