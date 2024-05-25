<template>
    <v-main>
      <div class="tangerine">
      <div class="tangerine-image">
        <img src="./../assets/images/tangerine.jpg" alt="Tangerine" style="max-width: 400px;">
      </div>
      <div class="tangerine-info">
        <h2>Tangerines</h2>
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
        description: 'Tangerines are a small citrus fruit with a bright orange skin and sweet, juicy segments. They are easy to peel and have a refreshing flavor.',
        growingConditions: 'Tangerines thrive in warm, subtropical climates with well-drained soil and plenty of sunlight. They are typically grown in USDA hardiness zones 8-11.',
        uses: 'Tangerines are great for snacking, juicing, and adding to salads. They are a good source of vitamin C and antioxidants.',
        price: 150, 
      };
    },
  };
  </script>
  