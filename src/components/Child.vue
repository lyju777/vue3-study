<template>
  <div class="card">
    <div class="card-header">자식 컴포넌트</div>
    <div class="card-body">
      {{ appMessage }}
      <DeepChild></DeepChild>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import DeepChild from './DeepChild.vue'

export default {
  components: {
    DeepChild
  },
  setup() {
    const appMessage = inject('app-message')

    return { appMessage }
  }
}
</script>

<style lang="scss" scoped></style>
