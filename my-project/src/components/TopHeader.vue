<template>
  <div id="header">
    <div style="width: 10%; float: left">
      <i class="el-icon-bell">aaaaa</i>
    </div>
    <div style="width: 50%;margin-left: 5%;float: left">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="1"><router-link to="/index/About" style=" text-decoration: none;">About</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/index/Blog" style=" text-decoration: none;">Blog</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/index/Demo" style=" text-decoration: none;">Demo</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/index/Home" style=" text-decoration: none;">Home</router-link></el-menu-item>
      </el-menu>
    </div>
    <div style="float: right">
      <i class="el-icon-edit"></i>
      <el-button round>按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
</style>
