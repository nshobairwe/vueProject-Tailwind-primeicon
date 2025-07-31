import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OurServices from "../components/HomePageComp/OurServices.vue";
import AboutUs2 from "../components/HomePageComp/AboutUs2.vue";
import VisionNew from "../components/HomePageComp/VisionNew.vue";
import TheLastComponent2 from "../components/HomePageComp/TheLastComponent2.vue";
import TenderOrder from "../components/TenderComp/TenderOrder.vue";
import MedicalTour from "../components/MedicalTourComp/MedicalTour.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: AboutUs2,
    },
    {
      path: "/vision",
      name: "vision",
      component: VisionNew,
    },
    {
      path: "/services",
      name: "services",
      component: OurServices,
    },

    {
      path: "/medicalTourism",
      name: "medicalTourism",
      component: MedicalTour,
    },
    {
      path: "/tenders",
      name: "Tenders",
      component: TenderOrder,
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: TheLastComponent2,
    },
  ],
});

export default router;
