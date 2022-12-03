import MyButton from './Button'
import MyInput from './Input'



const MyUI = {}


// 注册组件 
MyUI.install = function (Vue, options) {
  // 这里就可以使用 Vue 一些全局的方法了
  // Vue.component
  // Vue.directive
  // Vue.mixin
  // Vue.prototype.$xxx
  // 这些方法  -> Vue 提供的一些方法集合



  // Vue: Vue 实例 
  // options: 传入的参数
  console.log(options)
}


export default MyUI
