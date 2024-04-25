<template>
    <a :href="whatsappLink" class="btn btn-info">Contact via WhatsApp</a>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        default: "Thank you for contacting Edirene's Fruit Seedlings! We are based in Murang'a along Nairobi-Nyeri highwaynear River Sagana Kwa samaki.",
      },
    },
    computed: {
      whatsappLink() {
        const countryCode = '+254'; // Replace 'XX' with the actual country code
        const phoneNumber = '716194355'; // Phone number
        const baseUrl = 'https://wa.me/';
        const encodedNumber = encodeURIComponent(`${countryCode}${phoneNumber.replace(/\D/g, '')}`); // Remove non-numeric characters
        const encodedMessage = encodeURIComponent(this.message);
        return `${baseUrl}${encodedNumber}?text=${encodedMessage}`;
      },
    },
  };
  </script>
  
  <style>
  .btn-info {
    color: #FFF;
    background-color: #17a2b8;
    border-color: #17a2b8;
    cursor: pointer; /* Add pointer cursor on hover */
  }
  </style>
  
  