import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

var app = createApp(App);
app.use(BootstrapVue).use(IconsPlugin)

app.mount('#app')
