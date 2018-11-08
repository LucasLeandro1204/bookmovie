import Vue from 'vue';
import Router from 'vue-router';

import AuthView from './views/Auth';
import MainView from './views/Main';

import AuthLogin from './pages/Auth/Login';
import AuthRegister from './pages/Auth/Register';

import SearchIndex from './pages/Search/Index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: MainView,
      children: [
        {
          path: 'favourite',
          name: 'search.favourite',
          component: SearchIndex,
        },
        {
          path: '',
          name: 'search.index',
          component: SearchIndex,
        },
      ],
    },
    {
      path: '/auth/',
      name: 'auth',
      component: AuthView,
      redirect: '/auth/login',
      children: [
        {
          path: 'login',
          name: 'auth.login',
          component: AuthLogin,
        },
        {
          path: 'register',
          name: 'auth.register',
          component: AuthRegister,
        },
      ],
    },
  ],
});
