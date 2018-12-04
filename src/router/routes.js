import Home from '@pages/Home.vue';
import GameField from '@pages/GameField.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game',
    name: 'game',
    component: GameField
  }
];

export default routes;