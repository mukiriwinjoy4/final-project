import {createApp} from 'vue'
import { createWebHistory } from 'vue-router'
import App from './App.vue'
import router from './router'
// Vuetify
//import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Icons
// import "./assets/reset.css";
// import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css'
 

// import VueGoogleMaps from "@fawmi/vue-google-maps";


const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
       
      },
  components,
  directives,
})
const app = createApp(App)
.use(vuetify)
.use(createWebHistory())
.use(router)
// .use(VueGoogleMaps, {
//   load: {
//     key: 'YOUR_GOOGLE_MAPS_API_KEY',
//   }
//  })
.mount('#app')
