<template>
  <div
    class="flex items-center gap-x-4 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition-all"
    draggable="true"
  >
    <input
      type="checkbox"
      v-model="checked"
      class="w-5 h-5 rounded border-gray-300 text-blue-500"
    />
    <span class="text-gray-800" :class="{ 'line-through text-gray-400': checked }">
      {{ title }}
    </span>
  </div>
</template>

<script setup>
import { defineProps, defineModel } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  }
})

// `defineModel`을 사용하여 양방향 바인딩된 `checked` 값 설정
const checked = defineModel('checked', { type: Boolean, default: false })
</script>
