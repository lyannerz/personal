import Vue from 'vue';
import Router from 'vue-router';

import about from '@/views/about';
import landing from '@/views/landing';
import portfolio from '@/views/portfolio';

import kleinerPerkins from '@/views/entry/kleinerPerkins';
import tutorHub from '@/views/entry/tutorHub';
import vinegarEntry from '@/views/entry/vinegarEntry';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: landing,
    },
    {
      path: '/portfolio',
      component: portfolio,
    },
    {
      path: '/portfolio/kleinerperkins',
      component: kleinerPerkins,
    },
    {
      path: '/portfolio/tutorhub',
      component: tutorHub,
    },
    {
      path: '/portfolio/vinegar',
      component: vinegarEntry,
    },
    {
      path: '/about',
      component: about,
    },
    {
      path: '*',
      redirect: '/',
    }
  ],
});
