<template>
    <div class="dashboard">
        <h1 class="subheading pink--text">Dashboard</h1>
        <v-container class="my-4">
            <v-tooltip top>
                <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
                    <v-icon left small>folder</v-icon>
                    <span class="caption text-lowercase">By Project Name</span>
                </v-btn>
                <span>Sort By Project Name</span>
            </v-tooltip>
            <v-tooltip top>
                <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
                    <v-icon left small>person</v-icon>
                    <span class="caption text-lowercase">By Person</span>
                </v-btn>
                <span>Sort By Person</span>
            </v-tooltip>
            <v-card flat class="pa-1" v-for="(project,index) in Projects" :key="project.index">
                <v-layout row wrap :class="`pa-3 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project Title</div>
                        <div class="">{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div class="">{{ project.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div class="">{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="">
                            <v-chip small :class="`white--text caption ${project.status}`"> {{ project.status }} </v-chip>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default{
        name: 'Dashboard',
        data () {
            return {
                Projects : [
                    {'title' : 'OSSPID','person' : 'Milon','due' : '15th April','status': 'Ongoing'},
                    {'title' : 'PRP','person' : 'Zaman','due' : '25th April','status': 'Complete'},
                    {'title' : 'Mutation','person' : 'Mehedi','due' : '15th March','status': 'Ongoing'},
                    {'title' : 'Chandina viti','person' : 'Jim','due' : '19th April','status': 'Average'},
                    {'title' : 'HMIS','person' : 'Milon','due' : '15th April','status': 'Above Average'},
                    {'title' : 'Node Js','person' : 'Sarower','due' : '15th April','status': 'Below Average'},
                ]
            }
        },
        methods : {
            sortBy(prop) {
                this.Projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
            }
        }
    }

</script>

<style>
.project.Complete {
    border-left: 5px solid #3cd1c2;
}
.project.Ongoing {
    border-left: 5px solid orange;
}
.project.Above.Average {
    border-left: 5px solid rebeccapurple;
}
.project.Average{
    border-left: 5px solid orangered; 
}
.project.Below.Average{
    border-left: 5px solid red; 
}
.v-chip.Complete {
    background: #3cd1c2;
}
.v-chip.Ongoing {
    background: orange;
}
.v-chip.Above.Average {
    background: rebeccapurple;
}
.v-chip.Average{
    background: orangered; 
}
.v-chip.Below.Average{
    background: red; 
}

</style>