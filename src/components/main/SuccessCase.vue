<template>
  <div>
    <!-- 成功案例 -->
    <el-row style="background-color: #f4f4f4;height: 650px">
      <el-row>
        <el-col :span="24" align="center">
          <h1>— 成功案例 —</h1>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" :gutter="50">
        <el-col :span="6">
          <a href="">
            <el-card>
              <el-row type="flex" align="middle" justify="center" class="box-card">
                <el-col :span="8">
                  <el-image :src="caseTip">
                  </el-image>
                </el-col>
                <el-col :span="12" style="font-size: 16px;">离婚诉讼</el-col>
              </el-row>
            </el-card>
          </a>
        </el-col>
        <el-col :span="6">
          <a href="">
            <el-card>
              <el-row type="flex" align="middle" justify="center" class="box-card">
                <el-col :span="8">
                  <el-image :src="caseTip">
                  </el-image>
                </el-col>
                <el-col :span="12" style="font-size: 16px;">集体劳动争议纠纷</el-col>
              </el-row>
            </el-card>
          </a>
        </el-col>
        <el-col :span="6">
          <a href="">
            <el-card>
              <el-row type="flex" align="middle" justify="center" class="box-card">
                <el-col :span="8">
                  <el-image :src="caseTip">
                  </el-image>
                </el-col>
                <el-col :span="12" style="font-size: 16px;">股东资格确认纠纷</el-col>
              </el-row>
            </el-card>
          </a>
        </el-col>
      </el-row>
      <br>
      <br>
      <el-row type="flex" justify="center" :gutter="50">
        <el-col :span="6">
          <el-card>
            <el-row type="flex" align="middle" justify="center" class="box-card">
              <el-col :span="8">
                <el-image :src="caseTip">
                </el-image>
              </el-col>
              <el-col :span="12" style="font-size: 16px;">公司法律治理结构重整</el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
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
    name: "SuccessCase",
    data() {
      return {
        caseTip: require('../../assets/case.png'),
      }
    }
  }
</script>

<style scoped lang="less">
  a {
    text-decoration: none;

  }

  a:hover {
    color: #ff0000;
  }

  .box-card {
    height: 150px;
  }

</style>