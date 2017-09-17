<template>
  <v-app style="height:100%;" >
    <v-toolbar class="indigo" fixed dark >
      <!--<v-toolbar-side-icon class="ma-0" light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title class="pa-0">iSHU 课评社区</v-toolbar-title>
      <v-text-field prepend-icon="search" label="Search..." hide-details single-line light></v-text-field>
    </v-toolbar>
    <main style="height:100%;">
      <v-container style="padding:0;padding-bottom:56px;" v-if="$route.path!='/'">
        <router-view></router-view>
      </v-container>
      <v-container  style="padding:0;height:100%;" v-if="$route.path==='/'">
        <router-view></router-view>
      </v-container>
      <v-navigation-drawer right temporary v-model="right"></v-navigation-drawer>
    </main>
    <v-bottom-nav  :value="e31"  class="white"  v-if="$route.path!='/'">
      <v-btn flat darken class='indigo--text' @click.native="e3 = 1;$router.push('/index')" :value="e3 === 1">
        <span>首页</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat darken  class='indigo--text'  @click.native="e3 = 2;$router.push('/my')" :value="e3 === 2">
        <span>我的</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat darken  class='indigo--text' @click.native="e3 = 3;$router.push('/messages')" :value="e3 === 3">
        <span>消息</span>
        <v-icon>mail_outline</v-icon>
      </v-btn>
       <v-btn flat darken  class='indigo--text' @click.native="e3 = 4;$router.push('/config')" :value="e3 === 4">
        <span>设置</span>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      e3: 1,
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
  }
}
</script>

<style lang="stylus">
@import './stylus/main'
</style>

