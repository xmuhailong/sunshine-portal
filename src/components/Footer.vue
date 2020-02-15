<template>
  <div>
    <el-row class="footer">
      <el-col :span="24">
        <el-row type="flex" justify="center" :gutter="30" style="margin-top: 30px;">
          <el-col :span="4">
            <h3>关于我们</h3>
            <el-link :underline="false" href="#" target="_blank">团队简介</el-link>
            <br>
            <el-link :underline="false" href="#" target="_blank">律师荣誉</el-link>
          </el-col>
          <el-col :span="4">
            <h3>团队活动</h3>
            <el-link :underline="false" href="#" target="_blank">团队建设</el-link>
            <br>
            <el-link :underline="false" href="#" target="_blank">新闻资讯</el-link>
          </el-col>
          <el-col :span="4">
            <h3>成功案例</h3>
            <el-link :underline="false" href="#" target="_blank">成功案例</el-link>
          </el-col>
          <el-col :span="4">
            <h3>关注我们</h3>
            <img src="../assets/official-account.jpg" alt="">
            <p style="color: #999;">微信公众号</p>
          </el-col>
          <el-col :span="5">
            <h3>联系我们</h3>
            <span style="color: #999;">全国统一服务热线</span>
            <br>
            <span style="font-size: 34px">0755-32935390</span>
            <br>
            <span style="color: #999;">工作时间 工作日09：00-18：00</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="1" style="padding-left: 33px">
            <span style="font-weight: bold;">友情链接：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span style="color: #999;">成章家族法律事务团队</span>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col :span="21">
            <el-divider></el-divider>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24" align="center" style="color: #999;">

            © 2018 成章家族法律事务团队
            <el-link :underline="false" href="#" target="_blank">
              备案号:粤ICP备18095672号 深圳网站建设公司：联雅网络
            </el-link>
            <span>
            <el-link :underline="false" href="#" target="_blank">
              <img src="../assets/cnzz.gif" alt="">
            </el-link>
          </span>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="less">
  .footer {
    color: #fff;
    margin-top: 50px;
    background-color: #2d2d2d;
    height: 350px;

    .el-link {
      color: #999;
    }

    .el-divider {
      background-color: #999;
    }
  }
</style>