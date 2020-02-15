<template>
  <div>
    <!-- 轮播图 -->
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="5000" arrow="always" height="500px">
          <el-carousel-item v-for="(item,index) in carouselImages" :key="index">
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
  </div>
</template>

<script>
  import SuccessCase from './SuccessCase'
  import LaywerTeam from './LawyerTeam'
  import TeamRelated from './TeamRelated'

  export default {
    name: "Main",
    components: {
      SuccessCase,
      LaywerTeam,
      TeamRelated
    },
    data() {
      return {
        carouselImages: [
          {
            id: 0,
            idView: require("../../assets/nav-1.jpg")
          },
          {
            id: 1,
            idView: require("../../assets/nav-2.jpg")
          }
        ],
      }
    }
  }
</script>

<style scoped lang="less">
  .carousel-img {
    max-width: 100%;
    max-height: 100%;
  }
</style>