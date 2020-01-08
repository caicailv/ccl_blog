<template>
  <div class="win">
    <!-- 关于我 -->

    <!-- 基本信息 -->
    <section class="section1">
      <div class="left">
        <h4 class="title">前端开发攻城狮</h4>
        <div class="bod"></div>
        <div class="rotw">
          <div class="list">
            <div class="list_left">NAME</div>
            <div class="list_right">菜菜驴</div>
          </div>
          <div class="list">
            <div class="list_left">
              <div class="list_left">D.O.B</div>
            </div>
            <div class="list_right">98-05-01</div>
          </div>
          <div class="list">
            <div class="list_left">PHONE</div>
            <div class="list_right">15940127332</div>
          </div>
          <div class="list">
            <div class="list_left">ADDRESS</div>
            <div class="list_right">心安即是家</div>
          </div>
          <div class="list">
            <div class="list_left">WEBSITE</div>
            <div class="list_right">www.caicailv.cn</div>
          </div>
        </div>
      </div>
      <div class="img">
        <div>
          <div class="icont">
            <i class="el-icon-picture-outline"></i>
          </div>
          <p>该图片由于太帅,涉嫌违规,暂时不予展示</p>
        </div>
      </div>
    </section>
    <!-- 成长经历 -->
    <!-- <section class="section2">
      <h4 class="title">
        <el-divider class="title_content">青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</el-divider>
      </h4>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item,index in experience" :key="index">
          <div class="car_row">
            <el-divider content-position="left">{{item.title}}</el-divider>
            <div class="content">{{item.content}}</div>
            <div class="time">{{item.time}}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section> -->
    <!-- 技术栈 -->
    <section class="section3">
      <h4 class="title">
        <el-divider content-position="right" class="title_content">Technology Stack</el-divider>
      </h4>
      <div class="row">
        <div class="list" v-for="item,index in artList">
          <div class="name">{{item.title}}</div>
          <div class="progress">
            <el-progress
              :text-inside="true"
              :stroke-width="20"
              :color="item.color"
              :percentage="item.percentage"
              status="exception"
            ></el-progress>
          </div>
        </div>
      </div>
    </section>
    <!-- 项目经验 -->
    <section class="section4">
      <h4 class="title">
        <el-divider content-position="left" class="title_content">项目经历</el-divider>
      </h4>
      <div class="row">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </section>

    <!-- 
      技术栈,
      生活感悟
      照片
      联系方式

    -->
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      experience,
      artList
    };
  },
  computed: {},
  methods: {},
  created() {}
};
let artList = [
  {
    title: "JavaScript",
    percentage: 50,
    color: "red"
  },
  {
    title: "VUE",
    percentage: 50,
    color: "#1989fa"
  },
  {
    title: "小程序",
    percentage: 70,
    color: "#13ce66"
  },
  {
    title: "公众号",
    percentage: 70,
    color: "#e6a23c"
  },
  {
    title: "Node",
    percentage: 20,
    color: "pink"
  }
];
let experience = [
  {
    title: "在伊利园的快乐日子",
    time: "2016-2018",
    content: `不后悔大学包夜上网打游戏的日子,不是不想做更好的自己,只是因为没有方向
      庆幸自己没有养成更多的坏习惯.
    `
  },
  {
    title: "依然还是吊儿郎当的沙雕青年",
    time: "2018-2019",
    content: `
      大学实习期被半蒙半骗拐进了培训机构,学的ui,可惜自己审美实在太差,只好自己学一点代码,
      没想到还真的能找到工作
    `
  },
  {
    title: "遇见编程是我此生的幸运",
    time: "2019-2020",
    content: `在敲击键盘的时候,我好像拥有了整个世界,遇见编程是我此生的幸运.`
  },
  {
    title: "大城市的雾霾是不是更新鲜一些?",
    time: "2020-",
    content: `我有兴趣学习更多的技术,但是却没有用武之地,我想:大城市的雾霾应该会更新鲜一些吧?`
  }
];
</script>

<style scoped lang="scss">
.win {
  -webkit-user-select: none;
  color: #fff;
  box-sizing: border-box;
  padding: 10px;
  .title_content {
    >>> .el-divider__text {
      background-color: $black;
      font-size: 16px;
      color: #fff;
      white-space: nowrap;
      padding: 10px 20px;
    }
  }
  .section1 {
    display: flex;
    .left {
      width: 55%;
      padding-left: 100px;
      .title {
        font-size: 26px;
        line-height: 3;
        text-indent: 20px;
      }
      .bod {
        width: 80%;
        height: 1px;
        background-color: #fff;
        margin-left: 10px;
      }
      .rotw {
        padding-left: 15px;
        padding-top: 10px;
        .list {
          display: flex;
          padding: 5px 0;
          .list_left {
            font-weight: bold;
            width: 100px;
          }
          .list_right {
          }
        }
      }
    }
    .img {
      border-radius: 10px;
      border: 1px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 216px;
      .icont {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        .el-icon-picture-outline {
          font-size: 90px;
        }
      }
      p {
        width: 100px;
        margin: 0 auto;
      }
    }
  }
  .section2 {
    width: 800px;
    margin: 0 auto;
    padding: 20px 0;
    .title {
      padding: 20px;
    }
    .car_row {
      background-color: rgba($color: #1b242f, $alpha: 0.9);
      height: 900px;
      box-sizing: border-box;
      padding: 10px 20px;
      background-color: #fff;
      .content {
        color: #333;
        line-height: 2;
        font-size: 16px;
      }
      .time {
        text-align: right;
        color: #333;
      }
    }
  }
  .section3 {
    .row {
      .list {
        padding-bottom: 20px;
        width: 50%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .name {
          padding-bottom: 5px;
          width: 20%;
        }
        .progress {
          flex: 1;
        }
      }
    }
  }
}
</style>
