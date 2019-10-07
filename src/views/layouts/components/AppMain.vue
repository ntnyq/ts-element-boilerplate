<template>
  <div class="app-main">
    <transition
      name="el-zoom-in-center"
      mode="out-in"
    >
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'AppMain',
})
export default class AppMain extends Vue {}
</script>
