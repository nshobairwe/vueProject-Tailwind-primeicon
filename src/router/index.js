import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutUs from '../components/AboutUs.vue';
import Vision from '../components/Vision.vue';
import OurServices from '../components/OurServices.vue';
import ClientsAndBeneficiaries from '../components/ClientsAndBeneficiaries.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
     path: '/aboutus',
     name: 'aboutus',
     component: AboutUs,
    },
    {
     path: '/vision',
     name: 'vision',
     component: Vision,
    },
    // {
    //  path: '/values',
    //  name: 'values',
    //  component: Vision,
    // },
    {
     path: '/services',
     name: 'services',
     component: OurServices,
    },
    {
     path: '/clients',
     name: 'clients',
     component: ClientsAndBeneficiaries,
    }
  ],
});

export default router;