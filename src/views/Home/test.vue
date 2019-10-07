<template>
  <div class="test">
    <h1>Test</h1>
    <p
      :style="`color: ${primaryColor};`"
      class="test-text"
    >
      I' in color
      <code>{{ primaryColor }}</code>
      which is exported from scss
    </p>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
} from 'vue-property-decorator'
// @ts-ignore: can't import from scss file
import { primaryColor } from '@styles/core/_variables.scss'

@Component({
  name: 'Test',
})
export default class Test extends Vue {
  private primaryColor: string = primaryColor
}
</script>

<style lang="scss">
.test {
  padding: 20px;
  background-color: #fff;

  h1 {
    margin-bottom: 20px;
  }

  &-text {
    font-size: 24px;
  }
}
</style>
