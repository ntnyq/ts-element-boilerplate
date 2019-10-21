<template>
  <svg
    :class="['svg-icon', `svg-icon-${name}`]"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script lang="ts">
import {
  Vue,
  Prop,
  Component,
} from 'vue-property-decorator'

@Component({
  name: 'SvgIcon',
})
export default class SvgIcon extends Vue {
  @Prop({ required: true })
  private name!: string
}
</script>

<style lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
