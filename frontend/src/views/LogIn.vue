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

          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
//import axios from 'axios'
//import { toast } from 'bulma-toast'

export default{
    name: 'LogIn',
    data: () => ({
        username: '',
        password: '',
        errors:[]
    }),
    methods: {
//        submitForm() {
//            if (!this.errors.length){
//                const formData = {
//                    username: this.username,
//                    password: this.password
//                }
//            }
//        }
    }
}
</script>