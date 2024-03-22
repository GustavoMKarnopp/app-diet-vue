/* eslint-disable import/extensions */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../layout/Default.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    props: {
      color: 'transparent',
      absolute: true,
    },
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('../views/Home.vue'),
        meta: {
          requiresAuth: false, // Esta rota requer autenticação
        },
      },
    ],
  },
  {
    path: '/estatisticas',
    component: Layout,
    props: {
      color: 'transparent',
      absolute: true,
    },
    children: [
      {
        name: 'Estatisticas',
        path: '',
        component: () => import('../views/Estatisticas.vue'),
        meta: {
          requiresAuth: false, // Esta nao rota requer autenticação
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // const token = getItemLocal('accessToken');

  // const isAuthenticated = token || false; // Obtenha o estado de autenticação do Vuex

  if (to.meta.requiresAuth) {
  // if (to.meta.requiresAuth && !isAuthenticated) {
    // Verifique se a rota requer autenticação e o usuário não está autenticado
    if (to.path !== '/') {
      // Verifique se o usuário não está tentando acessar a página de login

      router.push('/'); // Redirecione o usuário para a página de login ou qualquer outra página que você preferir
    } else {
      next(); // Prossiga com a navegação normalmente se o usuário já estiver na página de login
    }
  } else {
    next(); // Prossiga com a navegação normalmente
  }
});


export default router;

