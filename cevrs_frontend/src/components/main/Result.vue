<template>
    <div>
        <el-header>
            <h2>
                推荐结果
            </h2>
        </el-header>
        <el-main>
            <el-table
            :data="tableData"
            v-loading="loading"
            element-loading-text="推荐结果生成中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0,0,0,0.8)"
            style="width: 100%"
            ref="resultTable"
            stripe
            row-key="school"
            :expand-row-keys="expands"
            :header-cell-style="headStyle"
            @expand-change="rowClick">
                <el-table-column
                    prop="school"
                    label="学校"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="rate"
                    label="推荐概率"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="clazz"
                    label="批次"
                    width="180"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="kind"
                    label="推荐策略"
                    width="180"
                    align="center">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="props">
                        <el-button type="primary" @click="expandRow(props.row)">查看详情</el-button>
                    </template>
                </el-table-column>
                <el-table-column type="expand">
                    <template>
                        <div>
                            <div ref="rankChart" style="width: 540px; height: 200px; display: inline-block"></div>
                            <div ref="gradeChart" style="width: 450px; height: 200px; display: inline-block"></div>
                        </div>     
                    </template>
                </el-table-column>
            </el-table>
            <el-form :inline="true" style="margin-left:35%;margin-top:20px">
                <el-form-item>
                    <el-button type="primary" >下载推荐详情</el-button>
                </el-form-item> 
                <el-form-item>
                    <el-button type="primary" style="margin-left:10px">下载学校录取详情</el-button>
                </el-form-item>
            </el-form>
            <div ref="myChart" style="width: 450px; height: 200px;"></div>
        </el-main>
    </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
    data() {
        return {
            tableData: [],
            expands: [],
            presentRow: [2225,3555,4444,5555,4444],
            loading: true
        }
    },
    methods: {
        headStyle() {
            return 'background-color: white;'
        },
        // 调整展开的行，为了只让一个行展开，其他收起
        rowClick(row, event, column) {
            Array.prototype.remove = function (val) {
            let index = this.indexOf(val);
            if (index > -1) {
            this.splice(index, 1);
            }
            };
        
            if (this.expands.indexOf(row.school) < 0) {
                this.expands = []
                this.expands.push(row.school);
            } else {
                this.expands.remove(row.school);
            }
        },
        // 点击按钮，让展开行发生变化，触发上面的rowclick
        expandRow(row) {
            console.log(row)
            this.$refs.resultTable.toggleRowExpansion(row)
            this.presentRow = row
        },
        // 监听返回数据的变化，并把数据更新到表格中
        changeTable(data) {
            this.tableData = data.data
            this.loading = false
        },
        // 画图函数
        drawCharts() {
            console.log(this.presentRow)
            var rankChart = this.$echarts.init(this.$refs.rankChart);
            var gradeChart = this.$echarts.init(this.$refs.gradeChart);
            var options = {
                title: {
                    text: this.presentRow.school + "录取排名变化曲线"
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    name: '年份',
                    data: ['2014', '2015', '2016', '2017', '2018']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 名'
                    },
                    name: '录取排名',
                    scale: true
                },
                series: [
                    {
                        name: '录取名次',
                        type: 'line',
                        barWidth: '60%',
                        data: this.presentRow.ranks
                    }
                ]
            };
            rankChart.setOption(options)

            gradeChart.setOption({
                title: {
                    text: this.presentRow.school + "录取分数线与批次线对比图"
                },
                tooltip: {
                    trigger: "axis"
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
                        name: '录取分数线',
                        type: 'line',
                        data: this.presentRow.school_grades
                    },
                    {
                        name: '对应批次线',
                        type: 'line',
                        data: this.presentRow.ctrl_grades
                    }
                ]
            })
        }
    },
    watch: {
        '$store.state.results'() {
            this.changeTable(this.$store.state.results)
        }
    },
    updated() {
        this.drawCharts()
    }
}
</script>
<style scoped>
    .el-table {
        background-color: white;
    }
</style>
