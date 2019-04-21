<template>
    <div class="team">
        <h1 class="subheading grey--text">Team</h1>
        <v-container class="my-4">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="(person,index) in persons" :key="person.index">
                    <v-card flat class="text-xs-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100">
                                    <img src="/images/jim.jpg" alt="">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="grey">
                                <v-icon small >message</v-icon>
                                <span>This is the message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
    
<script>
    export default{
        name : 'Team',
        data () {
            return {
                persons : [
                    {'name' : 'jim', 'role' : 'Software Engineer', 'pic' : ''},
                    {'name' : 'sadiya', 'role' : 'Software Engineer', 'pic' : ''},
                    {'name' : 'sopola', 'role' : 'Software Engineer', 'pic' : ''},
                    {'name' : 'antara', 'role' : 'Software Engineer', 'pic' : ''},
                    {'name' : 'marshia', 'role' : 'Software Engineer', 'pic' : ''},
                    {'name' : 'sohely', 'role' : 'Software Engineer', 'pic' : ''},
                ]
            }
        },
        mounted () {
            console.log(this.$store.state.currentUser)
            // this.$store.dispatch("teams")
        }
    }
</script>