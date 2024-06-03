<template>
  <div class="container py-4">
    {{ msg }}
    <br />
    {{ message }}
    <input type="text" v-model="message" />
    <button @click="sayHello">btn</button>
    <PostItem type="news" title="제목" contents="내용" :is-like="true"></PostItem>
    <Mybutton class="parent-class"></Mybutton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PostItem from './setup/PostItem.vue'
import Mybutton from './setup/Mybutton.vue'
import axios from 'axios'

const message = ref('')
const msg = '안녕하세요'
const sayHello = () => {
  alert('ㅎㅇ')
}
async function callApi() {
  const response = await axios('https://dummy.restapiexample.com/api/v1/employees')
  console.log('response: ', response)
}
callApi()
</script>

<style lang="scss" scoped></style>
