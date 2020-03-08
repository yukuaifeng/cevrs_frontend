<template>
    <div class='container'>
        <div class='inner-container'>
            <div class='header'>
                <h2>专业查询</h2>
            </div>
            <el-card class="box-card">
                <template v-if='category.length'>
                    <div class='nav' v-for='(items,index) in category' :key='items.name'>
                        <div class="row">
                            <div class="col-sm-2">
                                <li class='mutil-query-title' v-if='items.name' :key="items.id">{{items.name}}<span style='margin-left: 20px;' @click='allIn(index)' class="active">全部</span></li>
                            </div>
                            <div class="col-sm-8" id="filter">
                                <div v-if='items.items.length'>
                                    <!-- <li v-for='(item) in items.items' :key="item.name">
                                        <span :class="{active : active==item.name}" @click='handle(index, item.name)' :key='item.name'>{{item.name}}</span>
                                    </li> -->
                                    <li v-for='(item,key) in items.items' :key='item.name'>
                                        <span :class="{'active':item.active}" @click='handle(index,key)' :key='item.id'>{{item.name}}</span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </el-card> 
            <div class="search">
                <el-input v-model="school_info" placeholder="请输入查询信息" size="medium" style="margin-right: 20px"></el-input>
                <el-button type="primary">查询</el-button>
            </div> 
             <div class="table">
                    <el-table
                        :data="tableData"
                        stripe=true
                        :header-cell-style="headClass"
                        style="width: 100%; font-size: 15px">
                        <el-table-column
                            prop="code"
                            label="专业代码"
                            width="225"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="专业名称"
                            width="225"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="kind"
                            label="所属大类"
                            width="225"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="level"
                            label="学历层次"
                            width="225"
                            align="center">
                        </el-table-column>
                        <el-table-column 
                            label="操作"
                            width="240"
                            align="center">
                            <template slot-scope="props">
                                <el-button type="primary" @click="detailInfo(props.row)">查看详情</el-button>
                            </template>
                        </el-table-column>
                        </el-table>
                    <div class="pagination">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="541">
                        </el-pagination>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    data () {
        return {
            category:[
                {
                    name:'分类',
                    items:[
                    {
                        name:'哲学',
                        active: false
                    },
                    {
                        name:'经济学',
                        active: false
                    },
                    {
                        name:'法学',
                        active: false
                    },
                    {
                        name:'教育学',
                        active: false
                    },
                    {
                        name:'文学',
                        active: false
                    },
                    {
                        name:'历史学',
                        active: false
                    },
                    {
                        name:'理学',
                        active: false
                    },
                    {
                        name:'工学',
                        active: false
                    },
                    {
                        name:'农学',
                        active: false
                    },
                    {
                        name:'医学',
                        active: false
                    },
                    {
                        name:'军事学',
                        active: false
                    }
                    ]
                },
                {
                    name:'学历层次',
                    items:[
                    {
                        name:'本科',
                        active: false
                    },
                    {
                        name:'专科',
                        active: false
                    }
                    ]
                }
            ],
            condition:[
                "examples"
            ],
            tableData: [
                {
                    code: "10101",
                    name: "马克思主义哲学",
                    kind: "哲学",
                    level: "本科"
                },
                {
                    code: "10102",
                    name: "中国哲学",
                    kind: "哲学",
                    level: "本科"
                },
                {
                    code: "10103",
                    name: "外国哲学",
                    kind: "哲学",
                    level: "本科"
                },
                {
                    code: "10104",
                    name: "逻辑学",
                    kind: "哲学",
                    level: "本科"
                },
                {
                    code: "10105",
                    name: "伦理学",
                    kind: "哲学",
                    level: "本科"
                },
                {
                    code: "10106",
                    name: "美学",
                    kind: "哲学",
                    level: "本科"
                },
                {
                    code: "10107",
                    name: "宗教学",
                    kind: "哲学",
                    level: "本科"
                },
                {
                    code: "10108",
                    name: "科学技术哲学",
                    kind: "哲学",
                    level: "本科"
                },
                {
                    code: "20101",
                    name: "政治经济学",
                    kind: "经济学-理论经济学",
                    level: "本科"
                },
                {
                    code: "20102",
                    name: "经济思想史",
                    kind: "经济学-理论经济学",
                    level: "本科"
                },
            ],
            active: "",
            count: 0
        }
    },
    methods: {
        handle:function(index, key){
            // var item=this.category[index].items;
            // this.condition.push(name)
            // this.active = name
            var item=this.category[index].items;
            const that = this;
            item.filter(function(v,i){
                if(i==key){
                    v.active=!v.active;          
                    that.condition.filter(function(v2,i){
                        if(v.name==v2.name){
                            that.condition.splice(i,1);
                            that.count--;
                        }
                    });                 
                    Vue.set(that.condition,that.count++,v);
                }
            });
             
        },
        remove:function(index){
            var item=this.category[index].items;
            const that = this;
            item.filter(function (v1,key) {
                v1.active=false;
                that.condition.filter(function(v2,i){
                    if(v1.name==v2.name){
                        that.condition.splice(i,1);
                        that.count--;
                    }
                });
            });
        },
        allIn:function(index){
            const that = this;
            var item=this.category[index].items;
            item.filter(function (v,key) {
                v.active=true;
                that.condition.filter(function(v2,i){
                    if(v.name==v2.name){
                        that.condition.splice(i,1);
                        that.count--;
                    }
                });                 
                Vue.set(that.condition,that.count++,v);
            });         
        },
        headClass: function(){
            return "background: #A9A9A9; font-size: 16px; color: #000000"
        },
        detailInfo: function() {
            this.$router.push({ name: 'MajorDetail' })
        }
    }
}
</script>

<style scoped>
ol {
  display:inline;
  white-space:nowrap;
}

li {
  list-style: none;
  display: inline-block;
  margin: 3px;
  margin-left: 5px;
}

.active {
   background: #fd7522;
   border: 1px solid #fd7522;
   color: rgb(136, 52, 52);
 }

 .table {
    text-align: center;
 }

 .el-table th, .el-table tr {
    background-color: #fff;
}

.header {
    padding-top: 20px;
    padding-bottom: 20px;
}

.search {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    display: inline-flex;
}

#filter {
    word-wrap: break-word;
    word-break: break-all;
    padding-left: 5px;
}
.mutil-query-title {
    float: right;
}
</style>