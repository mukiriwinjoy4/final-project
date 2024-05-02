import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "./../components/HomePage.vue"
import AboutUs from "./../components/AboutUs.vue"
import Gallery from "./../components/Gallery.vue"
import ContactUs from "./../components/ContactUs.vue"
import Menu from "./../components/Menu.vue"
import HowtoOrder from "./../components/HowtoOrder.vue"
import Login from "./../components/login.vue"
import Orders from "./../views/OrdersPage.vue"
import Plants from "./../views/Plants.vue"

import HassAvocadoDetails from './../components/HassAvocadoDetails.vue'
import PomegranatesDetails from './../components/PomegranatesDetails.vue'
import YellowPassionDetails from './../components/YellowPassionDetails.vue'
import TommyDetails from './../components/TommyDetails.vue'
import KiwiDetails from './../components/KiwiDetails.vue'
import AppleMangoesDetails from './../components/AppleMangoesDetails.vue'
import TangerineDetails from './../components/TangerineDetails.vue'
import WashingtonDetails from './../components/WashingtonDetails.vue'
import PixieOrangesDetails from './../components/PixieOrangesDetails.vue'
import FuerteDetails from './../components/FuerteDetails.vue'


const routes = [
    {
        path: '/',
        name: 'homepage',
        component: HomePage,
    }, 
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs,
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery,
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs,
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu,
    },
    {
        path: '/howtoorder',
        name: 'howtoorder',
        component: HowtoOrder ,
    },
    {
      path: '/login',
      name: 'login',
      component: Login ,
  },
    {
        path: '/order',
        name: 'Oders',
        component: Orders ,
    },
    {
        path: '/plant',
        name: 'Plants',
        component: Plants ,
    },
     
    {
        path: '/menu',
        component: Menu,
    },

        // children: [
          {
            path: '/hass_avocado',
            component: HassAvocadoDetails,
            // props: { fruitItem: { id: 1, fruit_seedlings: 'Hass Avocadoes' }}
          },
          {
            path: '/pomegranates',
            component: PomegranatesDetails,
            // props: { fruitItem: { id: 2, fruit_seedlings: 'pomegranates' }}
          },
          {
            path: '/yellow passion',
            component: YellowPassionDetails,
            // props: { fruitItem: { id: 3, fruit_seedlings: 'Yellow Passion' }}
          },
          {
            path: '/tommy',
            component: TommyDetails,
            // props: { fruitItem: { id: 4, fruit_seedlings: 'Tommy' }}
          },
          {
            path: '/kiwi',
            component: KiwiDetails,
            // props: { fruitItem: { id: 5, fruit_seedlings: 'Kiwi' }}
          },
          {
            path: '/apple_mangoes',
            component: AppleMangoesDetails,
            // props: { fruitItem: { id: 6, fruit_seedlings: 'Apple Mangoes' }}
          },
          {
            path: '/tangerine',
            component: TangerineDetails,
            // props: { fruitItem: { id: 7, fruit_seedlings: 'Tangerine' }}
          },
          {
            path: '/washington',
            component: WashingtonDetails,
            props: { fruitItem: { id: 8, fruit_seedlings: 'Washington' }}
          },
          {
            path: '/pixie_oranges',
            component: PixieOrangesDetails,
            props: { fruitItem: { id: 9, fruit_seedlings: 'Pixie Oranges' }}
          },
          {
            path: '/fuerte',
            component: FuerteDetails,
            props: { fruitItem: { id: 10, fruit_seedlings: 'Fuerte' }}
          },
    // ]}

    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router