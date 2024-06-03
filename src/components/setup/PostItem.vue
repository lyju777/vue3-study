<template>
  <div class="card">
    <div class="card-body">
      <span class="badge text-bg-secondary">{{ type === 'news' ? '뉴스' : '공지사항' }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>
      <a v-if="isLike" href="#" class="btn btn-danger" @click="toggleLike">👍</a>
      <a v-else href="#" class="btn btn-outline-danger" @click="toggleLike">👍</a>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(['toogleLike'])
const props = defineProps({
  type: {
    type: String,
    default: 'news',
    validator: (value) => {
      return ['news', 'notice'].includes(value)
    }
  },
  title: {
    type: String,
    required: true
  },
  contents: {
    type: String
    // required: true
  },
  isLike: {
    type: Boolean,
    default: false
  }
})

const toggleLike = () => {
  context.emit('toogleLike')
}
</script>

<style lang="scss" scoped></style>
