<template>
  <v-tabs id="mobile-tabs-3" grow light scroll-bars>
    <v-tabs-bar slot="activators" class="indigo">
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item v-for="i in 3" :key="i" :href="'#mobile-tabs-3-' + i">
        {{ name[i-1] }}
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-content :key="1" :id="'mobile-tabs-3-1'">
      <v-card style="margin:10px;" class="elevation-5" v-for="i in 3">
        <v-card-row class="teal darken-1">
          <v-card-title>
            <span class="white--text">工程制图基础</span>
            <v-spacer></v-spacer> <v-chip class="green--text">
              <v-avatar class="teal lighten-1">
                <i class="material-icons">account_circle</i>
              </v-avatar>
              张老师
            </v-chip>
          </v-card-title>
        </v-card-row>
        <v-card-text>
          <v-card-row>
            <v-chip class="teal--text">
              本学期未选
            </v-chip>
            <v-chip class="teal--text">
              通识课
            </v-chip>
            <v-spacer></v-spacer>
           
          </v-card-row>
          <v-card-row>
            <div>
              <strong>周二3~4 BJ304</strong>
            </div>
          </v-card-row>
          <v-card-row>
            <div>
              掌握正投影，能够绘制和阅读基本工程图、如何绘制图样、掌握AutoCAD的基本操作
            </div>
          </v-card-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-row actions>
          <v-btn block outline class="green--text darken-1">
            <i class="material-icons">forum</i> 100</v-btn>
        </v-card-row>
      </v-card>
    </v-tabs-content>
    <v-tabs-content :key="2" :id="'mobile-tabs-3-2'">
      <v-card hover v-for="i in 3" style="margin:10px;" class="elevation-5">
        <v-card-row class="teal darken-1">
          <v-card-title>
            <strong class="white--text">微积分辅导</strong>
            <v-spacer></v-spacer>
            <v-btn light class="teal lighten-2 white--text">
              报名
            </v-btn>
          </v-card-title>
        </v-card-row>
        <!--<v-card-row img="/static/hotel.jpg" height="130px"></v-card-row>-->
        <v-card-row>
          <v-card-column  img="/static/hotel.jpg" height="130px"></v-card-column>
          <v-card-column>
            <v-card-row class="teal lighten-1 white--text">
              <v-card-text>
                <div>
                  <i class="material-icons">room</i>DJ203</div>
                <div>
                  <i class="material-icons">query_builder</i>周三18:00</div>
              </v-card-text>
            </v-card-row>
            <v-card-row class="teal lighten-1 white--text">
              <v-card-text>
                <div>
                  <p>微积分期末辅导，你提分的好宝典</p>
                </div>
              </v-card-text>
            </v-card-row>
          </v-card-column>
        </v-card-row>
        <v-card-row actions class="teal darken-2">
          <span class="white--text">2017-04-04</span><v-spacer></v-spacer>
          <v-btn small flat class="teal white--text">
            <i class="material-icons">forum</i>12</v-btn>
          <v-btn small flat class=" teal white--text">
            <i class="material-icons">thumb_up</i>13
          </v-btn>
        </v-card-row>
      </v-card>
    </v-tabs-content>
    <v-tabs-content :key="3" :id="'mobile-tabs-3-3'">
      <v-card>
        <v-card-row img="/static/course.jpg" height="600px"></v-card-row>
      </v-card>
    </v-tabs-content>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      name: ['我的收藏', '我的活动', '我的课程']
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
