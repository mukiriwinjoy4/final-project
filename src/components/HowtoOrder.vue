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
                cover
              />
            </v-carousel>
          </v-col>
        </v-row>
        
        <v-layout>
          <v-container>
            <v-row align="center" justify="center">
              <div class="d-flex align-center flex-column">
                <div class="mt-4 text-subtitle-2 clickable" @click="handlePropsClick">With props</div>

                <v-card width="400" title="Make your Order">
                  <v-btn @click="openEmailClient">Message via Email</v-btn>
                </v-card>
  
                <div class="mt-4 text-subtitle-2 clickable" @click="handleSlotsClick">With slots</div>
  
                <v-card width="400">
                  <template v-slot:title> County </template>
                  <template v-slot:text>
                    <div>
                      <v-btn @click="handleLocationSearchClick">Search Your Location</v-btn>
                    </div>
                  </template>
                </v-card>
  
                <div class="mt-4 text-subtitle-2 clickable" @click="openWhatsApp">With WhatsApp</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Phone Number</v-card-title>
                  <button @click="openWhatsApp">0716194355</button>
                </v-card-item>
              </v-card>
              </div>
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
        { id: 1, src: "/WhatsApp Image 2024-04-10 at 20.44.10_e461141a.jpg" },
        { id: 2, src: "/WhatsApp Image 2024-04-10 at 20.44.11_15fe656b.jpg" },
        { id: 3, src: "/nick-fewings-IkiUJ4XNC10-unsplash.jpg" },
      ],
      cartItems: [] 
    };
  },
  methods: {
    openEmailClient() {
      
      const emailAddress = 'Edirenesseedlings@gmail.com';
      
      
      const subject = 'Subject of the email';
      const body = 'Content of the email';
      
      
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      
      window.location.href = mailtoUrl;
    },
    handleLocationSearchClick() {
      
      window.open('https://www.google.com/maps/search/?api=1', '_blank');
    },
    openWhatsApp() {
      
      const phoneNumber = '0716194355';

      
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    },
    
  }
};
</script>

<style scoped>
#homepage {
  padding: 20px;
}

.text-subtitle-2 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.clickable {
  cursor: pointer;
}

.card {
  margin-bottom: 20px;
}
</style>