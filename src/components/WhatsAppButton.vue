<template>
    <a :href="whatsappLink" class="btn btn-primary">Contact via WhatsApp</a>
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
        const countryCode = '+254'; 
        const phoneNumber = '716194355'; 
        const baseUrl = 'https://wa.me/';
        const encodedNumber = encodeURIComponent(`${countryCode}${phoneNumber.replace(/\D/g, '')}`); 
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
    cursor: pointer; 
  }
  </style>
  
  