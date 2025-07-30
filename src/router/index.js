import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutUs from '../components/AboutUs.vue';
import Vision from '../components/Vision.vue';
import OurServices from '../components/OurServices.vue';
import ClientsAndBeneficiaries from '../components/ClientsAndBeneficiaries.vue';
import MedicalTourism from '../components/MedicalTourism.vue';
import EventService from '../components/EventCoordination.vue';
import TheLastComponent from '../components/TheLastComponent.vue';
import Tenders from '../components/Tenders.vue';
import AboutUs2 from '../components/AboutUs2.vue';
import VisionNew from '../components/VisionNew.vue';
import TheLastComponent2 from '../components/TheLastComponent2.vue';


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
     component: AboutUs2,
    },
    {
     path: '/vision',
     name: 'vision',
     component: VisionNew,
    },
    {
     path: '/services',
     name: 'services',
     component: OurServices,
    },
    // {
    //  path: '/clients',
    //  name: 'clients',
    //  component: ClientsAndBeneficiaries,
    // },
    {
     path: '/medicalTourism',
     name: 'medicalTourism',
     component: MedicalTourism
    },
    {
      path: '/eventService',
      name: 'eventService',
      component: EventService
    },
    {
      path: '/tenders',
      name: 'Tenders',
      component: Tenders
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: TheLastComponent2
    }
  ],
});

export default router;