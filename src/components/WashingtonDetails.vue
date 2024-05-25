<template>
    <v-main>
      <div class="washington">
      <div class="washington-image">
        <img src="./../assets/images/Washington.jpg" alt="Washington" style="max-width: 400px;">
      </div>
      <div class="washington-info">
        <h2>Washington</h2>
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
        description: 'Washington apples are a popular variety known for their crisp texture and sweet-tart flavor. They have a bright red or green skin and white flesh.',
        growingConditions: 'Washington apples are grown in regions with cool climates and well-drained soil. They require a certain number of chill hours to produce fruit.',
        uses: 'Washington apples are great for snacking, baking, juicing, and cooking. They are a versatile fruit used in pies, salads, sauces, and more.',
        price: 150, 
      };
    },
  };
  </script>
  