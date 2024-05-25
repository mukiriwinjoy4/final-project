<template>
  <v-main>
    <div id="homepage">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-carousel cycle>
              <v-carousel-item
                v-for="item in carouselItems"
                :key="item.id"
                :src="item.src"
                cover
              />
            </v-carousel>
          </v-col>
        </v-row>

        <v-row>
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="20 mx-auto my-20 mt-5">
                <v-card-item>
                  <v-card-title>{{ componentTitle }}</v-card-title>
                </v-card-item>

                <v-card-text>
                  <v-list
                   

                    

                  >
                  <v-list-item
                  v-for="item in fruit"
                    :key="item.id"
                    :to="item.path"
                    active-class="border"
                  >
                    
                      <span class="ml-2">{{ item.fruit_seedlings }}</span>
                  </v-list-item>
                
                </v-list>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>
<script>
export default {
  // import HassAvocadoDetails from './HassAvocadoDetails.vue';
  // import PomegranatesDetails from './PomegranatesDetails.vue'
  // import YellowPassionDetails from './YellowPassionDetails.vue'
  // import TommyDetails from './TommyDetails.vue'
  // import KiwiDetails from './KiwiDetails.vue'
  // import AppleMangoesDetails from './AppleMangoesDetails.vue'
  // import TangerineDetails from './TangerineDetails.vue'
  // import WashingtonDetails from './WashingtonDetails.vue'
  // import PixieOrangesDetails from './PixieOrangesDetails.vue'
  // import FuerteDetails from './FuerteDetails.vue'

  name: "App",
  components: {
    // HassAvocadoDetails,
    // PomegranatesDetails,
    // YellowPassionDetails,
    // TommyDetails,
    // KiwiDetails,
    // AppleMangoesDetails,
    // TangerineDetails,
    // WashingtonDetails,
    // PixieOrangesDetails,
    // FuerteDetails,
  },

  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      carouselItems: [
        {
          id: 1,
          src: "/vladzimir-nikitsin-wY1GIiiTRak-unsplash.jpg",
        },
        {
          id: 2,
          src: "/julian-ackroyd-DjN9dJH44d4-unsplash.jpg",
        },
        {
          id: 3,
          src: "/oriol-portell-AbwqpFnBDms-unsplash.jpg",
        },
      ],

      fruit: [
        {
          id: 1,
          fruit_seedlings: "Hass Avocadoes",
          path: "/hass_avocado",
        },
        {
          id: 2,
          fruit_seedlings: "pomegranates",
          path: "/pomegranates",
        },
        {
          id: 3,
          fruit_seedlings: "Yellow Passion",
          path: "/yellow passion",
        },
        {
          id: 4,
          fruit_seedlings: "Tommy",
          path: "/tommy",
        },
        {
          id: 5,
          fruit_seedlings: "Kiwi",
          path: "/kiwi",
        },
        {
          id: 6,
          fruit_seedlings: "Apple Mangoes",
          path: "/apple_mangoes",
        },
        {
          id: 7,
          fruit_seedlings: "Tangerine",
          path: "/tangerine",
        },
        {
          id: 8,
          fruit_seedlings: "Washington",
          path: "/washington",
        },
        {
          id: 9,
          fruit_seedlings: "Pixie Oranges",
          path: "/pixie_oranges",
        },
        {
          id: 10,
          fruit_seedlings: "Fuerte",
          path: "/fuerte",
        },
      ],
      componentTitle: "Fruit Seedlings",
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  mounted() {
    console.log(this.fruit);
  },
};
</script>
