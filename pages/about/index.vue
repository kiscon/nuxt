<template>
  <div id="about">
    <div><nuxt-link :to="{name:'index'}">Home</nuxt-link></div>
    <ul>
      <li v-for="(product,index) in productList" :key=index>
        <div>商品：{{product.title}}</div>
        <div>价格：{{product.price}}</div>
        <div>说明：{{product.desc}}</div>
        <div>评分：{{product.rating}}</div>
        <div>种类：{{product.categories.join('、')}}</div>
      </li>
    </ul>
    <!--<el-container>-->
      <!--<el-aside width="200px">Aside</el-aside>-->
      <!--<el-container>-->
        <!--<el-header>Header</el-header>-->
        <!--<el-main>Main</el-main>-->
        <!--<el-footer>Footer</el-footer>-->
      <!--</el-container>-->
    <!--</el-container>-->
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        productList: []
      }
    },
    created () {
      this.getProducts()
    },
    methods: {
      getProducts () {
        axios.get('/api/productSve/getProducts', {
          params: {
          }
        })
          .then((res) => {
            console.log(res)
            console.log(res.data)
            this.productList = res.data
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
  #about{
    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }

    body > .el-container {
      margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
  }
</style>
