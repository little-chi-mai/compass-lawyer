import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import WhoWeAre from '../views/WhoWeAre.vue'
import AreasOfPractice from '../views/AreasOfPractice.vue'
import OurFees from '../views/OurFees.vue'
import Resources from '../views/Resources.vue'
import MarketUpdates from '../views/MarketUpdates.vue'
import ContactUs from '../views/ContactUs.vue'
import Privacy from '../views/Privacy.vue'
import Disclaimer from '../views/Disclaimer.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/who-we-are',
    name: 'WhoWeAre',
    component: WhoWeAre
  },
  {
    path: '/areas-of-practice',
    name: 'AreasOfPractice',
    component: AreasOfPractice
  },
  {
    path: '/our-fees',
    name: 'OurFees',
    component: OurFees
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/market-updates',
    name: 'MarketUpdates',
    component: MarketUpdates
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer
  },
  
  
]

const router = new VueRouter({
  routes
})

export default router
