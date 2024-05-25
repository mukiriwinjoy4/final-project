<template>
  <v-navigation-drawer
    v-model="drawer"
    color="primary"
    dark
    app
    class="red darken-4"
  >
    <v-layout column align-center>
      <v-flex class="my-2 mx-auto text-center">
        <v-avatar size="100">
          <!-- <v-img src="/img1.png"></v-img> -->
        </v-avatar>
        <p class="white--text subheading mt-1 text-center">Username</p>
        
      </v-flex>
    </v-layout>
    <v-list flat>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
        active-class="border"
      >
        
        <v-list-item-content class="d-flex align-center text-white">
          <v-icon>{{ link.icon }}</v-icon>
          <span class="ml-2">{{ link.text }}</span>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar color="primary" dark app>
    <!-- Drawer icon -->
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title class="text-uppercase">
      <h2>Edirene's seedlings</h2>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ props }">
        <v-btn text v-bind="props">
          <v-icon left>mdi-chevron-down</v-icon>
          <span>Menu</span>
        </v-btn>
      </template>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- <v-btn text>
      <span>Exit</span>
      <v-icon right>mdi-exit-to-app</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      // { icon: "mdi-login", text: "Login", route: "/" },
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-information", text: "AboutUs", route: "/aboutus" },
      { icon: "mdi-image", text: "Gallery", route: "/gallery" },
      { icon: "mdi-phone", text: "ContactUs", route: "/contactus" },
      { icon: "mdi-menu", text: "Menu", route: "/menu" },
      { icon: "mdi-cart", text: "HowtoOrder", route: "/howtoorder" },
    ],
  }),
};
</script>

<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
/* .v-app-bar-nav-icon {
  position: relative;
  z-index: 1000; /* Adjust the z-index as needed */
/* } */
</style>
