import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { components } from '@/utils/components';
import { router } from '@/utils';
import App from '@/components/App.vue';
import './style/index.scss';

createApp(App).use(router).use(components).use(createPinia()).mount('#app');
