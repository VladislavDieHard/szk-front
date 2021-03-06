import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')