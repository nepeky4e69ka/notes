import { createRouter, createWebHistory } from 'vue-router';

export enum RouteNames {
  NOTES = 'notes',
  NOTE = 'note',
  ADD = 'add',
}

export const RouteTitles: {
  [key in RouteNames]: string;
} = {
  [RouteNames.NOTES]: 'Заметки',
  [RouteNames.NOTE]: 'Заметка',
  [RouteNames.ADD]: 'Создать заметку',
};

const routes = [
  {
    path: '/',
    name: RouteNames.NOTES,
    component: () => import('@/components/pages/Notes.vue'),
  },
  {
    path: '/add',
    name: RouteNames.ADD,
    component: () => import('@/components/pages/Add.vue'),
  },
  {
    path: '/todo/:slug',
    name: RouteNames.NOTE,
    component: () => import('@/components/pages/Note.vue'),
  },
];

const history = createWebHistory();
export const router = createRouter({
  history,
  routes,
});
