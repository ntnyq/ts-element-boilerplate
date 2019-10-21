<template>
  <div class="app-navbar">
    <a
      @click="toggleCollapse"
      href="javascript:;"
      class="hamburger fl"
      role="button"
    >
      <svg-icon :name="isCollapse ? 'hamburger' : 'left'" />
    </a>
    <router-link
      to="/"
      class="brand fl"
    >
      Element Admin
    </router-link>

    <div class="operations fr">
      <el-dropdown
        @command="handleCommand"
        placement="bottom"
        trigger="click"
        class="drop-menu"
      >
        <span class="icon-user">
          <svg-icon name="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="command in commands"
            :key="command.name"
            :command="command.name"
          >
            {{ command.text }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <lang-select class="lang-select fr" />
    <div class="username fr">
      <span>Hi, {{ username }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
} from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import LangSelect from '@/components/LangSelect/index.vue'

interface Command {
  readonly name: string;
  readonly text: string;
}

const app = namespace('app')

const commands: Command[] = [
  { name: 'profile', text: '个人信息' },
  { name: 'password', text: '修改密码' },
  { name: 'logout', text: '退出系统' },
]

@Component({
  name: 'AppNavbar',

  components: {
    LangSelect,
  },
})
export default class AppNavbar extends Vue {
  private username: string = 'ntnyq'

  private commands: Command[] = commands

  @app.State
  private isCollapse!: boolean

  @app.Action
  private toggleCollapse!: void

  handleCommand (command: string) {
    switch (command) {
      case 'logout':
        this.$message.success((this.$i18n.t('tip.logoutSuccess') as string))
        this.$router.push({ name: 'Login' })
        break

      default:
        this.$message.info(`You choosed command : ${command}`)
        break
    }
  }
}
</script>
