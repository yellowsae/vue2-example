import MyButton from './Button'
import MyInput from './Input'



const MyUI = {}


// 当前组件库中的所有组件： 为了根据名称进行对比 进行注册
const COMPONENTS = [
  // 写好的组件
  MyButton,
  MyInput
]



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
  // console.log(options.components)


  // 写注册组件的逻辑 
  if (options && options.components) {
    const components = options.components
    components.forEach((componentName) => {
      // componentName: 传入的组件名称
      // component: 组件库中的组件
      COMPONENTS.forEach((component) => {
        if (componentName === component.name) {
          // 注册组件
          Vue.component(component.name, component)
        }
      })
    })
  } else {
    // 全部注册
    COMPONENTS.forEach((component) => {
      Vue.component(component.name, component)
    })
  }
}


export default MyUI
