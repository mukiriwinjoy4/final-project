<template>
  <v-main>
    <v-footer class="d-flex flex-column" style="background-color: #1976D2;">
      <div class="d-flex w-100 align-center px-4">
        <strong class="text-white">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
        ></v-btn>
      </div>
      <div class="flex space-x-6 items-center justify-center">
        <p class="text-paragraph opacity-80 text-[15px]">
          &copy; 2024 Edirene's Seedlings All rights reserved.
        </p>
        
      </div>
    </v-footer>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
