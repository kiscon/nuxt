<template>
  <div>
    <ul>
      <li>用户id：{{userInfos.user_id}}</li>
      <li>姓名：{{userInfos.user_name}}</li>
      <li>电话：{{userInfos.user_mobile}}</li>
      <li>类型：{{userInfos.user_type}}</li>
    </ul>
    <pre>{{userInfo}}</pre>
    <button @click="setUserInfo">添加</button>
    <pre>{{$store.state.star}}</pre>
  </div>
</template>

<script>
//  import { mapMutations } from 'vuex'
//  import ax from '~asset/js/axios'
  import axios from 'axios'

  export default {
    data () {
      return {
        userInfos: {},
      }
    },
    // fetch 方法用于在渲染页面前填充应用的状态树（store）数据，
    // 与 asyncData 方法类似，不同的是它不会设置组件的数据。
//    async fetch ({ store, params }) {
//      let { data } = await axios.get(`https://api.myjson.com/bins/${params.id}`)
//      console.log(data)
//      store.commit('setStars', data)
//    },
    fetch ({ store, params, error }) {
      return axios.get(`https://api.myjson.com/bins/${params.id}`)
        .then((res) => {
          return store.commit('setStars', res.data)
        })
        .catch((e)=>{
          error({ statusCode: 500, message: '亲，服务异常，请稍后~'})
        })
    },
    computed: {
      userInfo() {
        return this.$store.state.userInfo
      }
    },
    created () {
      this.userInfos = this.$store.state.userInfo
      console.log(this.userInfos)
    },
    methods: {
      setUserInfo () {
        this.$store.commit('SET_USER', {
          user_id: `1093`,
          user_name: `kiscon`,
          user_mobile: `15356783057`,
          user_type: `2`
        })
      }
    }
  }
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>
