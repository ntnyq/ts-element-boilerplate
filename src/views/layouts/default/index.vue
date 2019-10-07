<template>
  <div
    :class="classObj"
    class="app-wrap"
  >
    <app-navbar />
    <div class="main-wrap">
      <app-sidebar />
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import {
  AppMain,
  AppNavbar,
  AppSidebar,
} from '../components'

const app = namespace('app')

@Component({
  name: 'DefaultLayout',

  components: {
    AppMain,
    AppNavbar,
    AppSidebar,
  },
})
export default class DefaultLayout extends Vue {
  @app.State
  private isCollapse!: boolean

  get classObj () {
    return {
      'is-collapse': this.isCollapse,
    }
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
