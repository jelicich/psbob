import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import en from '@/locale/en';
import '@/styles/index.scss';

Vue.config.productionTip = false

Vue.use(VueI18n)

const messages = {
  en
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
