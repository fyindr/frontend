import { createApp } from 'vue'
import router from '@/router'

import App from '@/app.vue'

const siimee = createApp(App)

siimee.use(router)
    .mount('#siimee')