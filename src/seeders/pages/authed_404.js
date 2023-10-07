module.exports = {
  page: 'dashboard',
  // layout: 'base',
  pattern: '/',
  // isAuth: true,
  mainScreen: 'page:dashboard',
  screens: [
    {
      id: 'page:dashboard',
      screenProperties: {},
      screen: {
        type: 'BasicDashboardLayout',
        header: [
          {
            sectionId: 'ui/app-bar',
          },
          {
            sectionId: 'ui/spacer',
          },
          {
            sectionId: 'models/user/user-nav',
          },
        ],
        sidebar: [
          {
            sectionId: 'ui/app-brand',
          },
          {
            sectionId: 'ui/nav-home',
          },
          {
            sectionId: 'ui/sidebar-navs',
          },
        ],
        main: [
          {
            sectionId: 'ui/page',
          },
          {
            sectionId: 'ui/copyright',
          },
        ],
      },
    },
  ],
  sections: [
    {
      id: 'ui/app-bar',
      sectionComponentType: '',
      section: {
        title: 'Dashboard',
      },
    },
    {
      id: 'ui/spacer',
      sectionComponentType: '',
      section: {
        sx: {
          flexGrow: 1,
        },
      },
    },
    {
      id: 'models/user/user-nav',
      sectionComponentType: '',
      section: {
        name: 'Oka',
        nav: [
          {
            icon: '',
            title: 'パスワード変更',
            onClickAction: {
              type: 'RoutePush',
              to: '/password/reset/',
            },
          },
          {
            icon: '',
            title: '',
            onClickAction: {
              type: 'Logout',
            },
          },
        ],
      },
    },
    {
      id: 'ui/app-brand',
      sectionComponentType: '',
      section: {
        image: '',
        title: 'Ghost Admin',
        href: '/',
      },
    },
    {
      id: 'ui/nav-home',
      sectionComponentType: '',
      section: {
        icon: '',
        label: '',
        href: 'https://mui.com',
      },
    },
    {
      id: 'ui/sidebar-navs',
      sectionComponentType: '',
      section: {
        navs: [
          {
            icon: '',
            label: 'Dashboard',
            pattern: '/',
            onClickAction: {
              type: 'RoutePush',
              to: '/',
            },
          },
          {
            icon: '',
            label: 'Post',
            pattern: '/post',
            onClickAction: {
              type: 'RoutePush',
              to: '/post',
            },
          },
        ],
      },
    },
    {
      id: 'ui/dashboard-menu',
      sectionComponentType: '',
      section: {
        icon: '',
        title: 'Welcome Ghost Admin',
        description: 'this is based Server-Driven UI.',
        link: {
          label: '',
          onClickAction: {
            type: 'RoutePush',
            to: '/post',
          },
        },
      },
    },
    {
      id: 'ui/copyright',
      sectionComponentType: '',
      section: {
        siteName: '',
        siteLink: 'https://mui.com',
      },
    },
  ],
};
