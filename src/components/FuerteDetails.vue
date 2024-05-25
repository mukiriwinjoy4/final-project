<template>
  <v-main>
    <div class="fuertes">
      <div class="fuertes-image">
        <img src="./../assets/images/fuerte.jpg" alt="Fuertes" style="max-width: 400px;">
      </div>
      <div class="fuertes-info">
        <h2>Fuerte Avocadoes</h2>
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
        description: 'Fuerte Avocadoes are a creamy and flavorful variety of avocado with a medium-thick skin. They have a rich, buttery taste and are popular for their versatility.',
        growingConditions: 'Fuerte Avocadoes thrive in subtropical climates with well-drained soil and protection from strong winds. They are sensitive to frost and require care in colder regions.',
        uses: 'Fuerte Avocadoes are great for guacamole, salads, sandwiches, and smoothies. They are a nutritious fruit rich in healthy fats and vitamins.',
        price: 150, 
      };
    },
  };
  </script>
  