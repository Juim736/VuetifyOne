import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false


  router.beforeEach((to,from,next) => {
    const requireAuth = to.matched.some(record => record.meta.requireAuth);
    const currentUser = store.state.currentUser;
    if(requireAuth && !currentUser){
      next('/');
    }else if((to.path == '/' || to.path == '/registration') && currentUser){
      next('/home')
    }else{
      next();
    }
  })

 axios.interceptors.response.use(null, (error) => {
      if(error.response.status == 401) {
        this.$router.push('/');
      }
    })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
