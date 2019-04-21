<teplate>
    <nav>
        <v-toolbar flat app dark color="pink accent-3">
          <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      
          <v-toolbar-title class="white--text">Self Management</v-toolbar-title>
      
          <v-spacer></v-spacer>
      
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
      
          <v-btn icon>
            <v-icon>apps</v-icon>
          </v-btn>
      
          <v-btn icon>
            <v-icon>refresh</v-icon>
          </v-btn>
          <v-menu bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">more_vert</v-icon>
              </template>
              <v-list dark class="pink lighten-1">
                <v-list-tile v-for="(item, i) in items" :key="i" @click="actionLink(item.link)">
    
                  <v-list-tile-title><v-icon>{{ item.icon }}</v-icon> {{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="light-blue darken-3">
            <v-layout column align-center>
                <v-flex class="mt-5">
                  <v-avatar size="100"> 
                    <img src="images/jim.jpg" alt="kggkjs">
                  </v-avatar>
                </v-flex>
              </v-layout>
                <v-list>
                        <v-list-tile
                          v-for="item in navitems"
                          :key="item.title"
                           router :to="item.link"
                        >
                          <v-list-tile-action>
                            <v-icon class="white--text">{{ item.icon }}</v-icon>
                          </v-list-tile-action>
                  
                          <v-list-tile-content>
                            <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
        </v-navigation-drawer>  
    </nav>
</teplate>

<script>

    export default {
        name: 'Navbar',
      components: {
      },
      data() {
        return {
              drawer : false,
              forProfileSignOut : false,
              navitems : [
                  {'title' : 'Dashboard', 'icon' : 'dashboard','link' : '/dashboard'},
                  {'title' : 'My project', 'icon' : 'folder','link' : '/project'},
                  {'title' : 'Team', 'icon' : 'person','link' : '/team'},
                  {'title' : 'Office', 'icon' : 'person','link' : '/office'},
                  {'title' : 'Eployee', 'icon' : 'person','link' : '/employee'},
              ],
              items : [
                {'title': 'Profile', 'icon' : 'home','link' : 'profile'},
                {'title': 'Log Off', 'icon' : 'event','link' : 'logOff'},
                {'title': 'Sign out', 'icon' : 'logout', 'link' : 'logout'},
              ]
          }
      },
      methods : {
        actionLink (acitonType) {
          if(acitonType === 'logout'){
            this.$router.push({path:'/'})
          }
        }
      }
    }
  </script>
  