import { Default as HeaderMock } from '@/components/common/Header/Header.stories';

import navs from './_sidebar-navs';

module.exports = {
  components: [
    HeaderMock,
    {
      type: 'common/sidebar',
      props: {
        navs,
      },
    },
    {
      type: 'common/main',
      props: {},
    },
  ],
};
