<template>
  <v-main>
    <div class="hass-avocado">
      <div class="hass-avocado-image">
        <img src="./../assets/images/Hass avocado.jpg" alt="Hass Avocado" style="max-width: 400px;">
      </div>      
      <div class="hass-avocado-info">
        <h2>Hass Avocado</h2>
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
      description: 'Hass avocados are a popular variety of avocado known for their creamy texture and rich, nutty flavor. They have a dark, pebbly skin that turns purple-black when ripe.',
      growingConditions: 'Hass avocados thrive in warm, subtropical climates and require well-drained soil. They can be grown in USDA hardiness zones 8-11.',
      uses: 'Hass avocados are versatile and can be used in a variety of dishes, from guacamole and salads to smoothies and baked goods.',
      price: 150,
    };
  },
  
};
</script>