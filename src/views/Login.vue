<template>
    <v-app>
            <v-container grid-list-xl text-xs-center>
                    <v-layout row wrap>
                      <v-flex xs6 offset-xs3>
                        <v-card dark color="purple">
                          <v-card-text>Login Form</v-card-text>
                        </v-card>
                        <p class="errorMsg" v-if="authErrorMessage"> {{ authErrorMessage }} </p>
                        <v-card>
                            <v-form
                            ref="form" @submit.prevent="submitLogin"
                          >
                            <v-text-field
                              v-model="form.email"
                              label="  Email"
                              required
                              :rules="emailRules"
                            ></v-text-field>
                        
                            <v-text-field
                              v-model="form.password"
                              label="  Password"
                              type="password"
                              :rules="passwordRules"
                              required
                            ></v-text-field>
                        
                            <v-btn dark
                              color="purple darken-4"
                              type="submit"
                            >
                              Login
                            </v-btn>
                            
                            <router-link to="/registration"><v-btn dark
                                color="teal darken-4"
                              >
                                Registration
                              </v-btn></router-link>
                      
                          </v-form>
                        </v-card>
          
                      </v-flex>
                    </v-layout>
                  </v-container>

    </v-app>
</template>

<script>

  import {login} from '@/auth/auth.js';
    export default{
        name : 'Login',
        data () {
            return {
                form : {
                    email : '',
                    password : ''
                },
                passwordRules : [
                  v => v.length >= 6 || 'Minimum length 6 chracter'
                ],
                emailRules: [
                  (v) => !!v || 'E-mail is required',
                  (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
            }
        },
        methods : {
          submitLogin() {
                if(this.form.email.length && this.form.password.length){
                  this.$store.dispatch("login")
                  login(this.$data.form)
                  .then((response) => {
                    this.$store.commit("loginSuccess",response)
                    this.$router.push({path: '/home'})
                  })
                  .catch((error) => {
                    this.$store.commit("loginFailed")
                  })
                }else{
                  this.$store.state.authError = 'Email and Password is Required'
                  console.log(this.$store.state.authError)
                }
            }
        },
        computed : {
          authErrorMessage () {
              return this.$store.state.authError
          }
        }
    }
</script>

<style>
  .errorMsg{
    font-size: 18px;
    font-weight: bold;
    color: red
  }
</style>