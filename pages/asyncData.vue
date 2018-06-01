<template>
  <div>
      <h1>姓名：{{info.name}}</h1>
      <h2>年龄：{{info.age}}</h2>
      <h2>兴趣：{{info.interest}}</h2>
  </div>
</template>
<script>
  // http://myjson.com/ 创建数据的网站
  import axios from 'axios'
  export default {
      data() {
          return {
              name:'hello World',
          }
      },
      async asyncData({error}) {
        try {
          let {data} = await axios.get(`https://api.myjson.com/bins/wuuef`)
          return {
              info: data
          }
        } catch (err) {
          error({ statusCode: 404, message: 'Post not found' })
        }
      },
      created () {
          console.log(this.$route.params)
      },
//      asyncData({params, error}) {
//          return axios.get(`https://api.myjson.com/bins/${params.id}`)
//          .then((res)=>{
//              console.log(res)
//              return {info: res.data}
//          })
//          .catch((e)=>{
//              error({ statusCode: 404, message: 'Post not found' })
//          })
//      }
  }
</script>
<style lang="scss" type="text/scss" scoped>
</style>
