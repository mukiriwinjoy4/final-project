<template>
  <v-footer class="bg-blue fixed-bottom" padless app inset>
    <div class="d-flex w-100 align-center px-4">
      <strong class="text-white">Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <!-- Use v-icon component to display Font Awesome icons -->
      <v-icon
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :size="iconSize"
        @click="handleSocialMedia(icon)"
      >{{ icon }}</v-icon>
    </div>

    <div class="px-32 py-16 bg-black text-white w-100">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div class="flex items-center justify-center">
            <!-- <img
              class="h-8 w-auto"
              src="\tree seedling.jpg"
              alt="Tree seedling"
              width="100"
              height="100"
            /> -->
          </div>
          <div class="flex space-x-6 items-center justify-center">
            <p class="text-paragraph opacity-80 text-[15px]">
              &copy; 2024 Edirene's Seedlings All rights reserved.
            </p>
            <!-- Add social media icons here if needed -->
          </div>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-whatsapp',      
      'fab fa-instagram',
    ],
    iconSize: '32', // Adjust the icon size as needed
  }),
  methods: {
    handleSocialMedia(icon) {
      // Implement your click handler here
    },
  },
}
</script>

<style scoped>
.bg-blue {
  background-color: rgb(22, 102, 213); /* Change the background color to blue */
}
.fixed-bottom {
  position: fixed; /* Fix the footer to the bottom of the viewport */
  bottom: 0; /* Position the footer at the bottom */
  width: 100%; /* Make the footer span the entire width of the viewport */
}
</style>
