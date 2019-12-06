<template>
<div class="header">
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <div class="logo" style="float: left; padding-top: 5px; padding-left: 5px">
        <el-image
          style="width: 60px; height: 50px"
          :src="url"
          :fit="fit"></el-image>
    </div>
    <el-menu-item index="4" style="float: right"><a href="https://www.ele.me" target="_blank">个人中心</a></el-menu-item>
    <el-menu-item index="3" style="float: right">模拟志愿</el-menu-item>
    <el-submenu index="2" style="float: right">
        <template slot="title">高考信息</template>
        <el-menu-item index="2-1">高校信息</el-menu-item>
        <el-menu-item index="2-2">专业信息</el-menu-item>
        <el-menu-item index="2-3">招生信息</el-menu-item>
    </el-submenu>
    <el-menu-item index="1" style="float: right">首页</el-menu-item>
    </el-menu>
</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        fit: 'fill',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
    .header {
        width: 100%;
    }
</style>