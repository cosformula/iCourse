<template>
  <div>
    <v-carousel style="height:300px;">
      <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
    <v-tabs id="mobile-tabs-3" grow dark v-model="active">
      <v-tabs-bar dark class="indigo darken-1">
        <v-tabs-item v-for="i in 4" :key="i" :href="'#mobile-tabs-3-' + i">
          {{ name[i-1] }}
        </v-tabs-item>
        <v-tabs-slider></v-tabs-slider>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content :key="1" :id="'mobile-tabs-3-1'">
          <v-card style="margin:10px;" v-for="i in 3" :key="i">
            <v-card-title class="light-blue ">
              <span class="white--text">zetwesd：</span>
              <span class="lime--text ">点评了 </span>
              <span class="white--text" @click="$router.push('/course')">
                工程制图基础(张老师)
              </span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div>
                <p>
                  老师人很好，上课讲的也很好，不过对于上课睡觉的同学容忍度比较低。如果想混混课考个及格的不推荐，不过如果想学东西的话还是比较推荐。上课之外会有不少补充题，有一些有一定难度，需要一点竞赛基础。老师很敬业，期末考试结束后有查卷机会，从下午一直到晚上。给分的话，应该还可以，只要认真学3.7没问题
                </p>
                <p class="text-xs-right ma-0 grey--text">2017-04-04
                </p>
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions >
              <!-- <v-spacer></v-spacer> -->
              <v-btn flat block  class="light-blue--text darken-1">
                <i class="material-icons">forum</i>12</v-btn>
              <v-btn flat block  class="light-blue--text darken-1">
                <i class="material-icons">thumb_up</i>13
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tabs-content>
        <v-tabs-content :key="2" :id="'mobile-tabs-3-2'">
          <v-card style="margin:10px;" class="elevation-5" v-for="i in 3" :key="i" @click="$router.push('/course')">
            <v-card-title class="light-blue">
              <span class="white--text">工程制图基础</span>
              <v-spacer></v-spacer>
              <div>
                <v-chip class="black--text">
                  <v-avatar class="indigo lighten-1">
                    <i class="material-icons">account_circle</i>
                  </v-avatar>
                  张老师
                </v-chip>
              </div>
            </v-card-title>
            <v-card-text>
              <v-chip class="black--text">
                本学期未选
              </v-chip>
              <v-chip class="black--text">
                公共基础课
              </v-chip>
              <v-chip class="black--text">
                学院
              </v-chip>
              <v-spacer></v-spacer>
              <div>
                <strong>周二3~4 BJ304</strong>
              </div>
              <div>
                掌握正投影，能够绘制和阅读基本工程图、如何绘制图样、掌握AutoCAD的基本操作
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat block class="light-blue--text darken-1" router href="course">
                <i class="material-icons">forum</i> 100</v-btn>
            </v-card-actions>
          </v-card>
        </v-tabs-content>
        <v-tabs-content :key="3" :id="'mobile-tabs-3-3'">
          <v-card style="margin:10px;" class="elevation-5">
            <v-card class="green darken-1">
              <v-card-title>
                <span class="white--text">课程搜索</span>
                <v-spacer></v-spacer>
              </v-card-title>
            </v-card>
            <v-card-text>
              <v-select v-bind:items="states" v-model="e1" label="选择查询方式" hint="选择查询方式" dark single-line auto></v-select>
              <v-text-field name="input-1" label="输入课程号/课程名/教师名" id="testing"></v-text-field>
              <v-expansion-panel>
                <v-expansion-panel-content>
                  <div slot="header">更多条件</div>
                  <v-card>
                    <v-card-text class="grey lighten-3">
                      <v-text-field name="input-1" label="输入xx" id="testing"></v-text-field>
                      <v-text-field name="input-1" label="输入xx" id="testing"></v-text-field>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-card-text>
            <v-btn block class="green white--text darken-1">
              搜索
            </v-btn>
          </v-card>
           <v-card style="margin:10px;" class="elevation-5" v-for="i in 3" :key="i" @click="$router.push('/course')">
            <v-card-title class="light-blue">
              <span class="white--text">工程制图基础</span>
              <v-spacer></v-spacer>
              <div>
                <v-chip class="black--text">
                  <v-avatar class="indigo lighten-1">
                    <i class="material-icons">account_circle</i>
                  </v-avatar>
                  张老师
                </v-chip>
              </div>
            </v-card-title>
            <v-card-text>
              <v-chip class="black--text">
                本学期未选
              </v-chip>
              <v-chip class="black--text">
                公共基础课
              </v-chip>
              <v-chip class="black--text">
                学院
              </v-chip>
              <v-spacer></v-spacer>
              <div>
                <strong>周二3~4 BJ304</strong>
              </div>
              <div>
                掌握正投影，能够绘制和阅读基本工程图、如何绘制图样、掌握AutoCAD的基本操作
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat block class="light-blue--text darken-1" router href="course">
                <i class="material-icons">forum</i> 100</v-btn>
            </v-card-actions>
          </v-card>
        </v-tabs-content>
        <v-tabs-content :key="4" :id="'mobile-tabs-3-4'">
          <v-card style="margin:10px;" class="elevation-5">
            <v-card class="green darken-1">
              <v-card-title>
                <span class="white--text">请输入小组代号</span>
                <v-spacer></v-spacer>
              </v-card-title>
            </v-card>
            <v-card-text>
              <v-text-field name="input-1" id="testing"></v-text-field>
              <small>输入相同的小组代号，查看小组公共时间</small>
            </v-card-text>
            <v-btn block class="green white--text darken-1">
              查看
            </v-btn>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      drawerRight: true,
      right: null,
      left: null,
      e3: 1,
      e1: 0,
      e31: true,
      items: [
        {
          src: 'static/index/1.jpg'
        },
        {
          src: 'static/index/2.jpg'
        },
        {
          src: 'static/index/3.jpg'
        },
        {
          src: 'static/index/4.jpg'
        }
      ],
      name: ['最新评论', '热评课程', '选课助手', '都有空吗'],
      states: ['按课程号', '按课程名', '按教师名']
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
