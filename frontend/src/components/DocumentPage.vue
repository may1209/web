<!-- Document Section -->
<template>
    <v-card flat>
    <v-card-text>
        <p>
        <!-- We use the table from vuetify: https://next.vuetifyjs.com/en/components/tables/
                This table includes the documents of different sites. -->
        <v-table>
            <thead>
            <tr>
                <th class="text-left">
                Name
                </th>
                <th class="text-left">
                URL
                </th>
            </tr>
            </thead>
            <tbody>
            <!-- We use the v-for directive to render the items from retrieveModelDocument().
                    To know more about v-for: https://vuejs.org/guide/essentials/list.html -->
            <tr
                v-for="website in websiteList"
                :key="website.name"
            >
                <td>{{ website.name }}</td>
                <td>{{ website.number }}</td>
            </tr>
            </tbody>
        </v-table>
        </p>
    </v-card-text>
    </v-card>
</template>

<script>
// Import the class to call the methods 
import DataService from '../services/DataService';
import axios from 'axios';
export default {
  data: function() {
      return {
        websiteList: []
      }
  },
  mounted: function() {
    this.getWebsites()
  },
  methods: {
    // Function to retrieve the infomation of 'Document'. We call the method defined in ../services/DataService
    retrieveModelDocument() {
      return DataService.getDocument();
    },
    getWebsites() {
      axios.get('api/v1/website/')
      .then(response => {
        this.websiteList = response.data
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>