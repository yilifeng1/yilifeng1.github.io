<template>
  <el-container style="height: 100%">
    <el-header>
      <top-header></top-header>
    </el-header>

    <el-container>
      <el-aside width="150px">
        <aside-aside name="qwert"></aside-aside>
      </el-aside>

      <el-main>
        <div id="content">
          <slot name="content"></slot>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import Aside from '@/components/Aside'

export default {
  name: 'index',
  components: {
    'top-header': TopHeader,
    'aside-aside': Aside
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .el-header {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 60px
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
