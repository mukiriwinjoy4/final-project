<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Perform authentication logic here, e.g., check credentials
        if (this.username === 'admin' && this.password === 'password') {
          // Redirect to the main page upon successful login
          this.$router.push('/homepage');
        } else {
          alert('Invalid username or password. Please try again.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your login page styles here */
  </style>
  