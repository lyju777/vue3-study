<template>
  <div class="mt-8 p-4 bg-gray-50 rounded-lg">
    <h2 class="text-lg font-semibold text-gray-700 mb-4">작업 통계</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <p class="text-sm text-gray-500">전체 할 일</p>
        <p class="text-2xl font-bold text-gray-800">{{ total }}</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <p class="text-sm text-gray-500">완료된 할 일</p>
        <p class="text-2xl font-bold text-green-600">{{ completed }}</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <p class="text-sm text-gray-500">진행중인 할 일</p>
        <p class="text-2xl font-bold text-yellow-600">{{ pending }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue'

const { completed } = defineProps({
  total: {
    type: Number,
    default: 0
  },
  completed: {
    type: Number,
    default: 0
  },
  pending: {
    type: Number,
    default: 0
  }
})

watchEffect(() => {
  console.log('Completed:', completed)
})
</script>

<style lang="scss" scoped></style>
