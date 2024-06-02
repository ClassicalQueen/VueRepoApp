import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import './style.css';
import './assets/author-photo.jpg';

createApp(App).use(router).mount('#app');
