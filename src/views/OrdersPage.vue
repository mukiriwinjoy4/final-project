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
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.id }}</td>
          <td>{{ item.plant_name }}</td>
          <td>{{ item.user_name }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <button class="btn btn-primary44">Update</button>
           </td>
           <td>
            <button class="btn btn-primary44">Delete</button>
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
    // async updateOrders() {
    //   const response = await axios.update("http://127.0.0.1:8000/api/ordering");
    //   this.items = response.data;
    // },
    // async deleteOrders() {
    //   const response = await axios.delete("http://127.0.0.1:8000/api/ordering");
    //   this.items = response.data;
    // },
  },

  created() {
    this.getOrders();
  },
  // created() {
  //   this.updateOrders();
  // },
  // created() {
  //   this.deleteOrders();
  // },
};
</script>
