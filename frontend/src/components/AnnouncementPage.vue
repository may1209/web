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
import axios from 'axios';
export default {
  data: function() {
      return {
        laasList: [],
        token: "Zdya2QvpqkhMycZSNmT--kZhSWDlAHnvam85-LcFgw4-tttb0nTZJ691RRTIQwz"
      }
  },
  mounted: function() {
    this.getList()
  },
  methods: {
    // Function to retrieve the infomation of 'Announcement'. We call the method defined in ../services/DataService
    retrieveModelAnnouncement() {
      var devices = []
      for (var i = 0; i < this.laasList.length; i++) {
        var device = {
          title: this.laasList[i].name,
          value: i+1
        };
        devices.push(device);
      }
      console.log(devices);

      return devices;
    },
    getList() {
      axios.get('http://3.111.188.243:8080/api/1.0/devices/?page=2&page_size=10',{
          headers: {
            Authorization: "Bearer " + this.token
          }
        }
      )
      .then(response => {
        this.laasList = response.data.results
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>