<!--  -->
<template>
  <div class="">
    <el-container>
      <el-aside width="auto">
        <commonAside></commonAside>
      </el-aside>
      <el-container>
        <el-header>
          <commonHeader></commonHeader>
        </el-header>
        <el-main>
          <!-- 子路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import commonAside from "@/components/commonAside.vue";
import commonHeader from "@/components/commonHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    commonAside,
    commonHeader,
  },
};
</script>

<style scoped>
.el-header {
  padding: 0;
}
/*@import url(); 引入公共css类*/
/* .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  } */

/* .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  } */

/* .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
} */

/* body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>