import Vue from 'vue';
import Router from 'vue-router';
import AuthView from './views/Auth';
import AuthLogin from './pages/Auth/Login';
import AuthRegister from './pages/Auth/Register';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/auth/login',
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
