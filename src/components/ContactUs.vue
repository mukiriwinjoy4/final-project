<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-carousel cycle>
            <v-carousel-item 
              v-for="item in carouselItems"
              :key="item.id"
              :src="item.src"
              cover
            />
          </v-carousel>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4">
          <v-card class="mx-auto" max-width="400" title="Want To Know More?" text="Reach Out To Us Through!"></v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mx-auto" max-width="400">
            <template v-slot:title>Email</template>
            <template v-slot:text>
              <a class="btn btn-primary" href="mailto:Edirenesseedlings@gmail.com?subject=This is an email" target="_blank">Send an email!</a>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>WhatsApp/Message</v-card-title>
            <v-card-text>
              <!-- WhatsApp component -->
              <WhatsAppButton />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import WhatsAppButton from './WhatsAppButton.vue'; // Assuming WhatsAppButton.vue contains the WhatsApp component

export default {
  name: "App",
  components: {
    WhatsAppButton,
  },
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      carouselItems: [
        { id: 1, src: "/charlotte-harrison-RcDJZCVRrQ4-unsplash.jpg" },
        { id: 2, src: "/amirul-islam-vUlr2F01z-o-unsplash.jpg" },
        { id: 3, src: "/rodion-kutsaiev-HJcb2t7rmJg-unsplash.jpg" },
      ]
    };
  },
};
</script>

<style scoped>
.btn-primary {
  color: #FFF;
  background-color: #1976D2;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  display: block;
  margin-top: 10px;
}

.btn-primary:hover {
  background-color: #135BA1;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
