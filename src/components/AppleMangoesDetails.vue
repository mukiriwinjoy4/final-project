 <template>
  <v-main>
    <div class="apple-mangoes">
      <div class="apple-mangoes-image">
        <img src="./../assets/images/Apple-Mangoes.jpg" alt="Apple Mangoes" style="max-width: 400px;">
      </div>
      <div class="apple-mangoes-info">
        <h2>Apple Mangoes</h2>
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
        description: 'Apple Mangoes are a sweet and juicy variety of mango known for their distinct apple-like flavor. They have a yellow skin with a red blush when ripe.',
        growingConditions: 'Apple Mangoes thrive in tropical climates with well-drained soil and regular watering. They require plenty of sunlight to produce high-quality fruit.',
        uses: 'Apple Mangoes are delicious eaten fresh, added to fruit salads, smoothies, desserts, and chutneys. They are a popular choice for juicing and preserving.',
        price: 150, 
      };
    },
  };
  </script>
   