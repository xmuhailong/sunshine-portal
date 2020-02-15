<template>
  <div class="container">
    <!-- 头部 -->
    <el-row type="flex" align="middle" class="header">
      <el-col :span="8" class="logo"><img src="../assets/logo.jpg"/></el-col>
      <el-col :span="14" class="nav">
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 active-text-color="red">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">业务领域</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">律师团队</el-menu-item>
          <el-menu-item index="4">成功案例</el-menu-item>
          <el-menu-item index="5">热点专题</el-menu-item>
          <el-menu-item index="6">团队活动</el-menu-item>
          <el-menu-item index="7">联系我们</el-menu-item>
        </el-menu>

      </el-col>
      <el-col :span="2"><i class="el-icon-phone"></i></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="less">


  .container {
    .header {
      width: 100%;

      .logo {
        display: flex;
        height: 95px;
        // 水平居中
        justify-content: center;
        align-items: center;
      }

      .nav {

      }

      // 去掉按钮下方的横线
      .el-menu-demo .el-menu-item {
        border-bottom: none;
        // 设置导航的字号并加粗
        font-size: 16px;
        font-weight: bold;
      }

      // 去掉nav下方的横线
      .el-menu.el-menu--horizontal {
        border-bottom: none;
      }
    }
  }
</style>