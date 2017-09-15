<template>
  <div>
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
  </div>
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
