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
        <img :src="portrait" alt="">
      </div>
    </section>
    <!-- 成长经历 -->
    <section class="section2">
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
    </section>
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
        <el-card class="list" v-for="item,index in project" :key="index">
          <div @click="toggleProject(item)">
            <img :src="item.img" class="image" />
            <div class="bot">
              <span class="name">{{item.name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item.time }}</time>
                <div class="icont">
                  <i class="el-icon-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </section>

    <!-- 

    -->
    <!-- 技术栈 -->
    <section class="section5">
      <h4 class="title">
        <el-divider content-position="right" class="title_content">Contact Me</el-divider>
      </h4>
      <div class="row">
        <el-popover placement="top-start" title="微信" width="150" trigger="click" class="popover">
          <img :src="erweima" class="erweima" />
          <div slot="reference">
            <svg
              t="1578668366862"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3654"
              width="32"
              height="32"
            >
              <path
                d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                fill="#1BB723"
                p-id="3655"
              />
              <path
                d="M831.890286 585.603657c0-90.528914-90.594743-164.322743-192.336457-164.322743-107.739429 0-192.599771 73.793829-192.599772 164.322743 0 90.682514 84.860343 164.322743 192.599772 164.322743 22.542629 0 45.282743-5.6832 67.935085-11.359086l62.112915 34.004115-17.020343-56.590629c45.443657-34.091886 79.3088-79.316114 79.3088-130.377143z m-254.785829-28.335543c-11.278629 0-22.652343-11.227429-22.652343-22.674285 0-11.278629 11.373714-22.637714 22.652343-22.637715 17.122743 0 28.350171 11.359086 28.350172 22.637715 0 11.446857-11.227429 22.674286-28.350172 22.674285z m124.5696 0c-11.2128 0-22.498743-11.227429-22.498743-22.674285 0-11.278629 11.285943-22.637714 22.498743-22.637715 16.954514 0 28.328229 11.359086 28.328229 22.637715 0 11.446857-11.373714 22.674286-28.328229 22.674285z"
                fill="#FFFFFF"
                p-id="3656"
              />
              <path
                d="M418.552686 251.428571c-124.481829 0-226.442971 84.845714-226.442972 192.577829 0 62.193371 33.923657 113.261714 90.609372 152.861257l-22.652343 68.117943 79.162514-39.701943c28.328229 5.610057 51.0464 11.373714 79.316114 11.373714 7.109486 0 14.153143-0.3584 21.138286-0.899657-4.425143-15.125943-6.992457-30.990629-6.992457-47.440457 0-98.933029 84.955429-179.214629 192.519314-179.214628 7.336229 0 14.606629 0.548571 21.803886 1.338514-19.587657-91.223771-117.116343-159.012571-228.461714-159.012572zM344.992914 404.319086c-16.969143 0-34.0992-11.373714-34.0992-28.342857 0-17.042286 17.130057-28.2624 34.0992-28.2624s28.2624 11.220114 28.2624 28.2624c0 16.969143-11.293257 28.342857-28.2624 28.342857z m158.471315 0c-16.976457 0-34.004114-11.373714-34.004115-28.342857 0-17.042286 17.027657-28.2624 34.004115-28.2624 17.0496 0 28.342857 11.220114 28.342857 28.2624 0.007314 16.969143-11.293257 28.342857-28.342857 28.342857z"
                fill="#FFFFFF"
                p-id="3657"
              />
            </svg>
          </div>
        </el-popover>

        <el-popover placement="top-start" title="Github" width="150" trigger="click" class="popover" content="https://github.com/caicailv">
          <div slot="reference">
             <svg t="1578672101455" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8601" width="32" height="32"><path d="M1023.304101 513.327653a498.10285 498.10285 0 0 1-98.071306 301.37561 506.360717 506.360717 0 0 1-252.339956 185.363538 28.17175 28.17175 0 0 1-26.30825-4.78664 27.112112 27.112112 0 0 1-8.367484-19.731186v-140.529898a117.327483 117.327483 0 0 0-34.675734-94.490461 411.68756 411.68756 0 0 0 68.182212-11.94833 251.645711 251.645711 0 0 0 62.920562-26.162092 187.22704 187.22704 0 0 0 53.822293-44.249014 201.51388 201.51388 0 0 0 35.296901-69.972635 342.88418 342.88418 0 0 0 13.738753-100.446356 193.91372 193.91372 0 0 0-52.616499-137.53368 175.388327 175.388327 0 0 0-5.371267-136.327886 84.405633 84.405633 0 0 0-53.822293 7.307847 369.996293 369.996293 0 0 0-61.60515 29.231388l-25.102454 16.150342a480.819792 480.819792 0 0 0-255.774645 0c-7.307847-4.78664-16.73497-10.779074-28.098671-17.940764a434.816895 434.816895 0 0 0-55.612716-25.577465 90.72692 90.72692 0 0 0-57.403138-8.952112 180.723056 180.723056 0 0 0-5.115493 135.962493 193.91372 193.91372 0 0 0-52.616498 137.53368 335.868647 335.868647 0 0 0 13.738752 99.861729 212.841043 212.841043 0 0 0 35.296901 69.972635 179.699957 179.699957 0 0 0 53.822293 44.979798 276.236616 276.236616 0 0 0 62.774406 26.308249 423.160879 423.160879 0 0 0 68.182212 11.94833 108.631145 108.631145 0 0 0-32.885311 68.76684 159.895692 159.895692 0 0 1-29.889094 10.157907 177.142211 177.142211 0 0 1-38.256579 3.653923 78.961287 78.961287 0 0 1-43.664386-14.359919 116.158228 116.158228 0 0 1-37.087324-41.873963 105.744546 105.744546 0 0 0-32.300683-34.675734 96.280884 96.280884 0 0 0-32.885312-16.150342l-13.154124-1.790422a44.724024 44.724024 0 0 0-19.000402 2.630825 5.919356 5.919356 0 0 0-3.653924 7.782857 60.618591 60.618591 0 0 0 5.992435 9.573279 28.135211 28.135211 0 0 0 8.952112 7.782857l4.78664 3.653924a84.405633 84.405633 0 0 1 29.231388 25.102454 159.237986 159.237986 0 0 1 20.936982 34.091106l6.577062 15.529175a88.936498 88.936498 0 0 0 29.231388 41.252796 100.555974 100.555974 0 0 0 44.833641 19.731187 324.870337 324.870337 0 0 0 46.624064 4.78664 213.316053 213.316053 0 0 0 37.087323-2.37505l15.529175-2.375051c0 16.73497 0 36.539235 0.584628 59.193561 0 22.727404 0.584628 34.675734 0.584627 35.881529a24.700523 24.700523 0 0 1-8.952112 19.731186 31.752595 31.752595 0 0 1-26.892877 4.78664 500.331743 500.331743 0 0 1-252.339956-185.363538 498.10285 498.10285 0 0 1-97.961689-301.302531 497.518222 497.518222 0 0 1 68.76684-257.126596 510.52619 510.52619 0 0 1 184.778911-187.738589 500.587518 500.587518 0 0 1 257.090057-68.76684 497.518222 497.518222 0 0 1 257.126596 68.76684 516.701321 516.701321 0 0 1 186.569333 186.569333 499.05287 499.05287 0 0 1 68.76684 257.126596z" fill="#009A61" p-id="8602"></path></svg>

          </div>

        </el-popover>
        <el-popover placement="top-start" title="知乎" width="150" trigger="click" class="popover">
          <img :src="zh_ewm" class="erweima" />
          <div slot="reference">
            <svg
              t="1578668648969"
              class="icon "
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5137"
              width="32"
              height="32"
            >
              <path
                d="M268.8 734.4s40 16 78.4-6.4c38.4-22.4 67.2-120 67.2-120l89.6 110.4s8-52.8-1.6-67.2c-9.6-14.4-62.4-73.6-62.4-73.6l-22.4 20.8 16-65.6h97.6s0-38.4-19.2-40c-19.2-1.6-78.4 0-78.4 0v-120h88s-1.6-40-17.6-40h-144l22.4-65.6s-36.8 1.6-49.6 24c-12.8 22.4-54.4 137.6-54.4 137.6s14.4 6.4 36.8-11.2c24-17.6 30.4-46.4 30.4-46.4l43.2-1.6 1.6 121.6s-73.6-1.6-88 0c-14.4 1.6-24 40-24 40h112s-9.6 67.2-38.4 116.8c-28.8 48-83.2 86.4-83.2 86.4zM601.6 732.8l64-44.8h89.6V328H552V688h36.8l12.8 44.8zM595.2 368h118.4v278.4H672l-52.8 40-11.2-40h-11.2V368z"
                fill="#FFFFFF"
                p-id="5138"
              />
              <path
                d="M617.6 686.4l52.8-40h41.6V368h-116.8v278.4h11.2z"
                fill="#0F84FD"
                p-id="5139"
              />
              <path
                d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0zM278.4 531.2s8-40 24-40c14.4-1.6 88 0 88 0l-1.6-121.6-43.2 1.6s-8 30.4-30.4 46.4c-24 17.6-36.8 11.2-36.8 11.2s41.6-115.2 54.4-137.6c12.8-22.4 49.6-24 49.6-24l-22.4 65.6h144c17.6 0 17.6 40 17.6 40h-88v120s59.2-1.6 78.4 0c19.2 1.6 19.2 40 19.2 40h-97.6l-16 65.6 22.4-20.8s52.8 59.2 62.4 73.6c9.6 14.4 1.6 67.2 1.6 67.2L414.4 608s-28.8 97.6-67.2 120c-38.4 22.4-78.4 6.4-78.4 6.4s54.4-38.4 83.2-88c28.8-49.6 38.4-116.8 38.4-116.8h-112zM753.6 688h-89.6l-64 44.8-11.2-44.8h-36.8V328h201.6V688z"
                fill="#0F84FD"
                p-id="5140"
              />
            </svg>
          </div>
        </el-popover>

        <el-popover
          placement="top-start"
          title="电话"
          width="200"
          trigger="click"
          content="15940127332"
        >
          <el-button slot="reference" type="warning" icon="el-icon-phone" circle></el-button>
        </el-popover>
        <el-popover
          placement="top-start"
          title="邮箱"
          width="200"
          trigger="click"
          content="1401394657@qq.com"
        >
          <el-button slot="reference" type="danger" icon="el-icon-message" circle></el-button>
        </el-popover>
      </div>
    </section>

    <!-- 
      技术栈,
      生活感悟
      照片
      联系方式

      微信
      知乎
      电话
      邮箱
    -->
    <!-- 项目详情弹窗 -->
    <el-dialog :title="projectRow.name" :visible.sync="projectShow" width="60%">
      <div class="project_row">
        <div class="top">
          <img :src="projectRow.img" alt />
          <div class="right">
            <p class="technology">
              技术栈:
              <span v-for="item,index in projectRow.technology" :key="index">{{item}}</span>
            </p>
            <div class="describe">
              <div class="title">负责模块:</div>
              <p>{{projectRow.duty}}</p>
            </div>
          </div>
        </div>
        <div class="bot">
          <div class="title">项目描述:</div>
          <p>{{projectRow.describe}}</p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="projectShow = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      projectShow: false,
      projectRow: {},
      experience,
      artList,
      project,
      erweima: require("@/assets/img/erweima.jpg"),
      zh_ewm: require("@/assets/img/zhihu_ewm.jpg"),
      portrait:require("@/assets/img/portrait.png")
    };
  },
  computed: {},
  methods: {
    toggleProject(item) {
      this.projectRow = item;
      this.projectShow = true;
    }
  },
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
    title: "校园的无聊时光",
    time: "2016-2018",
    content: `2019年在沈阳读大专,过了自由散漫,无拘无束的两年大学生活.
    `
  },
  {
    title: "还是太年轻",
    time: "2018-2019",
    content: `实习期被半蒙半骗拐进了培训机构,学的ui,因为审美比较差,又刚好对代码这方面更感兴趣一些,就自学了前端,并且找了相关的工作`
  },
  {
    title: "遇见编程是我此生的幸运",
    time: "2019-2020",
    content: `在工作期间对前端产生了很大的兴趣,自学了很多前端的技术,并且越来越热爱这个职业`
  },
  {
    title: "敢问路在何方",
    time: "2020-",
    content: `经过了一年的工作,渐渐明确了自己的志向,我向往更大的发挥空间,希望遇见更优秀的团队`
  }
];
let project = [
  {
    img: require("@/assets/img/ecar.jpg"),
    name: "E联车服",
    time: "2018-12 至今",
    technology: ["JQuery", "JavaScript", "CSS", "PHP"],
    describe: `
      一个汽车美容行业的线上线下一体平台,
      主要由"微信公众号商城+员工端小程序+后台管理系统"三部分构成,
      用户可以通过该系统在线上预约汽车美容服务,购买门店内的商品,办理门店会员,
      员工可以通过员工端小程序查看当日工作情况,服务提成,累计收入
      管理者可通过管理系统查看门店内的工作情况,管理员工和当前门店服务内容
    `,
    duty: `负责编写前端静态页面,适配不同型号手机,微信内置浏览器内开发与相关API的调用,原生微信小程序编写`
  },
  {
    img: require("@/assets/img/leading.jpg"),
    name: "领前商城",
    time: "2019-05 至 2019-07",
    technology: ["VUE", "JavaScript", "CSS"],
    describe: `
      微信公众号商城,具有多级代理分销系统
    `,
    duty: `负责编写前端页面,vue框架搭建,编写接口文档,与后端进行接口对接与调试`
  },
  {
    img: require("@/assets/img/koiuser.jpg"),
    name: "锦鲤拼拼线上商城",
    time: "2019-11 至 2020-01",
    technology: ["VUE", "mpVue", "JavaScript", "SCSS", "node"],
    describe: `
        社区团购商城,地区发货直达小区,没有中间商赚差价,项目分为供应商端,用户端,代理商端三端,都是用mpvue编写的微信小程序
    `,
    duty: `负责编写前端页面,vue框架搭建,公用组件与函数封装,编写接口文档,与后端进行接口对接与调试,node模拟服务`
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 216px;
      margin-top: 23px;
      box-sizing: border-box;
      padding: 0;
      overflow: hidden;
      img{
        display: block;
        width: 100%;
      border-radius: 10px;

      border: 1px solid #fff;

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
  .section4 {
    .row {
      display: flex;
      justify-content: space-around;
      padding: 20px 0;
      .list {
        display: inline-block;
        width: 250px;
        padding: 0;
        margin-right: 20px;
        >>> .el-card__body {
          padding: 0;
        }
        img {
          width: 100%;
        }
        .bot {
          padding: 14px;
          position: relative;
          .name {
            font-size: 18px;
          }
          .icont {
            position: absolute;
            top: 30px;
            color: #409eff;
            right: 30px;
            .el-icon-arrow-right {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
  .section5 {
    .row {
      display: flex;
      align-items: center;
      width: 380px;
      margin: 30px auto;
      justify-content: space-between;
      .icon {
      }
      >>> .erweima {
        width: 100px;
      }
      .popver {
      }
    }
  }
  .project_row {
    .top {
      overflow: hidden;
      img {
        width: 150px;
        float: left;
      }
      .right {
        float: left;
        margin-left: 50px;
        width: 500px;
        font-size: 16px;
        line-height: 2;
        .technology {
          span {
            padding: 2px 5px;
            background-color: $theme;
            color: #fff;
            margin-left: 10px;
          }
        }
        .describe {
          p {
            line-height: 1.5;
            margin-left: 15px;
          }
        }
      }
    }
    .bot {
      font-size: 14px;
      margin-top: 10px;
      .title {
        font-size: 16px;
        line-height: 2;
      }
      p {
        line-height: 1.7;
        margin-left: 15px;
      }
    }
  }
}
</style>
