<template>
  <v-card class="grey lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12>
            <v-text-field label="请输入学号" class="mt-5" v-model="first"></v-text-field>
            <v-text-field label="请输入密码" v-model="middle" :append-icon="e2 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e2 = !e2)" :type="e2 ? 'password' : 'text'"></v-text-field>
          </v-flex>
          <!-- <v-text-field label="请输入学号" class="mt-5" v-model="first"></v-text-field> -->
          <!-- <v-text-field label="请输入密码" v-model="middle" :append-icon="e2 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e2 = !e2)" :type="e2 ? 'password' : 'text'"></v-text-field> -->
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn round primary light block router href="/index">登录</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      drawerRight: true,
      first: '',
      middle: '',
      right: null,
      left: null,
      e3: 1,
      e31: true,
      items: [
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
        }
      ],
      name: ['最多评论', '精选评论', '选课助手'],
      e2: false
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
