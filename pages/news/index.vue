<template>
  <div>
      <h2>News Index page</h2>
	    <p>NewsID:{{$route.params.newsId}}</p>
      <ul>
        <li> <nuxt-link :to="{name:'index'}">Home</nuxt-link></li>
        <li><nuxt-link to="/news/123">News-1</nuxt-link></li>
        <li><nuxt-link :to="{name:'news-id',params:{id:'456a'}}">News-2</nuxt-link></li>
        <li><nuxt-link :to="{name:'news-id',params:{id:789,title:'news-id'}}">News-id</nuxt-link></li>
      </ul>
  </div>
</template>

<script>

export default {

}
</script>
<style scoped>

</style>
