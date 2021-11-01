import BaseComponent from '@/components/Component';

import { Header } from './';

// ______________________________________________________
//

const app_name = 'Ghost Admin';

const mock = {
  components: [
    {
      type: 'common/app_brand',
      props: {
        images: './logo192.png',
      },
    },
    {
      type: 'common/app_title',
      title: app_name,
    },
    {
      type: 'ui/spacer',
    },
    {
      type: 'model/app_user_menu',
      props: {
        user: {
          id: 1,
          name: 'null',
        },
        navs: [
          {
            icon: 'fas fa-sign-out-alt',
            label: 'ログアウトする',
            onClick: 'route:/logout',
          },
          {
            icon: 'fas fa-unlock',
            label: 'パスワードを変更する',
            onClick: 'route:/password/reset',
          },
        ],
      },
    },
  ],
};
// ______________________________________________________
//

export default {
  title: Header.id,
  component: Header,
};

export const Default = { args: { ...mock } };
