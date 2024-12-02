<script setup>
import BaseCard from '@/components/BaseCard.vue'
import { useFetch } from '@/composables/useFetch.js'
import BaseInput from '@/components/BaseInput.vue'
import TodoItem from '@/components/TodoItem.vue'
import TodoStats from '@/components/TodoStats.vue'
import { computed, ref } from 'vue'

// URL을 ref로 선언하여 유연하게 사용할 수 있음
const todoUrl = ref('/todos.json')
const { data: todos } = useFetch(todoUrl)

const newTodo = ref('')
const handleAddTodo = () => {
  todos.value.push({
    id: Date.now(),
    title: newTodo.value,
    completed: false
  })
}
const total = computed(() => todos.value?.length)

const completed = computed(() => todos.value?.filter((todo) => todo.completed).length)

const pending = computed(() => todos.value?.filter((todo) => !todo.completed).length)
</script>

<template>
  <main class="bg-gray-50 min-h-screen p-16">
    <BaseCard custom-attr="Hello World!">
      <h1 class="text-3xl font-bold text-center mb-8">할 일 목록</h1>
      <BaseInput v-model="newTodo" @keyup.ctrl.enter="handleAddTodo" />
      {{ newTodo }}
      <div class="space-y-2">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :title="todo.title"
          v-model:checked="todo.completed"
        />
      </div>
      <TodoStats :total :completed :pending />
    </BaseCard>
  </main>
</template>
