<template>
  <div>
    <!-- 头部 -->
    <Header></Header>

    <!-- 轮播图 -->
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="5000" arrow="always" height="500px">
          <el-carousel-item v-for="item in carouselImages" :key="item">
            <img :src="item.idView" class="carousel-img">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <!-- 团队介绍和团队活动 -->
    <TeamRelated></TeamRelated>

    <!-- 成功案例 -->
    <SuccessCase></SuccessCase>

    <!-- 律师团队 -->
    <LaywerTeam></LaywerTeam>

    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './Footer'
  import SuccessCase from './SuccessCase'
  import LaywerTeam from './LawyerTeam'
  import Header from './Header'
  import TeamRelated from './TeamRelated'

  export default {
    name: 'HelloWorld',
    components: {
      Footer,
      SuccessCase,
      LaywerTeam,
      Header,
      TeamRelated
    },
    data() {
      return {
        carouselImages: [
          {
            id: 0,
            idView: require("../assets/nav-1.jpg")
          },
          {
            id: 1,
            idView: require("../assets/nav-2.jpg")
          }
        ],

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
