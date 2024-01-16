import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutUs from '../views/AboutUs.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
import ItemStorage from '../views/ItemsStorage.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true,
  },
  {
    path: '/storage',
    name: 'storage',
    component: ItemStorage,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUs,
    props: true,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    props: true,
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
    props: true,
  },

];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
