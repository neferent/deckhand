import { createApp } from 'vue';
import './style.css';
import naive from 'naive-ui';
import App from './App.vue';

import { createWebHistory, createRouter } from 'vue-router';

import Home from './views/Home.vue';
import Icons from './views/Icons.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/icons', component: Icons },
];

const router = createRouter({
  history: createWebHistory('/deckhand'),
  routes,
});

const app = createApp(App);

app.use(naive);
app.use(router);

app.mount('#app');
