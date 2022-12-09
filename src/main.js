import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import StarRating from "vue-star-rating";


createApp(App).component('star-rating', StarRating)
createApp(App).mount('#app')


