module.exports = {
  page: 'news_detail',
  // layout: 'base',
  pattern: '/post/:id',
  // isAuth: true,
  mainScreen: 'page:news_detail_1',
  screens: [
    {
      id: 'page:news_detail_1',
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
            sectionId: 'ui/breadcrumb',
          },
          {
            sectionId: 'models/post/post-detail'
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
        title: 'Posts',
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
      id: 'ui/breadcrumb',
      sectionComponentType: '',
      section: {
        item: [
          {
            label: '',
            icon: 'home',
            onClickAction: {
              type: 'RoutePush',
              to: '/'
            }
          },
          {
            label: 'Posts',
            icon: '',
            onClickAction: {
              type: 'RoutePush',
              to: '/'
            }
          },
          {
            label: 'post1',
            icon: '',
            onClickAction: null
          }
        ]
      }
    },
    {
      id: 'models/post/post-detail',
      sectionComponentType: '',
      section: {
        headActions: [
          {
            label: 'Update',
            color: 'info',
            variant: 'outlined',
            onClickAction: {
              type: "RoutePush",
              to: '/post/1/update'
            }
          },
          {
            label: 'Delete',
            color: 'danger',
            // variant: '',
            onClickAction: {
              type: "RoutePush",
              to: '/post/1/delete'
            }
          }
        ]
      }
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
