<template>
  <v-main>
    <button style="float: right;" class="btn btn-primary" @click="showNewPlantForm = true">New Plant</button>

    
    <v-dialog v-model="showNewPlantForm" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Plant</span>
        </v-card-title>

        <v-card-text>
          <v-form ref="newPlantForm" v-model="valid" lazy-validation>
            <v-text-field
              v-model="newPlant.plant_name"
              label="Plant Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="newPlant.price"
              label="Price"
              type="number"
              required
            ></v-text-field>

            <v-file-input
              v-model="newPlant.image"
              label="Plant Image"
              required
            ></v-file-input>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="showNewPlantForm = false">
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="createNewPlant"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Plant</th>
          <th class="text-left">Price</th>
          <th class="text-left">Image</th>
          <th class="text-left">Action</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.id }}</td>
          <td>{{ item.plant_name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <v-img :src="getImageUrl(item.image_path)"></v-img>
          </td>
          <td>
            <button @click="updatePlants(item.id)" class="btn btn-info">
              Update
            </button>
          </td>
          <td>
            <button @click="deletePlants(item.id)" class="btn btn-warning">
              Delete
            </button>
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
      showNewPlantForm: false,
      newPlant: {
        plant_name: "",
        price: 0,
        image: null,
      },
      valid: true,
    };
  },

  methods: {
    async getPlants() {
      const response = await axios.get("http://127.0.0.1:8000/api/plant");
      this.items = response.data;
    },

    getImageUrl(image) {
      return image ? `http://127.0.0.1:8000/storage/${image}` : null;
    },

    async updatePlants(plantId) {
      try {
        const updatedPlant = {
      plant_name: 'Washington',
      price: 150,
      
    };
        const response = await axios.put(
          `http://127.0.0.1:8000/api/plants/${plantId}`
        );
        this.getPlants();
      } catch (error) {
        console.error("Error updating plant:", error);
      }
    },
    async deletePlants(plantId) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/plants/${plantId}`);
        this.items = this.items.filter((item) => item.id !== plantId);
      } catch (error) {
        console.error("Error deleting plant:", error);
      }
    },
    async createNewPlant() {
      try {
        if (this.$refs.newPlantForm.validate()) {
          const formData = new FormData();
          formData.append("plant_name", this.newPlant.plant_name);
          formData.append("price", this.newPlant.price);
          formData.append("image", this.newPlant.image);

          await axios.post("http://127.0.0.1:8000/api/plant", formData);
          this.showNewPlantForm = false;
          this.getPlants();
        }
      } catch (error) {
        console.error("Error creating new plant:", error);
      }
    },
  },

  created() {
    this.getPlants();
  },
};
</script>