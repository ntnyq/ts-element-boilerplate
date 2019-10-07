<template>
  <div class="app-sidebar">
    <el-menu
      :default-active="$route.path"
      background-color="#2d333f"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
    >
      <sidebar-item
        v-for="router in routers"
        :item="router"
        :base-path="router.path"
        :key="router.path"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
} from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'
import { namespace } from 'vuex-class'

const app = namespace('app')

@Component({
  name: 'AppSidebar',

  components: {
    SidebarItem,
  },
})
export default class AppSidebar extends Vue {
  @app.State
  private routers!: any[]
}
</script>
