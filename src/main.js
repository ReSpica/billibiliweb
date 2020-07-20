import Vue from 'vue'
import App from './App.vue'

//router导入
import router from './router/index.js'

//vant导入
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//vant的toast提示单独使用
import {Toast} from 'vant';
Vue.prototype.$tip = Toast;
Toast.setDefaultOptions({ duration: 800 });

//font
import '@/assets/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
