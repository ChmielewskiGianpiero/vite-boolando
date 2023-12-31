import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCircleXmark } from '@fortawesome/free-solid-svg-icons'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
library.add(faCircleXmark)
