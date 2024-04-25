<script setup>
import Navbar from './components/Nav_Bar.vue'
import Footer from './components/Footer.vue'
// import "../node_modules/@syncfusion/ej2-base/styles/material.css";
// import "../node_modules/@syncfusion/ej2-vue-notifications/styles/message/material.css";

</script>

<template>
  <v-app>
    <Navbar/>
    <v-container fluid class="mt-5">
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-container>
    <Footer/>
  </v-app>
</template>
