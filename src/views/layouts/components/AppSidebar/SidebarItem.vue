<template>
  <div
    v-if="!item.hidden && item.children"
    class="menu-wrapper"
  >
    <template v-if="hasOneVisibleChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <el-menu-item
        :index="resolvePath(onlyOneChild.path)"
        :class="{ 'submenu-title-noDropdown': !isNest }"
      >
        <nav-item
          v-if="onlyOneChild.meta"
          :icon="onlyOneChild.meta.icon || item.meta.icon"
          :title="$t(`router.${onlyOneChild.meta.title}`)"
        />
      </el-menu-item>
    </template>

    <el-submenu
      v-else
      ref="submenu"
      :index="resolvePath(item.path)"
    >
      <template slot="title">
        <nav-item
          v-if="item.meta"
          :icon="item.meta.icon"
          :title="$t(`router.${item.meta.title}`)"
        />
      </template>

      <template v-for="child in visibleChildrenRoutes">
        <sidebar-item
          v-if="child.children && child.children.length > 0"
          :is-nest="true"
          :item="child"
          :key="child.path"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
        <el-menu-item
          :index="resolvePath(child.path)"
          v-else
          :key="child.name"
        >
          <nav-item
            v-if="child.meta"
            :icon="child.meta.icon"
            :title="$t(`router.${child.meta.title}`)"
          />
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Prop,
  Component,
} from 'vue-property-decorator'
import { AppRouteConfig } from '@typings/index'

import NavItem from './NavItem.vue'

@Component({
  name: 'SidebarItem',
  components: {
    NavItem,
  },
})
export default class SidebarItem extends Vue {
  private onlyOneChild: unknown = null

  @Prop({ required: true })
  private item!: AppRouteConfig

  @Prop({ default: false })
  private isNest!: boolean

  @Prop({ default: '' })
  private basePath!: string

  get visibleChildrenRoutes () {
    const { item } = this

    return item.children ? item.children.filter(item => !item.hidden) : []
  }

  hasOneVisibleChild (children: AppRouteConfig[], parent: AppRouteConfig) {
    const visibleChildren = children.filter(item => {
      if (item.hidden) {
        return false
      } else {
        // Temp set(will be used if only has one visible child)
        this.onlyOneChild = item
        return true
      }
    })

    // When there is only one visible child router, it will display be default
    if (visibleChildren.length === 1) {
      return true
    }

    // Show parent if there are noo visible child
    if (visibleChildren.length === 0) {
      this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
      return true
    }

    return false
  }

  resolvePath (routePath: string) {
    const { basePath } = this
    const path = basePath === '/' ? `${basePath + routePath}` : `${basePath}/${routePath}`

    return path
  }
}
</script>
