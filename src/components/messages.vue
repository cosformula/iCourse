<template>
  <div>
    <v-tabs id="mobile-tabs-3" grow dark scroll-bars v-model="active">
      <v-tabs-bar dark class="indigo darken-1">
        <v-tabs-slider></v-tabs-slider>
        <v-tabs-item v-for="i in 3" :key="i" :href="'#mobile-tabs-3-' + i">
          {{ name[i-1] }}
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content :key="1" :id="'mobile-tabs-3-1'">
          <v-list two-line>
            <v-list-item v-for="(item, index) in items" v-bind:key="item.title">
              <v-list-tile avatar ripple>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-icon class="grey--text text--lighten-1">star_border</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length"></v-divider>
            </v-list-item>
          </v-list>
        </v-tabs-content>
        <v-tabs-content :key="2" :id="'mobile-tabs-3-2'">
          <v-list two-line>
            <v-list-item v-for="(item, index) in items" v-bind:key="item.title">
              <v-list-tile avatar ripple>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-icon class="grey--text text--lighten-1">star_border</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length"></v-divider>
            </v-list-item>
          </v-list>
        </v-tabs-content>
        <v-tabs-content :key="3" :id="'mobile-tabs-3-3'">
          <v-list two-line>
            <v-list-item v-for="(item, index) in items" v-bind:key="item.title">
              <v-list-tile avatar ripple>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-icon class="grey--text text--lighten-1">star_border</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length"></v-divider>
            </v-list-item>
          </v-list>
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
      e31: true,
      name: ['系统推送', '我的评论', '我的私信'],
      items: [
        { action: '15 min', headline: 'Brunch this weekend?', title: '系统通知', subtitle: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
        { action: '2 hr', headline: 'Summer BBQ', title: '系统通知', subtitle: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
        { action: '6 hr', headline: 'Oui oui', title: '系统通知', subtitle: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
        { action: '12 hr', headline: 'Birthday gift', title: '系统通知', subtitle: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
        { action: '18hr', headline: 'Recipe to try', title: '系统通知', subtitle: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
