<template>
    <V-main>
      <div class="kiwi">
      <div class="kiwi-image">
        <img src="./../assets/images/kiwi.jpg" alt="Kiwi" style="max-width: 400px;">
      </div>
      <div class="kent-info">
        <h2>Kiwi Fruit</h2>
        <p class="description">{{ description }}</p>
        <p class="growing-conditions">{{ growingConditions }}</p>
        <p class="uses">{{ uses }}</p>
        <p class="price">${{ price }}</p>
      </div>
    </div>
    </V-main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        description: 'Kiwifruit, also known as Chinese gooseberry, is the edible berry of several species of woody vines in the genus Actinidia.',
        growingConditions: 'Kiwifruit is oval-shaped, about the size of a large hens egg, measuring 5-8 cm in length and 4.5-5.5 cm in diameter.',
        uses: 'Kiwifruit is known for being high in vitamin C, as well as containing other nutrients like vitamin K, vitamin E, and dietary fiber.',
        price: 500, 
      };
    },
  };
  </script>
  