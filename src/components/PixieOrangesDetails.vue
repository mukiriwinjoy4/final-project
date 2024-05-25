<template>
    <v-main>
      <div class="pixie-oranges">
      <div class="pixie-oranges-image">
        <img src="./../assets/images/pixie-oranges.jpg" alt="Pixie Oranges" style="max-width: 400px;">
      </div>
      <div class="pixie-oranges-info">
        <h2>Pixie Oranges</h2>
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
          description: 'Pixie Oranges are a small, sweet citrus fruit with a thin skin and few seeds. They are easy to peel and have a refreshing flavor.',
          growingConditions: 'Pixie Oranges thrive in warm, subtropical climates with well-drained soil and plenty of sunlight. They are typically grown in USDA hardiness zones 9-11.',
          uses: 'Pixie Oranges are great for snacking, juicing, and adding to salads. They are a good source of vitamin C and antioxidants.',
          price: 250, 
        };
    },
  };
  </script>
  