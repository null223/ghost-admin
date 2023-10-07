import BaseComponent from '@/components/Component';

import { Sidebar } from './';

// ______________________________________________________
//
const mock = {
  components: [],
  navs: [
    {
      icon: 'fas fa-home',
      label: 'ダッシュボード',
      route: '/',
    },
    {
      icon: 'fas fa-rss',
      label: 'お知らせ管理',
      route: '/news',
    },
  ],
};

const children = mock.components.map(BaseComponent);

// ______________________________________________________
//
export default {
  title: Sidebar.id,
  component: Sidebar,
};

export const Default = { args: { ...mock, children } };
