<template>
  <el-row style="display: flex;align-items: center; justify-content: space-around;padding-bottom: 15px">
    <hr style="width: 38%;height:1px;border:none;border-top:1px solid #000000;"/>
    <span>{{ title }}</span>
    <hr style="width: 35%;height:1px;border:none;border-top:1px solid #000000;"/>
  </el-row>
</template>

<script>
export default {
  name: 'line.vue',
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
