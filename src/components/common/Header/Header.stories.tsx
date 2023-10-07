import BaseComponent from '@/components/Component';
import { id as AppBrandId } from '@/components/common/AppBrand';
import { Mock as AppBrandMock } from '@/components/common/AppBrand/AppBrand.stories';
import { Mock as AppTitleMock } from '@/components/common/AppTitle/AppTitle.stories';
import { Mock as UserMenuMock } from '@/components/model/UserMenu/UserMenu.stories';
import { Mock as SpacerMock } from '@/components/ui/Spacer/Spacer.stories';

import { Header } from './';

// ______________________________________________________
//

const app_name = 'Ghost Admin';

const mock = {
  components: [
    AppBrandMock,
    AppTitleMock,
    {
      type: 'ui/spacer',
      props: {},
    },
    {
      type: 'model/user_menu',
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

const children = mock.components.map(BaseComponent);
// ______________________________________________________
//

export default {
  title: Header.id,
  component: Header,
};

export const Default = { args: { ...mock, children } };
