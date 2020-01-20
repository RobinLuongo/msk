import Vue from 'vue';

import { MdCard, MdButton, MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import AppComponent from './components/AppComponent.vue';

Vue.use(MdCard)
Vue.use(MdButton)
Vue.use(MdIcon)

new Vue({
    render: h => h(AppComponent)
}).$mount('#app')
