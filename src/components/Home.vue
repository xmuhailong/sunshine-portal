<template>
  <div>
    <!-- 头部 -->
    <Header></Header>

    <router-view></router-view>

    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>

  import Footer from './Footer'
  import Header from './Header'

  export default {
    name: 'HelloWorld',
    components: {
      Footer,
      Header,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
