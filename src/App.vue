<template>
  <v-app style="height:100%;" light toolbar>
    <v-toolbar class="indigo" fixed dark>
      <v-btn icon v-if="$route.path!='/'" @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <!--<v-toolbar-side-icon class="ma-0" light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title class="pa-0">iSHU 课评社区</v-toolbar-title>
      <!-- <v-text-field prepend-icon="search" label="Search..." hide-details single-line dark></v-text-field> -->
    </v-toolbar>
    <main style="height:100%;">
      <v-container style="height:100%;overflow:scroll;padding:0;padding-bottom:56px;" v-if="$route.path!='/'">
        <router-view></router-view>
      </v-container>
      <v-container style="height:100%;overflow:scroll;padding:0;height:100%;" v-if="$route.path==='/'">
        <router-view></router-view>
      </v-container>
      <!-- <v-navigation-drawer right temporary v-model="right"></v-navigation-drawer> -->
    </main>
    <v-bottom-nav :value="e31" dark class="indigo" v-if="$route.path!='/'" :active.sync="e3">
      <v-btn flat dark>
        <span>首页</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat dark>
        <span>我的</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat dark>
        <span>消息</span>
        <v-icon>mail_outline</v-icon>
      </v-btn>
      <v-btn flat dark>
        <span>设置</span>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      e3: 0,
      e31: true,
      drawer: true,
      drawerRight: true,
      right: null,
      left: null,
      items: [
        { title: '注销登录', icon: 'dashboard' },
        { title: '清除缓存', icon: 'question_answer' },
        { title: '版本信息', icon: 'question_answer' },
        { title: '意见反馈', icon: 'question_answer' }
      ],
      mini: false
    }
  },
  watch: {
    e3: function (val) {
      switch (val) {
        case 0: this.$router.push('/index'); break;
        case 1: this.$router.push('/my'); break;
        case 2: this.$router.push('/messages'); break;
        case 3: this.$router.push('/config'); break;
      }
    }
  }
}
</script>

<style lang="stylus">
@import './stylus/main'
</style>

