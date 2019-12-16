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
            style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
            <el-form :inline="true" style="margin-left:35%;margin-top:20px">
                <el-form-item>
                    <el-button type="primary">下载推荐详情</el-button>
                </el-form-item> 
                <el-form-item>
                    <el-button type="primary" style="margin-left:10px">下载学校录取详情</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    }
}
</script>
<style scoped>

</style>