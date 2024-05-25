<template>
  <v-main>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Plant</th>
          <th class="text-left">User</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Action</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.plant_name }}</td>
          <td>{{ item.user_name }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <button @click="updateOrder(item.id)" class="btn btn-primary">Update</button>
          </td>
          <td>
            <button @click="deleteOrder(item.id)" class="btn btn-warning">Delete</button>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    };
  },

  methods: {
    async getOrders() {
      const response = await axios.get("http://127.0.0.1:8000/api/ordering");
      this.items = response.data;
    },
    async updateOrder(orderId) {
      const response = await axios.put(`http://127.0.0.1:8000/api/ordering/${orderId}`);      
      this.getOrders(); 
    },
    async deleteOrder(orderId) {
      await axios.delete(`http://127.0.0.1:8000/api/ordering/${orderId}`);
      this.items = this.items.filter(item => item.id !== orderId); 
    },
  },

  created() {
    this.getOrders();
  },
};
</script>