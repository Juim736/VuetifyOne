<template>
        <div>
            <v-data-table
            :headers="headers"
            :items="desserts"
            :sort-by.sync="sortBy"
            :sort-desc.sync="descending"
            class="elevation-1"
            ></v-data-table>
            <div class="text-xs-center pt-2">
            <v-btn color="primary" class="mr-2" @click="toggleOrder">Toggle sort order</v-btn>
            <v-btn color="primary" @click="nextSort">Sort next column</v-btn>
            </div>
        </div>
</template>

<script>
    export default{
        name : 'Office',
        data () {
            return {

            }
        },
        methods : {
            toggleOrder () {

            },
            nextSort () {
                
            }
        }
    }
</script>