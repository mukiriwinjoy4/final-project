<template>
    <v-main>
      <div class="tommy">
      <div class="tommy-image">
        <img src="./../assets/images/Tommy.jpg" alt="Tommy" style="max-width: 400px;">
      </div>
      <div class="tommy-info">
        <h2>Tommy Mangoes</h2>
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
        description: 'Tommy Mangoes are a popular variety of mango with a sweet and tangy flavor. They have a thin skin and juicy, fiberless flesh.',
        growingConditions: 'Tommy Mangoes thrive in tropical climates with well-drained soil and plenty of sunlight. They are sensitive to cold temperatures and require protection.',
        uses: 'Tommy Mangoes are great for eating fresh, making juices, smoothies, salads, and desserts. They are a versatile fruit used in various culinary dishes.',
        price: 150, 
      };
    },
  };
  </script>
  