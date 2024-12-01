<script setup>
import BaseCard from '@/components/BaseCard.vue'
import { useFetch } from '@/composables/useFetch.js'
import { ref } from 'vue'

// URL을 ref로 선언하여 유연하게 사용할 수 있음
const todoUrl = ref('/todos.json')
const { data: todos } = useFetch(todoUrl)
</script>

<template>
  <main class="bg-gray-50 min-h-screen p-16">
    <BaseCard custom-attr="Hello World!">
      <h1 class="text-3xl font-bold text-center mb-8">할 일 목록</h1>
      <div class="space-y-2">
        <div
          v-for="todo in todos"
          :key="todo.id"
          class="p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition-all"
          draggable="true"
        >
          <span
            class="text-gray-800"
            :class="{
              'line-through text-gray-400': todo.completed
            }"
          >
            {{ todo.title }}
          </span>
        </div>
      </div>
    </BaseCard>
  </main>
</template>
