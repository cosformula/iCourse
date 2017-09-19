<template>
  <v-tabs id="mobile-tabs-3" grow dark v-model="active" scroll-bars>
    <v-tabs-bar class="indigo">
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item v-for="i in 3" :key="i" :href="'#mobile-tabs-3-' + i">
        {{ name[i-1] }}
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content :key="1" :id="'mobile-tabs-3-1'">
        <v-card style="margin:10px;" class="elevation-5" v-for="i in 3" :key="i">
          <v-card-title class="teal darken-1">
            <span class="white--text">工程制图基础</span>
            <v-spacer></v-spacer>
            <v-chip class="green--text">
              <v-avatar class="teal lighten-1">
                <i class="material-icons">account_circle</i>
              </v-avatar>
              张老师
            </v-chip>
          </v-card-title>
          <v-card-text>
            <v-chip class="teal--text">
              本学期未选
            </v-chip>
            <v-chip class="teal--text">
              通识课
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
            <v-btn block outline class="green--text darken-1">
              <i class="material-icons">forum</i> 100</v-btn>
          </v-card-actions>
        </v-card>
      </v-tabs-content>
      <v-tabs-content :key="2" :id="'mobile-tabs-3-2'">
        <v-card hover v-for="i in 3" style="margin:10px;" class="elevation-5" :key="i">
          <v-card-title class="teal darken-1">
            <strong class="white--text">微积分辅导</strong>
            <v-spacer></v-spacer>
            <v-btn light class="teal lighten-2 white--text">
              报名
            </v-btn>
          </v-card-title>
          <v-card class="teal lighten-1 white--text">
            <v-card-text>
              <div>
                <i class="material-icons">room</i>DJ203</div>
              <div>
                <i class="material-icons">query_builder</i>周三18:00</div>
            </v-card-text>
          </v-card>
          <v-card class="teal lighten-1 white--text">
            <v-card-text>
              <div>
                <p>微积分期末辅导，你提分的好宝典</p>
              </div>
            </v-card-text>
          </v-card>
          <v-card-actions class="teal darken-2">
            <span class="white--text">2017-04-04</span>
            <v-spacer></v-spacer>
            <v-btn small flat class="teal white--text">
              <i class="material-icons">forum</i>12</v-btn>
            <v-btn small flat class=" teal white--text">
              <i class="material-icons">thumb_up</i>13
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-tabs-content>
      <v-tabs-content :key="3" :id="'mobile-tabs-3-3'">
        <div style="height:730px; padding-top:10px;">
          <schedule :task-detail="tasks"></schedule>
        </div>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import Schedule from '@/components/Schedule'
export default {
  components: {
    Schedule
  },
  data () {
    return {
      name: ['我的收藏', '我的活动', '我的课程'],
      tasks: []
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
