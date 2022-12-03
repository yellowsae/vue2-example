import Vue from 'vue'
import App from './App.vue'
// import { MyButton, MyInput } from "../modules/my-ui"
import MyUI from "../modules/my-ui";
import "../modules/my-ui/common.css"

// Vue.use(MyUI, {
//   components: [
//     'MyButton',
//     'MyInput',
//   ]
// });


// 按需加载 
// 思路：Vue.use 它， 那么 MyButton 就是一个 plugin , 在 index.js 中实现 
// Vue.use(MyButton)
// Vue.use(MyInput)


Vue.use(MyUI);   // 全部加载组件库



Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')


// Vue.use : 在 main  中写

// Vue.install 在插件内部写 
