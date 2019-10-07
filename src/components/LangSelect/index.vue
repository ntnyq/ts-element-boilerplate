<template>
  <el-dropdown
    @command="handleSelectLanguage"
    trigger="click"
    class="international"
  >
    <div>
      <svg-icon name="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="locale in localeKeys"
        :key="locale"
        :disabled="language === locale"
        :command="locale"
      >
        {{ $t(`language.${locale}`) }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import {
  Vue,
  Component,
} from 'vue-property-decorator'
import { localeKeys } from '@i18n/index'
import { namespace } from 'vuex-class'

const app = namespace('app')

@Component({
  name: 'LangSelect',
})
export default class LangSelect extends Vue {
  private localeKeys: string[] = localeKeys

  @app.State
  private language!: string

  @app.Action
  private setLanguage!: (language: string) => void

  handleSelectLanguage (language: string) {
    this.$i18n.locale = language
    this.setLanguage(language)
    this.$message.success((this.$i18n.t(`tip.languageSwitched`) as string))
  }
}
</script>

<style lang="scss">
.international {
  .svg-icon-language {
    font-size: 20px;
    vertical-align: -5px;
    cursor: pointer;
  }
}
</style>
