<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <p>{{ existLecture() }}</p>
    <button @click="counter++">counter:{{ counter }}</button>
    <h2>
      이름
      <p>{{ fullName }}</p>
    </h2>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'

export default {
  setup() {
    const teacher = reactive({
      name: '짐코딩',
      lectures: ['HTML/CSS', 'Javascript', 'Vue3']
    })

    const hasLecture = computed(() => {
      console.log('computed')
      return teacher.lectures.length > 0 ? ' 있음' : '없음'
    })

    const existLecture = () => {
      console.log('method')
      return teacher.lectures.length > 0 ? ' 있음' : '없음'
    }

    const counter = ref(0)

    const firstName = ref('홍')
    const lastName = ref('길동')
    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value
      },
      set(value) {
        ;[firstName.value, lastName.value] = value.split(' ')
      }
    })
    console.log('콘솔출력:', fullName.value)
    fullName.value = '짐 코딩'
    return {
      teacher,
      hasLecture,
      existLecture,
      counter,
      fullName
    }
  }
}
</script>

<style lang="scss" scoped></style>
