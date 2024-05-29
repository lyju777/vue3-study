<template>
  <main>
    <div class="container py-5">
      <Mybutton class="my-button" id="my-button" @click="sayHello"></Mybutton>
      <LabelInput label="이름" data-id="id임"></LabelInput>
      <hr />
      <FancyButton>slot button <span style="color: red">@@@</span></FancyButton>
      <FancyButton></FancyButton>
      <hr />
      <AppCard>
        <template #[slotArgs]>제목입니다</template>
        <!-- <template #default>내용@@@@@@@@@@@@@</template> -->
        <!-- 암시적으로 default 슬롯입니다.
        <template #footer>푸터푸터</template> -->
      </AppCard>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import AppCard from './AppCard.vue'
import FancyButton from './FancyButton.vue'
import LabelInput from './LabelInput.vue'
import Mybutton from './Mybutton.vue'

export default {
  components: {
    Mybutton,
    LabelInput,
    FancyButton,
    AppCard
  },
  setup() {
    const sayHello = () => {
      alert('ㅎㅇ')
    }
    const slotArgs = ref('header')
    return { sayHello, slotArgs }
  }
}
</script>

<style lang="scss" scoped></style>
