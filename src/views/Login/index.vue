<template>
  <div class="login">
    <div class="login-form">
      <h1>Element Admin</h1>
      <el-form
        ref="loginForm"
        :model="loginForm"
        auto-complete="on"
        label-position="left"
      >
        <!-- :rules="loginRules" -->

        <el-form-item prop="username">
          <span class="form-item-icon">
            <svg-icon name="user" />
          </span>
          <el-input
            v-model.trim="loginForm.username"
            :placeholder="`请输入用户名`"
            icon-class="username"
            type="text"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="form-item-icon">
            <svg-icon name="password" />
          </span>
          <el-input
            @keyup.enter.native="handleLogin"
            v-model.trim="loginForm.password"
            :type="passwordType"
            :placeholder="`请输入密码`"
            name="password"
            auto-complete="on"
          />
          <svg-icon
            @click.native="showPwd"
            name="eye"
          />
        </el-form-item>
        <el-button
          @click.native.prevent="handleLogin"
          :loading="loading"
          type="primary"
          class="login-btn"
        >
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Watch,
  Component,
} from 'vue-property-decorator'

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  name: 'Login',
})
export default class Login extends Vue {
  private passwordType: string = 'password'

  private loading: boolean = false

  private redirect: string = ''

  private loginForm: LoginForm = {
    username: 'admin',
    password: '111111',
  }

  showPwd () {
    this.passwordType = this.passwordType === 'password' ? '' : 'password'
  }

  handleLogin () {
    (this.$refs.loginForm as any).validate((valid: boolean) => {
      if (valid) {
        this.loading = true
        this.$message.success((this.$i18n.t('tip.loginSuccess') as string))

        setTimeout(() => {
          this.loading = false
          this.$router.push({ path: this.redirect || '/' })
        }, 5e2)
      } else {
        this.$message.error('请认真填写登录信息！')

        return false
      }
    })
  }

  @Watch('$route', { immediate: true })
  onRouteChange (route: any) {
    this.redirect = route.query && route.query.redirect
  }
}
</script>

<style lang="scss">
@import "./style";
</style>
