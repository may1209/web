<!-- Announcement Section -->
<template>
  <v-card flat>
  <v-card-text>
    <p>
      <v-card
       class="mx-auto"
       max-width="300"
       >
       <!-- We use the list from vuetify: https://next.vuetifyjs.com/en/components/lists/
            This list includes the infomation from retrieveModelAnnouncement(). -->
       <v-list :items="retrieveModelAnnouncement()"></v-list>
       </v-card>
       </p>
  </v-card-text>
  </v-card>
</template>

<script>
// Import the class to call the methods 
import DataService from '../services/DataService';
export default {
  data: () => ({
  }),

  methods: {
    // Function to retrieve the infomation of 'Announcement'. We call the method defined in ../services/DataService
    retrieveModelAnnouncement() {
      return DataService.getAnnouncement();
    },
  }
}
</script>