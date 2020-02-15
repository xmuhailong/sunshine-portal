<template>
  <div>
    <el-row style="height: 750px">
      <el-row>
        <el-col :span="24" align="center">
          <h1>— 律师团队 —</h1>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" :gutter="50">
        <el-col :span="20">
          <el-carousel :interval="4000" type="card" height="500px">
            <el-carousel-item v-for="(item, index) in laywersImgs" :key="index" align="center">
              <img :src="item.photo" :alt="item.name" style="width: 420px;" class="class_outer"/>
              <div class="class_cover">
                <h2>{{ item.name }} 律师</h2>
                <span>{{ item.place }}</span>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24" style="text-align: center; margin-top: 50px">
          <el-button type="info" plain>查看更多</el-button>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "LawyerTeam",
    data() {
      return {
        laywersImgs: [
          {
            name: 'songbin',
            photo: require("../../assets/songbin.jpg"),
            place: '北京市盈科（深圳）律师事务所执业律师'
          },
          {
            name: 'hanjian',
            photo: require("../../assets/hanjian.jpg"),
            place: '北京市盈科（深圳）律师事务所执业律师'
          },
          {
            name: 'liuyanhua',
            photo: require("../../assets/liuyanhua.jpg"),
            place: '北京市盈科（深圳）律师事务所执业律师'
          },
          {
            name: 'yangguanghua',
            photo: require("../../assets/yangguagnhua.jpg"),
            place: '北京市盈科（深圳）律师事务所执业律师'
          },
          {
            name: 'yanglidi',
            photo: require("../../assets/yanglidi.jpg"),
            place: '北京市盈科（深圳）律师事务所执业律师'
          },
          {
            name: 'yangxiaoli',
            photo: require("../../assets/yangxiaoli.jpg"),
            place: '北京市盈科（深圳）律师事务所执业律师'
          },
          {
            name: 'yangyu',
            photo: require("../../assets/yanyu.jpg"),
            place: '北京市盈科（深圳）律师事务所执业律师'
          },
          {
            name: 'yehuijuan',
            photo: require("../../assets/yehuijuan.jpg"),
            place: '北京市盈科（深圳）律师事务所执业律师'
          },
          {
            name: 'zhoufei',
            photo: require("../../assets/zhoufei.jpg"),
            place: '北京市盈科（深圳）律师事务所执业律师'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .class_outer {
    display: block;
    margin: 10px auto;
    overflow: hidden;
  }

  .class_cover {
    width: 415px;
    height: 100px;
    padding-left: 5px;
    background-color: rgba(0, 0, 0, .50);
    color: #FFFFFF;
    position: absolute;
    left: 75px;
    bottom: 0px;
  }
</style>