import Vue from 'vue'
import App from './App.vue'
import MyUI from "../modules/my-ui";


// 按需加载 
Vue.use(MyUI, {
  components: [
    'Button',
    'Input',
  ]
});


// Vue.use(MyUI);   // 全部加载组件库



Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')


// Vue.use : 在 main  中写

// Vue.install 在插件内部写 
