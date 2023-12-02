import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue3, BootstrapVueIcons } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { useVuelidate } from '@vuelidate/core'
import router from './router.js'
import vue3StarRatings from "vue-star-rating";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import Vue3Carousel from 'vue3-carousel'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Carousel } from 'bootstrap'
import VueClientRecaptcha from 'vue-client-recaptcha'


library.add(faGithub, faLinkedin, faInstagram)


const app = createApp(App)



app.use(router)
app.use(BootstrapVue3)
app.use(useVuelidate)
app.component("vue3-carousel", Vue3Carousel)
app.component("vue3-star-ratings", vue3StarRatings)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component("VueClientRecaptcha", VueClientRecaptcha);  
app.mount('#app')
