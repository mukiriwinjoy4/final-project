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
                  <!-- Use a button to open WhatsApp with the phone number -->
                  <button @click="openWhatsApp">0716194355</button>
                </v-card-item>
              </v-card>
              </div>
            </v-row>
          </v-container>
        </v-layout>

        <!-- Cart Section -->
        <aside class="cart">
          <h2>Your Cart</h2>
          <div v-if="cartItems.length === 0" class="empty-cart">Your cart is empty.</div>
          <ul v-else>
            <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
              <div class="item-info">
                <span class="item-name">{{ item.name }}</span>
                <span class="item-price">${{ item.price }}</span>
              </div>
              <button @click="removeFromCart(index)" class="remove-btn">Remove</button>
            </li>
            <li class="total">Total: ${{ getTotalPrice() }}</li>
          </ul>
        </aside>
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
      cartItems: [] // Initialize an empty array for cart items
    };
  },
  methods: {
    // Your existing methods

    openEmailClient() {
  // Define the recipient email address
  const emailAddress = 'Edirenesseedlings@gmail.com';
  
  // Define the subject and body of the email
  const subject = 'Subject of the email';
  const body = 'Content of the email';
  
  // Construct the mailto URL with the recipient, subject, and body
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open the default email client with the pre-filled email
  window.location.href = mailtoUrl;
  },
    handleLocationSearchClick() {
  // Redirect users to Google Maps for location search
  window.open('https://www.google.com/maps/search/?api=1', '_blank');
  },

  openWhatsApp() {
      // Replace the phone number with the desired WhatsApp number
      const phoneNumber = '0716194355';

      // Open WhatsApp with the specified phone number
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    },

    addToCart(item) {
      this.cartItems.push(item);
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    getTotalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
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

.cart {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
}

.cart h2 {
  margin-bottom: 10px;
}

.cart ul {
  list-style: none;
  padding: 0;
}

.cart .empty-cart {
  text-align: center;
  color: #555;
}

.cart .cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
</style>
