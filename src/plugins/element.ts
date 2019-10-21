import Vue from 'vue'
import {
  Button,
  Input,
  Select,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  MenuItem,
  MenuItemGroup,
  Form,
  FormItem,
  Tooltip,
  Message,
  MessageBox,
  Notification,
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'medium', zIndex: 99999 }

Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tooltip)

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
Vue.prototype.$confirm = MessageBox
