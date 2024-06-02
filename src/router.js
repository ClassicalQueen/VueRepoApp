import { createRouter, createWebHistory } from 'vue-router';
import Repositories from './components/Repositories.vue';
import RepositoryDetail from './components/RepositoryDetail.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  { path: '/', component: Repositories },
  { path: '/repository/:id', component: RepositoryDetail },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
