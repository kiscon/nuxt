<template>
  <section class="container">

    <ul>
      <li>
         <nuxt-link :to="{name:'index'}">home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'about'}">ABOUT</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'news',params:{newsId:3306}}">NEWS</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'asyncData',params:{id:'wuuef'}}">asyncData</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'userInfo',params:{id:'a6893'}}">userInfo</nuxt-link>
      </li>

    </ul>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss" type="text/scss" scoped>

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ul{
      list-style: none;
      li{
        font-size: 30px;
      }
    }
  }



</style>
