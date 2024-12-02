<template>
  <div>
    <input
      v-model="model"
      type="text"
      placeholder="Add a new task"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg"
    />
  </div>
</template>

<script setup>
const model = defineModel()
</script>

<style lang="scss" scoped></style>
