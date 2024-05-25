<template>
  <div id="homepage">
    <v-main>
      <v-img
        src="WhatsApp Image 2024-04-25 at 09.46.26_edd10602.jpg"
        class="d-flex align-center justify-center"
        style="height: 100vh; width: 100vw; object-fit: cover;"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <v-row align="right" justify="center">
        <v-col cols="20 mx-auto my-20 mt-5">
          <v-card
            class="elevation-2 bg-accent"
            title="Organic Fruit Farming"
            text-medium
             style="background-color: #f0f0f0;" 
          >
            <p>Yet, most farmers struggle to access the high-quality inputs or the advice they need to thrive. Edirene's Fruit Seedling is radically changing that by blending franchising efficiency with a commitment to generating value for smallholder farmers, their families and communities. As a company, we have been involved in propagation and selling of quality fruit tree seedling for several years. Fruit seedling has been our specialization because we understood early how important they are to our society and for commercial purposes if they are taken care of. We have various types of seedlings in our nurseries.</p>

            <p>Edirene's Fruit Seedlings is a haven for organic fruit farming enthusiasts, offering a diverse range of high-quality fruit seedlings to kickstart your own orchard. Our commitment to sustainable and eco-friendly practices sets us apart, ensuring that each seedling is nurtured with care and expertise. With a passion for promoting healthy living and environmental stewardship, Edirene's Fruit Seedlings cultivates a variety of fruit varieties known for their exceptional taste and nutritional value.</p>

            <p>At Edirene's Fruit Seedlings, we believe in the power of organic farming to produce fruits that are not only delicious but also free from harmful chemicals and pesticides. Our dedication to organic practices ensures that each fruit seedling is grown in harmony with nature, preserving the integrity of the soil and promoting biodiversity. By choosing Edirene's Fruit Seedlings, you are not just investing in a fruit tree; you are supporting a sustainable approach to agriculture that benefits both consumers and the environment.</p>

            <p>Whether you are a seasoned gardener or a novice enthusiast, Edirene's Fruit Seedlings provides the resources and expertise to help you embark on your organic fruit farming journey. From selecting the right seedlings to offering guidance on cultivation and maintenance, we are here to support you every step of the way. Join us at Edirene's Fruit Seedlings and experience the joy of growing your own organic fruits while contributing to a greener and healthier world.</p>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>

<style scoped>

.v-img {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}


.px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
