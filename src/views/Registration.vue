<template>
        <v-app>
                <v-container grid-list-xl text-xs-center>
                        <v-layout row wrap>
                          <v-flex xs6 offset-xs3>
                            <v-card dark color="blue-grey darken-1">
                              <v-card-text>Registration Form</v-card-text>
                            </v-card>
                            <v-card>
                                <v-form
                                ref="form"
                                @submit.prevent="registrationSubmit"
                              >
                                <v-text-field
                                  v-model="form.name"
                                  label="Name"
                                  required
                                ></v-text-field>

                                <v-text-field
                                  v-model="form.email"
                                  label="  Email"
                                  required
                                ></v-text-field>
                            
                                <v-text-field
                                  v-model="form.password"
                                  label="  Password"
                                  type="password"
                                  required
                                ></v-text-field>
                            
                                <v-btn dark
                                  color="purple darken-4"
                                  type="submit"
                                >
                                  Registration
                                </v-btn>
                                
                                <router-link to="/"><v-btn dark
                                    color="teal darken-4"
                                    @click=""
                                  >
                                    Login
                                  </v-btn></router-link>
                          
                              </v-form>
                            </v-card>
              
                          </v-flex>
                        </v-layout>
                      </v-container>
    
        </v-app>
    </template>
    
    <script>

      import { registration } from '@/auth/auth.js'
        export default{
            name : 'registration',
            data () {
                return {
                    form : {
                        name : '',
                        email : '',
                        password : ''
                    }
                }
            },
            methods : {
              registrationSubmit() {
                    this.$store.dispatch("registration")
                    registration(this.$data.form)
                    .then((response) => {
                      console.log(response)
                      if(response != undefined){
                        this.$store.commit("registrationSuccess")
                        this.$router.push('/');
                      }else{
                        this.$store.commit("registrationFailed")
                      }
                      
                    })
                    .catch((error) => {
                      console.log(error)
                      console.log('ss')
                      this.$store.commit("registrationFailed")
                    })
                }
            }
        }
    </script>