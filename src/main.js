import './assets/main.css'

import { createApp, version } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/**
 * 此处的创建和挂载是可以有多个的，且每个应用都有自己的用于配置和全局资源的作用域
 */
const app = createApp(App)

/**
 * filters的全局注册，只有vue2项目有
 */
// import * as filters from './filters/filters'
// Object.keys(filters).forEach((key) => {
//   app.filter(key, filters[key])
// })

console.log(version, 'version')
app.use(createPinia())
app.use(router)

/**
 * vue的配置项
 * @param {*} err
 */
app.config.errorHandler = (err) => {
  console.log(err, '错误')
}
app.config.globalProperties.projectName = '新vue3-vite项目'

app.mount('#app')
// console.log(this.projectName, '$projectName')// 这个在打印时会显示未定义
