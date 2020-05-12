<template>
<div class="king-layout1-header">
    <nav>
        <div style="width:100%;height:50px;" class="king-header king-header4 ">
            <div class="king-header-inner">
                <div class="king-header-brand">
                    <a href="javascript:;">
                        <img src="static/image/title.jpg" height="35" width="80">
                    </a>
                </div>
                <!-- <div class="king-header-list list2">
                    <ul>
                        <li> <a href="javascript:;"><i class="glyphicon glyphicon-shopping-cart"></i></a> </li>
                        <li> <a href="javascript:;"><i class="glyphicon glyphicon-search"></i></a> </li>
                    </ul>
                </div> -->
                <div class="king-header-list list1">
                    <ul>
                        <li class="active">
                            <a href="javascript:void(0);" class="f14">
                                <span>
                                    <router-link to="/" style="font-size:1em">主页</router-link>
                                </span>
                            </a>
                            <ul class="king-submenu"> </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="f14">
                                <span>信息查询</span>
                            </a>
                            <ul class="king-submenu">
                                <li>
                                    <a href="javascript:void(0);">
                                        <router-link to="/SchoolTable">学校信息</router-link>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <router-link to="/MajorTable">专业信息</router-link>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <router-link to="/GradeLine">录取批次线</router-link>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="f14">
                                <span>模拟志愿</span>
                            </a>
                            <ul class="king-submenu"> </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="f14">
                                <span>个人中心</span>
                            </a>
                            <ul class="king-submenu">
                                <li>
                                    <router-link to="/Register">注册</router-link>
                                </li>
                                <li>
                                    <router-link to="/Login">登录</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
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