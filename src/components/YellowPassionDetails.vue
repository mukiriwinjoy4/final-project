<template>
    <v-main>
      <div class="yellow-passion">
      <div class="yellow-passion-image">
        <img src="./../assets/images/Yellow-Passion.jpg" alt="Yellow Passion" style="max-width: 400px;">
      </div>
      <div class="yellow-passion-info">
        <h2>Yellow Passion</h2>
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
        description: 'Yellow Passion fruit, also known as yellow granadilla, is a tropical fruit with a sweet and tangy flavor. It has a smooth, yellow skin and juicy, seed-filled pulp.',
        growingConditions: 'Yellow Passion fruit thrives in warm, tropical climates with well-drained soil and plenty of sunlight. It is sensitive to frost and requires protection in colder regions.',
        uses: 'Yellow Passion fruit can be eaten fresh, juiced, or used in desserts, jams, and beverages. It is a rich source of vitamins and antioxidants.',
        price: 50, 
      };
    },
  };
  </script>
  