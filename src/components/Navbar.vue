<script>
// import HomePage from "HomePage.vue"
// import AboutUs from "AboutUs.vue"
// import Gallery from "Gallery.vue"
// import ContactUs from "ContactUs.vue"
// import Menu from "Menu.vue"
// import HowtoOrder from "HowtoOrder.vue"
</script>


<template>
    <v-app-bar color="white">
        <div>
            <v-btn to = "/" color = "blue" dark >Home</v-btn>
        </div>       
         <div>
            <v-btn to = "/aboutus" color = "blue" dark >About Us</v-btn>
        </div>
        <div>
            <v-btn to = "/gallery" color = "blue" dark >Gallery</v-btn>
        </div>
        <div>
            <v-btn to = "/contactus" color = "blue" dark >Contact Us</v-btn>
        </div>
        <div>
            <v-btn to = "/menu" color = "blue" dark >Menu</v-btn>
        </div>
        <div>
            <v-btn to = "/howtoorder" color = "blue" dark >How To Order</v-btn>
        </div>
        <div>
            <v-btn to = "/login" color = "blue" dark >Log In</v-btn>
        </div>
     </v-app-bar>
</template>