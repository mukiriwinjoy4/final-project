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
                        :items="fruit"
                        item-title="fruit_seedlings"
                        item-value="id"
                        ></v-list>
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
    
    data() {
      return {
        center: { lat: 51.093048, lng: 6.84212 },
      carouselItems: [
        {
          id: 1, src: "/vladzimir-nikitsin-wY1GIiiTRak-unsplash.jpg"
        },
        {
          id: 2, src: "/julian-ackroyd-DjN9dJH44d4-unsplash.jpg"
        },
        {
          id: 3, src: "/oriol-portell-AbwqpFnBDms-unsplash.jpg"
        },
      ],
    
        fruit:[
            {
                id: 1,
                fruit_seedlings: 'Hass Avocadoes'
           },
            {
                id: 2,
                fruit_seedlings: 'pomegranates'
            },
            {
                id: 3,
                fruit_seedlings: 'Yellow Passion'
           },
            {
                id: 4,
                fruit_seedlings : 'Tommy'
            },
            {
                id: 5,
                fruit_seedlings: 'Kent'
            },
            {
                id: 6,
                fruit_seedlings: 'Apple Mangoes'
            },
            {
                id: 7,
                fruit_seedlings: 'Tangerine'
            },
            {
                id: 8,
                fruit_seedlings: 'Washington'
            },
            {
                id: 9,
                fruit_seedlings: 'Pixie Oranges'
            },
            {
                id: 10,
                fruit_seedlings: 'Fuerte'
            },
          ],
        componentTitle: 'Fruit Seedlings'
      }
    },    
    methods: {
      increment() {
        this.count++
      }
    },    
    mounted() {
    console.log(this.fruit)
    }
    
  }
  </script>