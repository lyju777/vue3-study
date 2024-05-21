<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV영역
        <p @click.self="clickP">
          p영역
          <!-- <span @click.stop="clickSpan">span영역 </span> -->
          <span @click="clickSpan">span영역 </span>
        </p>
      </div>
      <a href="https://naver.com" @click.prevent="clickA">a 영역</a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv')
      // location.href = 'https://naver.com'
    }

    const clickP = () => {
      console.log('clickP')
    }

    const clickSpan = (e) => {
      console.log('clickSpan')
      // alert('좋아요')
    }

    const clickA = () => {
      alert('어떤기능')
    }

    return { clickDiv, clickP, clickSpan, clickA }
  }
}
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background-color: #ccc;
}

#modifiers p {
  background-color: #999;
}

#modifiers span {
  background-color: #666;
  display: block;
}
</style>
