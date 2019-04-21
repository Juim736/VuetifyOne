import Vue from 'vue'
import Vuex from 'vuex'
import { getLocalUser } from '@/auth/auth.js'
import Axios from 'axios';
const user = getLocalUser();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser : user,
    loading : false,
    isLogged : false,
    authError : null,

  },
  getters : {
    isLoading (state) {
        return state.loading;
    }, 
    isLoggedIn (state) {
        return state.isLoggedIn;
    },
    currentUser (state) {
        return state.currentUser;
    },
    authError (state) {
        return state.authError;
    }
  },
  mutations: {
    login(state) {
      state.loading = true;
      state.authError = null;
    },
    loginSuccess(state,payload) {
      state.authError = null;
      state.loading = false;
      state.currentUser = Object.assign({}, payload.user, {token: payload.access_token})
      localStorage.setItem("user", JSON.stringify(state.currentUser));
    },
    loginFailed(state) {
      state.loading = false;
      state.currentUser = null;
      state.authError = 'Credentials mismatch'
    },
    logout(state) {
      localStorage.removeItem("user");
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    registration(state) {
      state.loading = true;
      state.authError = null;
    },
    registrationFailed(state) {
      state.loading = false;
      state.authError = "Something Went Wrong";
    },
    registrationSuccess(state) {
      state.loading = false;
      state.authError = null;
    }
  },
  actions: {
    login(context) {
      context.commit("login")
    },
    registration(context) {
      context.commit("registration")
    },
    teams(context) {
      Axios.get(`http://192.168.0.103:8001/api/team/teams`,{
        headers : {
          'Authorization' : `Bearer ${context.state.currentUser.token}`
        }
      })
      .then((response) => {
        console.log(response);
        // context.commit("updateTeam", response.data.teams)
      })
    }
  }
})
