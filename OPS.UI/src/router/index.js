import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/inicio';
import Busca from '@/components/busca';

import DeputadoFederalLista from '@/components/deputado-federal/lista';
import DeputadoFederalDetalhes from '@/components/deputado-federal/detalhes';
import DeputadoFederalConheca from '@/components/deputado-federal/conheca';
import DeputadoFederalSecretarioLista from '@/components/deputado-federal/secretario-lista';
import DeputadoFederalSecretarioDetalhes from '@/components/deputado-federal/secretario-detalhes';
import DeputadoFederalFrequenciaLista from '@/components/deputado-federal/frequencia-lista';
import DeputadoFederalFrequenciaDetalhes from '@/components/deputado-federal/frequencia-detalhes';

import Sobre from '@/components/sobre';
import Erro404 from '@/components/erro/404';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/busca',
      name: 'busca',
      component: Busca,
      // props: route => ({ q: route.query.q }),
    },
    {
      path: '/deputado-federal',
      name: 'deputado-federal-lista',
      component: DeputadoFederalLista,
    },
    {
      path: '/deputado-federal/conheca',
      name: 'deputado-federal-conheca',
      component: DeputadoFederalConheca,
    },
    {
      path: '/deputado-federal/secretario',
      name: 'deputado-federal-secretario-lista',
      component: DeputadoFederalSecretarioLista,
    },
    {
      path: '/deputado-federal/:id/secretario',
      name: 'deputado-federal-secretario-detalhes',
      component: DeputadoFederalSecretarioDetalhes,
      props: route => ({ id: parseInt(route.params.id, 10) }),
    },
    {
      path: '/deputado-federal/frequencia',
      name: 'deputado-federal-frequencia-lista',
      component: DeputadoFederalFrequenciaLista,
    },
    {
      path: '/deputado-federal/:id/frequencia',
      name: 'deputado-federal-frequencia-detalhes',
      component: DeputadoFederalFrequenciaDetalhes,
      props: route => ({ id: parseInt(route.params.id, 10) }),
    },
    {
      path: '/deputado-federal/:id',
      name: 'deputado-federal-detalhes',
      component: DeputadoFederalDetalhes,
      props: route => ({ id: parseInt(route.params.id, 10) }),
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre,
    },
    {
      path: '*',
      component: Erro404,
    },
  ],
});

// nginx
// location / {
//   try_files $uri $uri/ /index.html;
// }
