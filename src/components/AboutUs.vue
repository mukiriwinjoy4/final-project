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
                container
              />
            </v-carousel>
          </v-col>
        </v-row>

        <v-layout>
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="20 mx-auto my-20 mt-5">
                <v-card
                  class="elevation-2 bg-primary-faded"
                  text-medium
                >
                  <p>We sell grafted fruit seedlings, provide quality hardened fruit seedlings and offer consultancy and extension services. We are dedicated to supplying Quality organic produce to our customers by building strong, lasting relationship with growers who are stewards of the land and their communities. Growers who pack in the Edirene's Fruit Seedlings meet our strict criteria for excellence and consistency.</p>

                  <p>At Edirene's Fruit Seedlings, we are dedicated to providing premium quality fruit seedlings for enthusiasts and farmers alike. Our commitment to organic farming practices ensures that each seedling is nurtured with care, promoting sustainable agriculture and environmental stewardship. With a focus on offering a diverse range of fruit varieties, we strive to empower individuals to cultivate their own orchards and enjoy the bounties of nature in a healthy and eco-friendly manner.</p>

                  <p>Edirene's Fruit Seedlings is a renowned nursery that specializes in cultivating a diverse array of high-quality fruit seedlings. Founded over two decades ago, the company has established itself as a trusted source for gardeners, farmers, and enthusiasts seeking to grow their own bountiful fruit harvests.</p>

                  <p>At the heart of Edirene's Fruit Seedlings lies a deep commitment to sustainability and environmental stewardship. The nursery employs organic farming practices, ensuring that their seedlings are nurtured without the use of harmful chemicals or pesticides. This dedication to eco-friendly cultivation not only benefits the health of the plants but also the well-being of the surrounding ecosystem.</p>

                  <p>Edirene's extensive selection of fruit seedlings includes a wide range of popular and heirloom varieties, catering to the diverse preferences and growing conditions of their customers. From juicy Hass avocados and sweet Pixie oranges to succulent Fuerte avocados and flavorful Kent mangoes, the nursery's inventory is a veritable treasure trove for fruit enthusiasts. With expert guidance and a commitment to customer satisfaction, Edirene's Fruit Seedlings empowers gardeners and farmers to cultivate thriving, bountiful fruit harvests that nourish both body and soul.</p>

                  <p></p>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-layout>
      </v-container>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      carouselItems: [
        { id: 1, src: "/cesar-guel-wds9ue_gops-unsplash.jpg" },
        { id: 2, src: "/jen-uppend-3mS_VX70noM-unsplash.jpg" },
        { id: 3, src: "/pixie-oranges.jpg" },
      ],
    };
  },
};
</script>

<style>
.px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
