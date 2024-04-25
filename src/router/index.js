import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "./../components/HomePage.vue"
import AboutUs from "./../components/AboutUs.vue"
import Gallery from "./../components/Gallery.vue"
import ContactUs from "./../components/ContactUs.vue"
import Menu from "./../components/Menu.vue"
import HowtoOrder from "./../components/HowtoOrder.vue"
import Orders from "./../views/OrdersPage.vue"



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
        path: '/order',
        name: 'Oders',
        component: Orders ,
    },
    
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router