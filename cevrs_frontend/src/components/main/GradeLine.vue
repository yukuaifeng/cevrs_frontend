<template>
    <div class="container-fluid mb0" style="margin-top: 10px">
        <div class="panel panel-default">
            <div class="panel-heading king-panel-head1 king-panel-top1">
                <h3 class="panel-title">批次线查询</h3>
            </div>
            <div class="panel-body">
                <div class="container-fluid mb0 ">
                    <div class="form-group">
                        <div class="score-row">
                            <el-form :inline="true" :model="formInput" ref="gradeLine">
                                <el-form-item label="省份">
                                    <el-select v-model="formInput.province" placeholder="选择省份">
                                      <el-option v-for="item in provinces"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="分科" class="score-row-first" prop="radio" style="margin-left:10px">
                                    <el-radio v-model="formInput.radio" label="1">文科</el-radio>
                                    <el-radio v-model="formInput.radio" label="2">理科</el-radio>
                                </el-form-item>
                                <el-form-item style="margin-left:10px">
                                    <el-checkbox v-model="formInput.checked1" label="本科一批" border size="medium"></el-checkbox>
                                    <el-checkbox v-model="formInput.checked2" label="本科二批" border size="medium"></el-checkbox>
                                    <el-checkbox v-model="formInput.checked3" label="本科三批" border size="medium"></el-checkbox>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div ref="gradeLineChart" style="margin-top:10px width: 540px; height: 200px;">

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
            provinces: [
                {
                    value: "1",
                    label: "湖南"
                },
                {
                    value: "2",
                    label: "湖北"
                }
            ],
            kinds: [
                {
                    value: "1",
                    label: "理科"
                },
                {
                    value: "2",
                    label: "文科"
                }
            ],
            clazzs: [
                {
                    value: "1",
                    label: "本科一批"
                },
                {
                    value: "2",
                    label: "本科二批"
                },
                {
                    value: "3",
                    label: "本科三批"
                }
            ],
            formInput: {
                province: "1",
                radio: "1",
                checked1: true,
                checked2: true,
                checked3: false
            }
        }
    },
    mounted() {
        this.drawCharts()
    },
    methods: {
        drawCharts() {
            var gradeLineChart = this.$echarts.init(this.$refs.gradeLineChart);

            gradeLineChart.setOption({
                title: {
                    text: "录取批次线走势图"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: ["本科一批", "本科二批"],
                    icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                    itemWidth: 10,  // 设置宽度
                    itemHeight: 10, // 设置高度
                    itemGap: 40 // 设置间距
                    },
                xAxis: {
                    boundaryGap: false,
                    name: '年份',
                    data: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
                },
                yAxis: {
                    type: 'value',
                    name: '分数线',
                    scale: true,
                    axisLabel: {
                        formatter: '{value} 分'
                    }
                },
                series: [
                    {
                        name: '本科一批',
                        type: 'line',
                        data: [544, 547, 535, 536, 534, 567, 572, 520, 495, 522, 526, 517, 505, 513]
                    },
                    {
                        name: '本科二批',
                        type: 'line',
                        data: [491, 496, 487, 482, 471, 494, 492, 451, 423, 442, 455, 439, 424, 450]
                    }
                ]
            })
        }
    }
}
</script>