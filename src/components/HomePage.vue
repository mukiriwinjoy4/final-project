<template>
  <div id="homepage">
    <v-main>
      <!-- Fullscreen Image -->
      <v-img
        src="WhatsApp Image 2024-04-25 at 09.46.26_edd10602.jpg"
        class="d-flex align-center justify-center"
        style="height: 100vh; width: 100vw; object-fit: cover;"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <!-- Content Section -->
      <v-row align="right" justify="center">
        <v-col cols="10 mx-auto my-5">
          <v-card
            class="elevation-2 bg-success"
            title="Organic Fruit Farming"
            text="Yet, most farmers struggle to access the high-quality inputs or the advice they need to thrive. Edirene's Fruit Seedling is radically changing that by blending franchising efficiency with a commitment to generating value for smallholder farmers, their families and communities. As a company, we have been involved in propagation and selling of quality fruit tree seedling for several years. Fruit seedling has been our specialization because we understood early how important they are to our society and for commercial purposes if they are taken care of. We have various types of seedlings in our nurseries."
            
          ></v-card>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>

<style scoped>
/* Ensure the image covers the full viewport */
.v-img {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}

/* Remove padding from the container */
.px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
