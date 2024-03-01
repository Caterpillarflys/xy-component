import Vue from 'vue'
import App from './App.vue'
import '../components/css/button.scss'
import hButton from '../components/lib/button/index'

// Vue.component('name', Button);

// Vue的use方法实际上是调用组件的install方法，install方法再执行component方法，Button.install ——> Vue.component()
Vue.use(hButton);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
