<template>
  <v-main>
    <v-row>
    <v-col
      v-for="(image, index) in images"
      :key="index"
      class="d-flex child-flex"
      cols="2"
    >
      <v-img
        :src="`/${image}`"
        :lazy-src="`/${image}`"
        aspect-ratio="1"
        cover
        class="images bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      
      
      images: [
        'amirul-islam-vUlr2F01z-o-unsplash.jpg',
        'cesar-guel-wds9ue_gops-unsplash.jpg',
        'charlotte-harrison-RcDJZCVRrQ4-unsplash.jpg',
        'jen-uppend-3mS_VX70noM-unsplash.jpg',
        'jen-uppend-T4FZYPixWfM-unsplash.jpg',
        'oriol-portell-AbwqpFnBDms-unsplash.jpg',
        'rodion-kutsaiev-HJcb2t7rmJg-unsplash.jpg',
        'WhatsApp Image 2024-04-10 at 20.44.10_e461141a.jpg',
         'WhatsApp Image 2024-04-10 at 20.44.11_15fe656b.jpg', 
         'nick-fewings-IkiUJ4XNC10-unsplash.jpg', 
         'vladzimir-nikitsin-wY1GIiiTRak-unsplash.jpg',
         'julian-ackroyd-DjN9dJH44d4-unsplash.jpg',
        
      ]
    };
  }
};
</script>

<style>
  .images{
    border-radius: 5%;
  }
</style>