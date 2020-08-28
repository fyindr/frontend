import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.devtools = true
Vue.config.productionTip = false

import App from './app.vue'
import IndexPage from './pages/index.vue'

const routes = [
    { path: '/', component: IndexPage }
]

const router = new VueRouter({ routes }) 

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')