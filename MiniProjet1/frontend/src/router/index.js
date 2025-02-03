import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/Home.vue';  
import LoginPage from '../views/Login.vue'; 

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,  
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,  
    },
  ],
});
