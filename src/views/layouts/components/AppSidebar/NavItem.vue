<script lang="tsx">
import Vue, { VueConstructor, VNode } from 'vue'

export default Vue.extend({
  name: 'NavItem',

  functional: true,

  props: {
    icon: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },
  },

  render (h, { props }): VNode[] {
    const { icon, title } = props
    const vnodes: VNode[] = []

    if (icon) {
      vnodes.push(<svg-icon name={icon} class='menu-item-icon' />)
    }

    if (title) {
      vnodes.push(<span class='menu-item-text' slot='title'>{title}</span>)
    }

    return vnodes
  },
})
</script>
