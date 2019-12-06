<template>
    <div class="king-page-box">
        <div class="king-layout1-header">
            <nav>
                <div style="width:100%;height:50px;" class="king-header king-header4 ">
                    <div class="king-header-inner">
                        <div class="king-header-brand">
                            <a href="javascript:;">
                                <img src="https://magicbox.bk.tencent.com/static_api/v3/components/horizontal_nav8/images/logo.png" height="30">
                            </a>
                        </div>
                        <div class="king-header-list list2">
                            <ul>
                                <li> <a href="javascript:;"><i class="glyphicon glyphicon-shopping-cart"></i></a> </li>
                                <li> <a href="javascript:;"><i class="glyphicon glyphicon-search"></i></a> </li>
                            </ul>
                        </div>
                        <div class="king-header-list list1">
                            <ul>
                                <li class="active">
                                    <a href="javascript:void(0);" class="f14">
                                        <span>首页</span>
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
                                                <span>高校信息</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <span>专业信息</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <span>录取批次线</span>
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
                                            <a href="javascript:void(0);">
                                                <span>编辑信息</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>退出登录</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="king-layout2-main mt15" style="width:960px;">
            <div class="carousel">
                <el-carousel indicator-position="outside" :interval="4000" type="card" :height="imgHeight">
                    <el-carousel-item v-for="item in imgList" :key="item.id">
                        <el-col :span="24">
                            <img ref="imgHeight" :src="item.idView" class="banner_img"/>
                        </el-col>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- 设置面板样式一Start -->
            <!-- 设置面板样式一End -->
            <div class="container-fluid mb0 ">
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel king-panel1 mb0  ">
                            <div class="panel-heading king-panel-head1 king-panel-top1">
                                <h3 class="panel-title">高校推荐</h3>
                            </div>
                            <div class="panel-body">
                                <div class="container-fluid mb0 ">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img class="school" src="../../assets/image/csu.jpeg">
                                            <p>中南大学</p>
                                        </div>
                                        <div class="col-md-3">
                                            <img class="school" src="../../assets/image/hunan.jpg">
                                            <p>湖南大学</p>
                                        </div>
                                        <div class="col-md-3">
                                            <img class="school" src="../../assets/image/hnu.jpg">
                                            <p>湖南师范大学</p>
                                        </div>
                                        <div class="col-md-3">
                                            <img class="school" src="../../assets/image/xtu.png">
                                            <p>湘潭大学</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid mb0 ">
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel king-panel1 mb0  ">
                            <div class="panel-heading king-panel-head1 king-panel-top1">
                                <h3 class="panel-title">志愿推荐</h3>
                            </div>
                            <div class="panel-body">
                                <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
                                    <el-step title="输入成绩" ></el-step>
                                    <el-step title="高校特性选择" ></el-step>
                                    <el-step title="志愿选择" ></el-step>
                                </el-steps>
                                <!-- 设置面板Start -->
                                <!-- 设置面板End -->
                                <div>
                                    <el-row :gutter="20" class="forms">
                                        <el-col :span="4" class="page-button">
                                            <el-button type="primary" icon="el-icon-arrow-left"></el-button>
                                        </el-col>
                                        <el-col :span="16">
                                            <div class="form-group">
                                                <div class="container-fluid mb0 " v-if="carousel_num == 1">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <form class="form-horizontal">
                                                                <div class="form-group clearfix ">
                                                                    <label class="col-sm-3 control-label bk-lh30 pt0">省份：</label>
                                                                    <div class="col-sm-9">
                                                                        <select name="" id="" class="form-control bk-valign-top">
                                                                            <option value="选择项1">选择项1</option>
                                                                            <option value="选择项2">选择项2</option>
                                                                            <option value="选择项3">选择项3</option>
                                                                            <option value="选择项4">选择项4</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <form class="form-horizontal">
                                                                <div class="form-group clearfix ">
                                                                    <label class="control-label col-sm-3 bk-lh30 pt0">分科：</label>
                                                                    <div class="col-sm-9">
                                                                        <div class="radio pt0">
                                                                            <label class="mr10">
                                                                                <input type="radio" name="optionsRadios" id="" class="bk-top5" value="文科">
                                                                                <span class="bk-lh30">文科</span>
                                                                            </label>
                                                                            <label class="mr10">
                                                                                <input type="radio" name="optionsRadios" id="" class="bk-top5" value="理科">
                                                                                <span class="bk-lh30">理科</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <form class="form-horizontal"> 
                                                                <div class="form-group clearfix ">
                                                                    <label class="col-sm-3 control-label bk-lh30 pt0">分数：</label>
                                                                    <div class="col-sm-9">
                                                                        <input type="text" class="form-control bk-valign-top" id="" placeholder="提示信息"> </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container-fluid mb0 " v-if="carousel_num == 2">
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <form class="form-horizontal">
                                                                <div class="form-group clearfix ">
                                                                    <label class="col-sm-3 control-label bk-lh30 pt0">参数：</label>
                                                                    <div class="col-sm-9">
                                                                        <select name="" id="" class="form-control bk-valign-top">
                                                                            <option value="选择项1">选择项1</option>
                                                                            <option value="选择项2">选择项2</option>
                                                                            <option value="选择项3">选择项3</option>
                                                                            <option value="选择项4">选择项4</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <form class="form-horizontal">
                                                                <div class="form-group clearfix ">
                                                                    <label class="col-sm-3 control-label bk-lh30 pt0">参数：</label>
                                                                    <div class="col-sm-9">
                                                                        <select name="" id="" class="form-control bk-valign-top">
                                                                            <option value="选择项1">选择项1</option>
                                                                            <option value="选择项2">选择项2</option>
                                                                            <option value="选择项3">选择项3</option>
                                                                            <option value="选择项4">选择项4</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <form class="form-horizontal">
                                                                <div class="form-group clearfix ">
                                                                    <label class="col-sm-3 control-label bk-lh30 pt0">参数：</label>
                                                                    <div class="col-sm-9">
                                                                        <select name="" id="" class="form-control bk-valign-top">
                                                                            <option value="选择项1">选择项1</option>
                                                                            <option value="选择项2">选择项2</option>
                                                                            <option value="选择项3">选择项3</option>
                                                                            <option value="选择项4">选择项4</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <form class="form-horizontal">
                                                                <div class="form-group clearfix ">
                                                                    <label class="col-sm-3 control-label bk-lh30 pt0">参数：</label>
                                                                    <div class="col-sm-9">
                                                                        <select name="" id="" class="form-control bk-valign-top">
                                                                            <option value="选择项1">选择项1</option>
                                                                            <option value="选择项2">选择项2</option>
                                                                            <option value="选择项3">选择项3</option>
                                                                            <option value="选择项4">选择项4</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container-fluid mb0 " v-if="carousel_num == 3">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <form class="form-horizontal">
                                                                <div class="form-group clearfix ">
                                                                    <label class="col-sm-3 control-label bk-lh30 pt0">参数：</label>
                                                                    <div class="col-sm-9">
                                                                        <input type="text" class="form-control bk-valign-top" id="" placeholder="提示信息"> </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <form class="form-horizontal">
                                                                <div class="form-group clearfix ">
                                                                    <label class="col-sm-3 control-label bk-lh30 pt0">参数：</label>
                                                                    <div class="col-sm-9">
                                                                        <input type="text" class="form-control bk-valign-top" id="" placeholder="提示信息"> </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <form class="form-horizontal">
                                                                <div class="form-group clearfix ">
                                                                    <label class="col-sm-3 control-label bk-lh30 pt0">参数：</label>
                                                                    <div class="col-sm-9">
                                                                        <input type="text" class="form-control bk-valign-top" id="" placeholder="提示信息"> </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>    
                                            </div>
                                        </el-col>
                                        <el-col :span="4" class="page-button">
                                            <el-button type="primary" icon="el-icon-arrow-right"></el-button>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form class="form-horizontal">
                <section>
                    <div class="form-group clearfix">
                        <div class="col-sm-offset-3 col-sm-9">
                            <div class="bk-horizontal-line"></div>
                        </div>
                    </div>
                </section>
            </form>
            <div class="container-fluid mb0 ">
                <div class="row">
                    <div class="col-md-3">
                        <div class="panel king-panel1 mb0  ">
                            <div class="panel-heading king-panel-head1 king-panel-top1">
                                <h3 class="panel-title">高校信息</h3>
                            </div>
                            <div class="panel-body">
                                <img class="icon" src="../../assets/icon/school.png"> </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="panel king-panel1 mb0  ">
                            <div class="panel-heading king-panel-head1 king-panel-top1">
                                <h3 class="panel-title">专业信息</h3>
                            </div>
                            <div class="panel-body">
                                <img class="icon" src="../../assets/icon/major.png"> </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="panel king-panel1 mb0  ">
                            <div class="panel-heading king-panel-head1 king-panel-top1">
                                <h3 class="panel-title">分数线查询</h3>
                            </div>
                            <div class="panel-body">
                                <img class="icon" src="../../assets/icon/ranks.png"> </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="panel king-panel1 mb0  ">
                            <div class="panel-heading king-panel-head1 king-panel-top1">
                                <h3 class="panel-title">招生计划</h3>
                            </div>
                            <div class="panel-body">
                                <img class="icon" src="../../assets/icon/infos.png"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
        return {
            carousel_num: 1,
            imgList: [
                {id: 0, idView: require('../../assets/image/fight0.jpg')},
                {id: 1, idView: require('../../assets/image/fight1.jpeg')},
                {id: 2, idView: require('../../assets/image/fight2.jpg')},
                {id: 3, idView: require('../../assets/image/fight3.jpeg')}
            ],
            imgHeight: "200px"
        }
    }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .banner_img {
      width: 100%;
      height: 100%;
  }

  .container {
      width: 60%;
      align-items: center;
  }

  .icon {
      margin-left: 40px;
      width:100px;
      height: 100px;
      align-items: center;
  }

  .forms {
      height: 200px;
  }
  .page-button {
      margin-top: 50px;
  }

  .panel-title {
      text-align: center
  }
</style>