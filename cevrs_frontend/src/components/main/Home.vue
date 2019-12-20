<template>
    <div class="king-page-box">
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
                                <el-steps :active="carouselNum" finish-status="success" simple style="margin-top: 20px">
                                    <el-step title="输入成绩" ></el-step>
                                    <el-step title="高校特性选择" ></el-step>
                                    <el-step title="志愿选择" ></el-step>
                                </el-steps>
                                <!-- 设置面板Start -->
                                <!-- 设置面板End -->
                                <div>
                                    <el-row :gutter="20" class="forms">
                                        <el-col :span="2" class="page-button">
                                            <el-button type="primary" class="page-button-left" icon="el-icon-arrow-left" :disabled="carouselNum == 1" @click="backStep"></el-button>
                                        </el-col>
                                        <el-col :span="20">
                                            <div class="form-group">
                                                <div class="container-fluid mb0 " v-if="carouselNum == 1">
                                                    <div class="score-row">
                                                        <p>首先输入您的高考成绩相关信息</p>
                                                    </div>
                                                    <div class="score-row">
                                                        <el-form :inline="true" :model="formInput" class="demo-form-inline">
                                                            <el-form-item label="分科" class="score-row-first">
                                                                <el-radio v-model="formInput.radio" label="1">文科</el-radio>
                                                                <el-radio v-model="formInput.radio" label="2">理科</el-radio>
                                                            </el-form-item>
                                                            <el-form-item label="分数">
                                                                <el-input v-model="formInput.score" placeholder="考试分数" size="small" class="input-inline"></el-input>
                                                            </el-form-item>
                                                            <el-form-item label="排名">
                                                                <el-input v-model="formInput.rank" placeholder="排名" size="small" class="input-inline"></el-input>
                                                            </el-form-item>
                                                        </el-form>
                                                    </div>
                                                </div>
                                                <div class="container-fluid mb0 " v-if="carouselNum == 2">
                                                    <div>
                                                        <p>根据您心中重要性的先后顺序，对学校的以下特性进行排序</p>
                                                    </div>
                                                    <div class="row">
                                                        <el-form :inline="true" :model="formInput" class="demo-form-inline">
                                                            <el-form-item label="第一" class="ahead-select">
                                                                <el-select v-model="formInput.firstValue" placeholder="请选择">
                                                                    <el-option
                                                                    v-for="item in options"
                                                                    :key="item.value"
                                                                    :label="item.label"
                                                                    :value="item.value">
                                                                    </el-option>
                                                                </el-select>
                                                            </el-form-item>
                                                            <el-form-item label="第二" class="back-select">
                                                                <el-select v-model="formInput.secondValue" placeholder="请选择">
                                                                    <el-option
                                                                    v-for="item in options"
                                                                    :key="item.value"
                                                                    :label="item.label"
                                                                    :value="item.value">
                                                                    </el-option>
                                                                </el-select>
                                                            </el-form-item>
                                                        </el-form>
                                                        <el-form :inline="true" :model="formInput" class="demo-form-inline">
                                                            <el-form-item label="第三" class="ahead-select">
                                                                <el-select v-model="formInput.thirdValue" placeholder="请选择">
                                                                    <el-option
                                                                    v-for="item in options"
                                                                    :key="item.value"
                                                                    :label="item.label"
                                                                    :value="item.value">
                                                                    </el-option>
                                                                </el-select>
                                                            </el-form-item>
                                                            <el-form-item label="第四" class="back-select">
                                                                <el-select v-model="formInput.fourthValue" placeholder="请选择">
                                                                    <el-option
                                                                    v-for="item in options"
                                                                    :key="item.value"
                                                                    :label="item.label"
                                                                    :value="item.value">
                                                                    </el-option>
                                                                </el-select>
                                                            </el-form-item>
                                                        </el-form>
                                                    </div>
                                                </div>
                                                <div class="container-fluid mb0 " v-if="carouselNum == 3">
                                                    <div>
                                                        <p>请选择三种填报策略下的推荐院校个数</p>
                                                    </div>
                                                    <div class="num-row">
                                                        <el-form :inline="true" :model="formInput" class="demo-form-inline">
                                                            <el-form-item label="冲" class="num-row-first">
                                                                <el-input v-model="formInput.riskNum" placeholder="冲的数目" size="small" class="input-num"></el-input>
                                                            </el-form-item>
                                                            <el-form-item label="稳">
                                                                <el-input v-model="formInput.surelyNum" placeholder="稳的数目" size="small" class="input-num"></el-input>
                                                            </el-form-item>
                                                            <el-form-item label="保">
                                                                <el-input v-model="formInput.defiNum" placeholder="保的数目" size="small" class="input-num" ></el-input>
                                                            </el-form-item>
                                                        </el-form>
                                                    </div>
                                                    <div>
                                                        <el-button round type="primary" class="submit-button" @click="submit">提交</el-button>
                                                    </div>
                                                </div>    
                                            </div>
                                        </el-col>
                                        <el-col :span="2" class="page-button">
                                            <el-button type="primary" class="page-button-right" icon="el-icon-arrow-right" :disabled="carouselNum == 3" @click="aheadStep"></el-button>
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
            carouselNum: 1,
            imgList: [
                {id: 0, idView: require('../../assets/image/fight0.jpg')},
                {id: 1, idView: require('../../assets/image/fight1.jpeg')},
                {id: 2, idView: require('../../assets/image/fight2.jpg')},
                {id: 3, idView: require('../../assets/image/fight3.jpeg')}
            ],
            imgHeight: "200px",
            options: [
                {
                    value: "1",
                    label: "综合实力"
                },
                {
                    value: "2",
                    label: "所在城市"
                },
                {
                    value: "3",
                    label: "就业率"
                },
                {
                    value: "4",
                    label: "国家资金"
                },
            ],
            
            formInput: {
                score: '',
                rank: '',
                radio: '',
                firstValue: '',
                secondValue: '',
                thirdValue: '',
                fourthValue: '',
                riskNum: '',
                surelyNum: '',
                defiNum: '',
            }
        }
    },
        methods: {
            backStep: function(carouselNum) {
                console.log(this.carouselNum)
                this.carouselNum -= 1
            }, 
            aheadStep: function(carouselNum) {
                this.carouselNum += 1
                console.log(this.carouselNum)
            },
            submit: function(){
                console.log(this.formInput.score)
                this.$axios({
                    method: 'post',
                    url: 'http://localhost:8000/',
                    data: this.qs.stringify({
                        score: this.formInput.score,
                        rank: this.formInput.rank,
                        radio: this.formInput.radio,
                        firstValue: this.formInput.firstValue,
                        secondValue: this.formInput.secondValue,
                        thirdValue: this.formInput.thirdValue,
                        fourthValue: this.formInput.fourthValue,
                        riskNum: this.formInput.riskNum,
                        surelyNum: this.formInput.surelyNum,
                        defiNum: this.formInput.defiNum
                    })
                }).then(
                    function (response) {
                        console.log(response.data)
                    }
                )
                this.$router.push({ name: 'Result'})
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
      align-items: center;
  }
  .panel-title {
      text-align: center
  }
  .form-inline {
      width:100px
  }
  .score-row {
      margin-top: 5%;
  }
  .ahead-select {
      margin-left: 15%;
  }
  .back-select {
      margin-left: 5%;
  }
  .num-row {
      margin-top: 5%;
  }
  .num-row-first {
      margin-left:5px; 
  }
  .input-num {
      width: 190px
  }
  .submit-button {
      margin-left: 42%;
      margin-right: auto;
      width: 100px
  }
</style>