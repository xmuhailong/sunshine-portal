<template>
  <div>
    <!-- 轮播图 -->
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="5000" arrow="always" :height="bannerHeight + 'px'">
          <el-carousel-item v-for="(item,index) in carouselImages" :key="index">
            <img :src="item.idView" class="carousel-img" ref="image" @load="imageLoaded">
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
        bannerHeight: 1,
        imageCount: 0
      }
    },
    mounted () {
      window.addEventListener('resize', () => {
        this.bannerHeight = this.$refs.image[0].height
      }, false)
    },
    methods: {
      imageLoaded() {
        this.imageCount ++ ;

        if (this.imageCount === 1) {
          // 加载第一张图片的时候获取高度
          this.bannerHeight = this.$refs.image[0].height;
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .carousel-img {
    width: 100%;
  }
</style>