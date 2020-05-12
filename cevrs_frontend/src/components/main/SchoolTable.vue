<template>
    <div class='container'>
        <div class='inner-container'>
            <div class='header'>
                <h2>院校查询</h2>
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
                            prop="name"
                            label="院校名称"
                            width="160"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="area"
                            label="所在地区"
                            width="160"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="manager"
                            label="办学类型"
                            width="160"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="kind"
                            label="学校类型"
                            width="160"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="funder"
                            label="隶属"
                            width="160"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="speciality"
                            label="特色"
                            width="160"
                            align="center">
                        </el-table-column>
                        <el-table-column 
                            label="操作"
                            width="180"
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
                            :total="2667">
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
                    name:'省份',
                    items:[
                    {
                        name:'北京',
                        active: false
                    },
                    {
                        name:'天津',
                        active: false
                    },
                    {
                        name:'河北',
                        active: false
                    },
                    {
                        name:'河南',
                        active: false
                    },
                    {
                        name:'山东',
                        active: false
                    },
                    {
                        name:'山西',
                        active: false
                    },
                    {
                        name:'陕西',
                        active: false
                    },
                    {
                        name:'内蒙古',
                        active: false
                    },
                    {
                        name:'辽宁',
                        active: false
                    },
                    {
                        name:'吉林',
                        active: false
                    },
                    {
                        name:'黑龙江',
                        active: false
                    },
                    {
                        name:'上海',
                        active: false
                    },
                    {
                        name:'江苏',
                        active: false
                    },
                    {
                        name:'安徽',
                        active: false
                    },
                    {
                        name:'江西',
                        active: false
                    },
                    {
                        name:'湖北',
                        active: false
                    },
                    {
                        name:'湖南',
                        active: false
                    },
                    {
                        name:'重庆',
                        active: false
                    },
                    {
                        name:'四川',
                        active: false
                    },
                    {
                        name:'贵州',
                        active: false
                    },
                    {
                        name:'云南',
                        active: false
                    },
                    {
                        name:'广东',
                        active: false
                    },
                    {
                        name:'广西',
                        active: false
                    },
                    {
                        name:'福建',
                        active: false
                    },
                    {
                        name:'甘肃',
                        active: false
                    },
                    {
                        name:'宁夏',
                        active: false
                    },
                    {
                        name:'新疆',
                        active: false
                    },
                    {
                        name:'西藏',
                        active: false
                    },
                    {
                        name:'海南',
                        active: false
                    },
                    {
                        name:'浙江',
                        active: false
                    },
                    {
                        name:'青海',
                        active: false
                    }
                    ]
                },
                {
                    name:'隶属',
                    items:[
                    {
                        name:'教育部',
                        active: false
                    },
                    {
                        name:'省教育厅',
                        active: false
                    },
                    {
                        name:'中央军委',
                        active: false
                    },
                    {
                        name:'交通部',
                        active: false
                    },
                    {
                        name:'公安部',
                        active: false
                    },
                    {
                        name:'中央办公厅',
                        active: false
                    },
                    {
                        name:'司法部',
                        active: false
                    },
                    {
                        name:'国家体育总局',
                        active: false
                    },
                    {
                        name:'外交部',
                        active: false
                    },
                    {
                        name:'交通部',
                        active: false
                    },
                    {
                        name:'卫生部',
                        active: false
                    },
                    {
                        name:'市教育局',
                        active: false
                    }
                    ]
                },
                {
                    name:'院校类型',
                    items:[
                    {
                        name:'综合类',
                        active: false
                    },
                    {
                        name:'工科类',
                        active: false
                    },
                    {
                        name:'医药类',
                        active: false
                    },
                    {
                        name:'军事类',
                        active: false
                    },
                    {
                        name:'体育类',
                        active: false
                    },
                    {
                        name:'党政类',
                        active: false
                    },
                    {
                        name:'农业类',
                        active: false
                    },
                    {
                        name:'师范类',
                        active: false
                    },
                    {
                        name:'政法类',
                        active: false
                    },
                    {
                        name:'林业类',
                        active: false
                    },
                    {
                        name:'民族类',
                        active: false
                    },
                    {
                        name:'艺术类',
                        active: false
                    },
                    {
                        name:'语言类',
                        active: false
                    }
                    ]
                },
                {
                    name:'办学类型',
                    items:[
                    {
                        name:'公办院校',
                        active: false
                    },
                    {
                        name:'民办院校',
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
                    name: "北京大学",
                    area: "北京市",
                    funder: "公办院校",
                    kind: "综合类院校",
                    manager: "教育部",
                    speciality: "985, 211"
                },
                {
                    name: "清华大学",
                    area: "北京市",
                    funder: "公办院校",
                    kind: "工科类院校",
                    manager: "教育部",
                    speciality: "985, 211"
                },
                {
                    name: "武汉大学",
                    area: "湖北-武汉市",
                    funder: "公办院校",
                    kind: "综合类院校",
                    manager: "教育部",
                    speciality: "985, 211"
                },
                {
                    name: "中南大学",
                    area: "湖南-长沙市",
                    funder: "公办院校",
                    kind: "综合类院校",
                    manager: "教育部",
                    speciality: "985, 211"
                },
                {
                    name: "浙江大学",
                    area: "浙江-杭州市",
                    funder: "公办院校",
                    kind: "综合类院校",
                    manager: "教育部",
                    speciality: "985, 211"
                },
                {
                    name: "上海交通大学",
                    area: "上海市",
                    funder: "公办院校",
                    kind: "综合类院校",
                    manager: "教育部",
                    speciality: "985, 211"
                },
                {
                    name: "南京大学",
                    area: "江苏-南京市",
                    funder: "公办院校",
                    kind: "综合类院校",
                    manager: "教育部",
                    speciality: "985, 211"
                },
                {
                    name: "中国人民大学",
                    area: "北京市",
                    funder: "公办院校",
                    kind: "综合类院校",
                    manager: "教育部",
                    speciality: "985, 211"
                },
                {
                    name: "吉林大学",
                    area: "吉林-长春市",
                    funder: "公办院校",
                    kind: "综合类院校",
                    manager: "教育部",
                    speciality: "985, 211"
                },
                {
                    name: "华中科技大学",
                    area: "湖北-武汉市",
                    funder: "公办院校",
                    kind: "工科类院校",
                    manager: "教育部",
                    speciality: "985, 211"
                },
                {
                    name: "四川大学",
                    area: "四川-成都市",
                    funder: "公办院校",
                    kind: "综合类院校",
                    manager: "教育部",
                    speciality: "985, 211"
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
            this.$router.push({ name: 'SchoolDetail' })
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