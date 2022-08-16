<template>
  <div class="page-sign-up">
    <v-container>
    <v-row justify="space-between">
      <v-col
        cols="12"
        md="4"
      >
        <h1 class="title">Sign up</h1>
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

            <v-text-field
              v-model="password2"
              type="password"
              label="Repeat password"
              required
            ></v-text-field>

            <v-alert type="warning" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </v-alert>
            
            <div class="field">
              <v-btn @click="submitForm">Sign Up</v-btn>
            </div>
        
            <v-divider></v-divider>

            Or <router-link to="/log-in">click here</router-link> to log in!

          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import axios from 'axios'
import { toast } from 'bulma-toast'

export default{
    name: 'SignUp',
    data: () => ({
        username: '',
        password: '',
        password2: '',
        errors:[]
    }),
    methods: {
        submitForm() {
            this.errors = []
            if (this.username === ''){
                this.errors.push('The username is missing')
            }
            if (this.password === ''){
                this.errors.push('The password is too short')
            }
            if (this.password !== this.password2){
                this.errors.push('The passwords dosn\'t match')
            }
            if (!this.errors.length){
                const formData = {
                    username: this.username,
                    password: this.password
                }
                axios.post("api/v1/users/", formData)
                .then(response => {
                    toast({
                        message: 'Account created, please log in!',
                        type: 'is-success',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        //position: 'bottom-right',
                    })

                    this.$router.push('/log-in')
                    console.log(response);
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data){
                          this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                        console.log(JSON.stringify(error.response.data))
                    } else if (error.message) {
                        this.errors.push('Something went wrong. Please try again')
                        console.log(JSON.stringify(error))
                        console.log(error.message)
                    }             
                })
            }
        }
    }
}
</script>