<!-- FruitDetail.vue

<template>
  <div class="fruit-detail">
    <div class="fruit-image">
      <img :src="fruitImageSrc" :alt="fruitItem.fruit_seedlings">
    </div>
    <div class="fruit-info">
      <h2>{{ fruitItem.fruit_seedlings }}</h2>
      <p class="description">{{ description }}</p>
      <p class="growing-conditions">{{ growingConditions }}</p>
      <p class="uses">{{ uses }}</p>
      <p class="price">${{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fruitItem: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      fruitImageSrc: this.getImageSrc(this.fruitItem.fruit_seedlings),
      description: this.getDescription(this.fruitItem.fruit_seedlings),
      growingConditions: this.getGrowingConditions(this.fruitItem.fruit_seedlings),
      uses: this.getUses(this.fruitItem.fruit_seedlings),
      price: this.getPrice(this.fruitItem.fruit_seedlings)
    }
  },
  methods: {
    getImageSrc(fruitName) {
      // Map fruit names to image sources
      const imageMap = {
        'Hass Avocadoes': '/Hass avocado.jpg.',
        'pomegranates': '/Pomegranates.jpg',
        'Yellow Passion': '/Yellow-Passion.jpg',
        'Tommy': '/Tommy.jpg',
        'Kiwi': '/kiwi.jpg',
        'Apple Mangoes': '/Apple-Mangoes.jpg',
        'Tangerine': '/tangerine.jpg',
        'Washington': '/Washington.jpg',
        'Pixie Oranges': '/pixie-oranges.jpg',
        'Fuerte': '/fuerte.jpg'
      }
      return imageMap[fruitName] || '/default-fruit.jpg'
    },
    getDescription(fruitName) {
      // Map fruit names to descriptions
      const descriptionMap = {
        'Hass Avocadoes': 'Hass avocados are a popular variety of avocado known for their creamy texture and rich, nutty flavor. They have a dark, pebbly skin that turns purple-black when ripe.',
        'pomegranates': 'Pomegranates are a fruit with a tough, reddish-pink skin and hundreds of edible, juicy, tart-sweet seeds.',
        'Yellow Passion': 'Yellow passion fruit is a tropical fruit with a bright yellow, oval-shaped shell and a sweet, tangy pulp.',
        'Tommy': 'Tommy Atkins mangoes are a popular variety known for their large size, firm texture, and sweet, slightly fibrous flesh.',
        'Kiwi': 'Kiwifruit, also known as Chinese gooseberry, is the edible berry of several species of woody vines in the genus Actinidia.',
        'Apple Mangoes': 'Apple mangoes are a variety with a round, apple-like shape and a sweet, aromatic flavor.',
        'Tangerine': 'Tangerines are a type of mandarin orange that are smaller, sweeter, and easier to peel than regular oranges.',
        'Washington': 'Washington navel oranges are a popular variety known for their seedless, juicy, and sweet flesh.',
        'Pixie Oranges': 'Pixie oranges are a small, seedless variety with a thin, easy-to-peel skin and a sweet, low-acid flavor.',
        'Fuerte': 'Fuerte avocados are a variety known for their smooth, creamy texture and rich, nutty flavor.'
      }
      return descriptionMap[fruitName] || 'No description available.'
    },
    getGrowingConditions(fruitName) {
      // Map fruit names to growing conditions
      const growingConditionsMap = {
        'Hass Avocadoes': 'Hass avocados thrive in warm, subtropical climates and require well-drained soil. They can be grown in USDA hardiness zones 8-11.',
        'pomegranates': 'Pomegranates grow best in hot, dry climates and can tolerate a wide range of soil types, but prefer well-drained, slightly acidic soil.',
        'Yellow Passion': 'Yellow passion fruit vines thrive in warm, tropical or subtropical climates and require well-drained, fertile soil.',
        'Tommy': 'Tommy Atkins mangoes grow best in tropical and subtropical regions with warm temperatures, high humidity, and well-drained soil.',
        'Kiwi': 'Kiwifruit is oval-shaped, about the size of a large hen\'s egg, measuring 5-8 cm in length and 4.5-5.5 cm in diameter.',
        'Apple Mangoes': 'Apple mangoes have similar growing requirements to other mango varieties, thriving in tropical and subtropical regions with warm temperatures and well-drained soil.',
        'Tangerine': 'Tangerines can be grown in a variety of climates, but prefer warm, humid conditions and well-drained, slightly acidic soil.',
        'Washington': 'Washington navel oranges grow best in warm, Mediterranean-like climates and require well-drained, slightly acidic soil.',
        'Pixie Oranges': 'Pixie oranges can be grown in a range of climates, but prefer warm, frost-free regions with well-drained, slightly acidic soil.',
        'Fuerte': 'Fuerte avocados have similar growing requirements to Hass avocados, thriving in warm, subtropical climates with well-drained soil.'
      }
      return growingConditionsMap[fruitName] || 'No growing conditions available.'
    },
    getUses(fruitName) {
      // Map fruit names to uses
      const usesMap = {
        'Hass Avocadoes': 'Hass avocados are versatile and can be used in a variety of dishes, from guacamole and salads to smoothies and baked goods.',
        'pomegranates': 'Pomegranates can be eaten fresh, used in juices, sauces, and desserts, or incorporated into a variety of savory dishes.',
        'Yellow Passion': 'Yellow passion fruit can be eaten fresh, used in juices, smoothies, and desserts, or added to salads and other dishes.',
        'Tommy': 'Tommy Atkins mangoes are commonly used in a variety of dishes, including salads, salsas, smoothies, and desserts.',
        'Kiwi': 'Kiwifruit is known for being high in vitamin C, as well as containing other nutrients like vitamin K, vitamin E, and dietary fiber.',
        'Apple Mangoes': 'Apple mangoes can be enjoyed fresh, used in juices, smoothies, and desserts, or incorporated into salads and other dishes.',
        'Tangerine': 'Tangerines are commonly eaten fresh, used in juices and smoothies, or added to salads and other dishes.',
        'Washington': 'Washington navel oranges are primarily used for fresh eating, juicing, and in a variety of desserts and baked goods.',
        'Pixie Oranges': 'Pixie oranges are often eaten fresh, used in juices and smoothies, or incorporated into salads and other dishes.',
        'Fuerte': 'Fuerte avocados can be used in a similar way to Hass avocados, such as in guacamole, salads, and various other dishes.'
        }
        return usesMap[fruitName] || 'No uses available.'
      },
      getPrice(fruitName) {
        // Map fruit names to prices
        const priceMap = {
          'Hass Avocadoes': 150,
          'pomegranates': 300,
          'Yellow Passion': 50,
          'Tommy': 150,
          'Kiwi': 500,
          'Apple Mangoes': 150,
          'Tangerine': 150,
          'Washington': 150,
          'Pixie Oranges': 250,
          'Fuerte': 150
        }
        return priceMap[fruitName] || 0
      }
    }
  }
  </script>
  
  <style scoped>
  .fruit-detail {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  }
  
  .fruit-image {
    flex: 1;
    text-align: center;
  }
  
  .fruit-image img {
    max-width: 100%;
    height: auto;
  }
  
  .fruit-info {
    flex: 1;
    padding: 0 2rem;
  }
  
  .fruit-info h2 {
    margin-top: 0;
  }
  
  .fruit-info p {
    margin-bottom: 1rem;
  }
  </style>
   -->