import Vue from 'vue';
import VueRouter from 'vue-router';

import VisualizationComponent from 'components/MapVisualization';
import OtherVisualizationPage from 'components/OtherVisualization/Page';

Vue.use(VueRouter);

const routes = [
  {
    path: '/conflicts-related-to-protected-areas',
    components: {
      default: VisualizationComponent
    },
  },
  {
    path: '/regions-with-greatest-water-risks',
    components: {
      default: OtherVisualizationPage
    },
  },
  {
    path: '*',
    redirect: '/conflicts-related-to-protected-areas'
  }
];

export default new VueRouter({
  mode: 'history',
  routes,
});
