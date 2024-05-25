<template>
    <v-main>
      <div class="pomegranates">
      <div class="pomegranates-image">
        <img src="./../assets/images/Pomegranates.jpg" alt="Pomegranates" style="max-width: 400px;">
      </div>
      <div class="pomegranates-info">
        <h2>Pomegranates</h2>
        <p class="description">{{ description }}</p>
        <p class="growing-conditions">{{ growingConditions }}</p>
        <p class="uses">{{ uses }}</p>
        <p class="price">${{ price }}</p>
      </div>
    </div>
    </v-main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        description: 'Pomegranates are a nutritious fruit known for their juicy arils and sweet-tart flavor. They are rich in antioxidants and vitamins.',
        growingConditions: 'Pomegranates thrive in Mediterranean climates with hot, dry summers and mild winters. They prefer well-drained soil and full sun.',
        uses: 'Pomegranates can be eaten fresh, juiced, or used in salads, desserts, and savory dishes. They are also popular in drinks and cocktails.',
        price: 300, 
      };
    },
  };
  </script>
  