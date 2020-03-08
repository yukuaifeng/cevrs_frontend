<template>
    <div class='container'>
        <div class='inner-container'>
            <div class='header'>
                <h2>专业详情</h2>
            </div>
            <div class='detailInfo'>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="font-size:20px">逻辑学</span>
                    </div>
                    <el-tabs v-model="activeName" @tab-click="handleClick" class="info">
                        <el-tab-pane label="培养目标" name="first">{{ target }}</el-tab-pane>
                        <el-tab-pane label="开设课程" name="second">{{ courses }}</el-tab-pane>
                        <el-tab-pane label="就业前景" name="third">{{ exployment }}</el-tab-pane>
                    </el-tabs>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        exployment: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0毕业生可在高等院校、科研单位、国家机关及企事业管理部门从事逻辑学的教学、科研和应用方面的工作，也能从事计算机科学和语言学的科研和应用方面相关工作。",
        target: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0本专业培养具备系统的逻辑学基础知识、一定的数学素养以及计算机理论和操作 能力，能在高等院校、科研单位、国家机关及企事业管理部门从事逻辑学的教学、科研和应用方面的工作，并能从事计算机科学和语言学的科研和应用方面相关工作的逻辑学的高级专门人才。\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \r\n培养要求：本专业学生主要学习逻辑学、数学、计算机科学和哲学方面的基本理论和基础知 识，接受公理化方法、形式化方法和语义分析方面的基本训练，具有专业研究的基本能力。 \r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0毕业生应获得以下几方面的知识和能力：\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa01．掌握马克思主义的基本原理和逻辑学的基本理论、基础知识；\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa02．具有数学、计算机科学和哲学的基本素养；\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa03．掌握逻辑学研究的基本方法；\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa04．了解现代逻辑的前沿问题与发展动态；\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa05．掌握文献检索、资料查询的基本方法和手段；\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa06．具有初步的教学、科研和实际工作能力。\r\n \r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0修业年限：四年。\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0授予学位：哲学学士。",
        courses: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0核心课程：数学分析、高等代数、抽象代数、概率统计、逻辑导论、数理逻辑、集合论、模态逻 辑、归纳逻辑、四论导引（公理集合论、模型论、递归论、证明论）、应用逻辑、逻辑史、逻辑哲学、程 序语言设计、操作系统等。\r\n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0主要实践性教学环节：教学实习、论文写作等，一般安排6周左右。"
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
    .header {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .info {
        white-space: pre-line;
    }
</style>