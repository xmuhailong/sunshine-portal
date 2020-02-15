<template>
  <div>
    <el-row type="flex" justify="center" style="height: 500px; margin-top: 50px;">
      <el-col :span="10">
        <el-tabs v-model="activeName">
          <el-tab-pane label="团队介绍" name="first">
            <el-card :body-style="{ padding: '0px', border: none }">
              <img src="../../assets/team-brf-intdct.jpg" style="width: 100%; ">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="team-brf">
                  <p>
                    大中至正，博闻至明。
                    成章家族法律事务团队是由北京市中闻（深圳）律师事务所主任杨广华律师领衔的家族法律事务律师团队。
                    成章家族法律事务团队立足家族企业法律事务，结合深圳民营企业家的发展服务需求团结志同道合的中闻法律人……
                  </p>
                  <el-button type="info" plain>查看更多</el-button>
                </div>
              </div>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="1"></el-col>
      <el-col :span="10">
        <el-tabs v-model="activeName">
          <el-tab-pane label="团队活动" name="first">
            <el-row :gutter="10" type="flex" align="top">
              <el-col :span="8">
                <el-image :src="teamActives1">
                </el-image>
              </el-col>
              <el-col :span="16">
                <span style="font-size: 16px;">成章家族法律事务团队受邀前往盈科（东莞）传授业务经验</span>
                <p style="color: #404040;">2018年6月29日，盈科深圳成章家族法律事务团队受邀前往北京市盈科（东莞）律师事务所传授业务经验。</p>
              </el-col>
            </el-row>

            <el-divider></el-divider>

            <el-row :gutter="10" type="flex" align="top">
              <el-col :span="8">
                <el-image :src="teamActives2">
                </el-image>
              </el-col>
              <el-col :span="16">
                <span style="font-size: 16px;">团队成员受邀参加海南自贸区（港）首届财富保障与传承论</span>
                <p style="color: #404040;">6月2日上午，海南自贸区（港）首届财富保障与传承论坛在海口举行。在论坛上，成章家族法律事务团队的部分成员做了发言。</p>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TeamRelated",
    data() {
      return {
        teamActives1: require('../../assets/team-actives-1.jpg'),
        teamActives2: require('../../assets/team-actives-2.jpg'),
        activeName: 'first',
      }
    }
  }
</script>

<style scoped lang="less">
  .team-brf {
    margin-top: 13px;
    line-height: 12px;
    text-align: center;

    .el-button {
      margin: 0 auto;
    }
  }

  // 去掉外框和圆角
  .el-card {
    border: none;
    border-radius: 0px;
  }
</style>