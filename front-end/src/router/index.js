import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Add from '../views/Add.vue';
import Focus from '../views/Focus.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
  },
  {
    path: '/focus/:id',
    name: 'focus',
    component: Focus
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
