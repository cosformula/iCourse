<template>
  <div style="height:100%;">
    <v-card style="margin:10px;" class="elevation-5">
      <v-card-title class="teal darken-1">
        <span class="white--text">工程制图基础</span>
        <v-spacer></v-spacer>
        <div>
          <v-chip class="green--text">
            <v-avatar class="teal lighten-1">
              <i class="material-icons">account_circle</i>
            </v-avatar>
            张老师
          </v-chip>
        </div>
      </v-card-title>
      <v-card-text>
        <v-chip class="teal--text">
          通识课
        </v-chip>
        <v-chip class="teal--text">
          机自学院
        </v-chip>
        <div>
          <strong>周二3~4 BJ304</strong>
        </div>
        <div>
          掌握正投影，能够绘制和阅读基本工程图、如何绘制图样、掌握AutoCAD的基本操作
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn flat class="green--text darken-1">
          <i class="material-icons">thumb_up</i>13</v-btn>
        <v-btn flat class="green--text darken-1">
          <i class="material-icons">forum</i> 100</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat class="green--text darken-1" router to="afterclass">
          <i class="material-icons">send</i>下课去哪</v-btn>
      </v-card-actions>
    </v-card>
    <v-card hover horizontal style="margin:10px;" >
      <v-card-title height="3rem" class="light-blue darken-1 black--text">
        <span class="white--text">xxx:</span>
        <v-spacer></v-spacer>
        <span style="color:white;">2017-04-04</span>
        <!-- </v-card-text> -->
      </v-card-title>
      <v-card-text>
        <div>
          <p>精选评论置顶</p>
        </div>
        <div>
          <span style="color:grey;">2017-04-04</span>
        </div>
      </v-card-text>
      <v-card-actions class="white light-blue--text  pa-0">
        <v-btn flat block class="">
          <i class="material-icons light-blue--text">forum</i>12</v-btn>
        <v-btn flat block class=" teal">
          <i class="material-icons light-blue--text">thumb_up</i>13
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card hover horizontal style="margin:10px;" class="elevation-5" v-for="i in 10" :key="i">
      <v-card-row img="/static/hotel.jpg" height="50px" weight="50px"></v-card-row>
      <v-card-column>
          <v-card-title>
            <span>xxx:</span>
            <v-spacer></v-spacer>
            <span style="color:grey;">2017-04-04</span>
          </v-card-title>
          <v-card-text>
            <div>
              <p>我觉得这个课很有帮助！</p>
            </div>
          </v-card-text>
        <v-card-actions class="white   light-blue--text darken-2 pa-0">
          <v-btn flat block class="teal">
            <i class="material-icons light-blue--text">forum</i>12</v-btn>
          <v-btn flat block class=" teal">
            <i class="material-icons light-blue--text">thumb_up</i>13
          </v-btn>
        </v-card-actions>
      </v-card-column>
    </v-card>
    <v-layout row justify-center>
      <v-dialog v-model="dialog">
        <v-card>
          <v-card-row>
            <v-card-title>添加评论</v-card-title>
          </v-card-row>
          <v-card-row>
            <v-card-text>
              <v-text-field label="请留下您的评论" persistent-hint required></v-text-field>
            </v-card-text>
          </v-card-row>
          <v-card-row actions>
            <v-btn class="blue--text darken-1" flat @click.native="dialog = false">取消</v-btn>
            <v-btn class="blue--text darken-1" flat @click.native="dialog = false">提交</v-btn>
          </v-card-row>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-btn fab fix absolute bottom right class="light-blue white-text" style="bottom:80px;right:15px;z-index:10;" @click.stop="dialog = true">
      <v-icon light>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ['我的收藏', '我的活动', '我的课程'],
      dialog: false
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
