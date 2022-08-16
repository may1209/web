<!-- <template> contains all the markup structure and display logic of your component. -->
<template>  
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <!-- We use the toolbar from vuetify: https://next.vuetifyjs.com/en/components/toolbars/
             This toolbar includes the buttons navigating to different sites. -->
        <div>
          <v-toolbar>
            <v-toolbar-items>
                <v-btn
                v-for="item in menus"
                  :key="item.key"
                  :name="item.value"
                  :href="item.url"
                >
                  {{ item.title }}
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-btn to="/sign-up">Sign Up</v-btn>
            <v-btn to="/log-in">Log In</v-btn>
          </v-toolbar>
        </div>                
      </v-col>
  
   <div class="d-flex flex-row">
    <v-row no-gutters>
      <v-col lg="12">
        <!-- We use the tab from vuetify: https://next.vuetifyjs.com/en/components/tabs/
             This tab includes the infomation of 'Document', 'Announcement', and 'FAQs' -->
        <v-tabs
         v-model="tab"
         direction="vertical">
          <v-tab to="DocumentPage" active-class>Document</v-tab>
          <v-tab to="AnnouncementPage">Announcement</v-tab>
          <v-tab to="FAQsPage">FAQs</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <router-view></router-view>
    <v-tabs-items v-model="tab">
      <v-tab-item value="Document">

        
      </v-tab-item>
      <v-tab-item value="Announcement">
        <!-- Display view pages here based on route -->
        <!-- <router-view></router-view> -->
      </v-tab-item>
      <v-tab-item value="FAQs">
        <!-- Display view pages here based on route -->
        <!-- <router-view></router-view> -->
      </v-tab-item>
    </v-tabs-items>
    </div>
    </v-row>
  </v-container>
</template>

<!-- <script> contains all of the non-display logic of your component. -->
<script>
// Import the class to call the methods 
import DataService from '../services/DataService';
export default {
  data: () => ({
    menus: [
        { value: 1, title: 'Jira', url: 'https://jira.accton.com:8443/' },
        { value: 2, title: 'Confluence', url: 'https://confluence.accton.com:9443/' },
        { value: 3, title: 'Gerrit', url: 'https://gerrit.edge-core.com/' },
        { value: 4, title: 'GitLab', url: 'https://gitlab.edge-core.com/' },
        { value: 5, title: 'Jenkins', url: 'https://jenkins.edge-core.com:10443/' },
        { value: 6, title: 'JFrog', url: 'https://artifactory.edge-core.com:7443/' },
        { value: 7, title: 'Zendesk', url: 'https://support.edge-core.com/' },
        { value: 8, title: 'AWS', url: 'https://devops.edge-core.com:11443/aws/ec2_instance.php' },
      ],
    tab: 'Document',
  }),
  methods: {
    // Function to retrieve the infomation of 'Document'. We call the method defined in ../services/DataService
    retrieveModelDocument() {
      return DataService.getDocument();
    },
    // Function to retrieve the infomation of 'Announcement'. We call the method defined in ../services/DataService
    retrieveModelAnnouncement() {
      return DataService.getAnnouncement();
    },
  }
}
</script>