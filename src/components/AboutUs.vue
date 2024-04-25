<template>
  <v-main>
    <div id="homepage">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-carousel cycle>
              <v-carousel-item 
                v-for="item in carouselItems"
                :key="item.id"
                :src="item.src"
                container
              />
            </v-carousel>
          </v-col>
        </v-row>
        
        <v-layout>
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="20 mx-auto my-20 mt-5">              
                <v-card 
                class="elevation-2 bg-primary-faded"
                 text="We sell grafted fruit seedlings, provide quality hardened
                  fruit seedlings and offer consultancy and extension services.
                  We are dedicated to supplying Quality organic produce to our
                  customers by building strong, lasting relationship with
                  growers who are stewards of the land and their communities.
                  Growers who pack in the Edirene's Fruit Seedlings meet our
                  strict criteria for excellence and consistency." 
                  >
                </v-card>              
            </v-col>
            </v-row>
          </v-container>
        </v-layout>
      </v-container>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      carouselItems: [
        { id: 1, src: "/cesar-guel-wds9ue_gops-unsplash.jpg" },
        { id: 2, src: "/jen-uppend-3mS_VX70noM-unsplash.jpg" },
        { id: 3, src: "/jen-uppend-T4FZYPixWfM-unsplash.jpg" },
      ]
    };
  },
};
</script>

<style>
.px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

</style>