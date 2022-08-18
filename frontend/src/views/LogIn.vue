<template>
  <div class="page-log-in">
    <v-container>
    <v-row justify="space-between">
      <v-col
        cols="12"
        md="4"
      >
        <h1 class="title">Log In</h1>
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-text-field
              v-model="username"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              type="password"
              label="Password"
              required
            ></v-text-field>

            <v-alert type="warning" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </v-alert>
            
            <div class="field">
              <v-btn @click="submitForm">Log In</v-btn>
            </div>
        
            <v-divider></v-divider>

            Or <router-link to="/sign-up">click here</router-link> to sign up!

            <p>Token: {{token}}</p>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import axios from 'axios'
//import { toast } from 'bulma-toast'

export default{
    name: 'LogIn',
    data: () => ({
        username: '',
        password: '',
        errors:[],
        token: ''
    }),
    methods: {
        submitForm() {
            const formData = {
                username: this.username,
                password: this.password
            }

            axios.post("http://3.111.188.243:8080/api/1.0/auth/tokens/", formData)
                .then(response => {
                  this.token = response.data
                  console.log(response);
                })
                .catch(error => {
                  console.log(error);
                })
        }
    }
}
</script>