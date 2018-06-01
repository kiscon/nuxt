<template>
  <div class="not-found">
    <div class="code-404" v-if="error.statusCode==404">
      <img src="~static/image/not-found.png">
      <p class="notice">很抱歉，您访问的页面找不到了~</p>
      <p><nuxt-link class="back" to="/">返回首页</nuxt-link></p>
    </div>
    <div class="serve" v-else>
      <h2>亲，服务异常，请稍后~</h2>
      <!--<h2 v-text="error.message"></h2>-->
    </div>
    <!--<div class="error" v-else>-->
    <!--<h2>请联系技术人员~</h2>-->
    <!--</div>-->
  </div>
</template>
<script>
  export default {
    props:['error'],
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .not-found {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .code-404{
      text-align: center;
      .notice{
        padding: 10px 0;
        font-weight: 700;
      }
      .back{
        text-decoration: none;
        color: #f00;
      }
    }
    .serve,.error{
      font-weight: 700;
    }
  }
</style>
