<template>
  <div>
    <p>new content</p>
    <p>我是接收的参数one：{{one}}</p>
  </div>
</template>

<script>

  export default {
    data() {
        return {
            one: ''
        }
    },
    created() {
      this.one = this.$route.params.one
      console.log(this.$route.params)
    }
  }
</script>

