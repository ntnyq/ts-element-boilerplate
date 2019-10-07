<template>
  <div class="home">
    <h1>Home</h1>
    <div class="home-demo">
      <h2>Filter示例</h2>
      <p>
        {{ currentTime | formatTime }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Home',
})
export default class Home extends Vue {
  private currentTime: number = Date.now()

  private timer: any = null

  beforeDestroy () {
    this.timer && clearInterval(this.timer)
  }

  mounted () {
    this.timer = setInterval(() => {
      this.currentTime = Date.now()
    }, 1e3)
  }
}
</script>

<style lang="scss">
.home-demo {
  position: relative;
  padding: 30px 0;
  font-size: 18px;

  h2 {
    margin-bottom: 20px;
  }

  p {
    font-weight: 500;
  }
}
</style>
