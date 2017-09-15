<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line subheader>
          <v-subheader>个人信息</v-subheader>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>赵XX</v-list-tile-title>
                <v-list-tile-sub-title>151213334</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list two-line subheader>
          <v-subheader>Hangout notifications</v-subheader>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>清除缓存</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
           <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>版本信息</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
           <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>意见反馈</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      drawerRight: true,
      right: null,
      left: null
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
