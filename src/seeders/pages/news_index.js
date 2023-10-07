module.exports = {
  page: 'news_index',
  // layout: 'base',
  pattern: '/post',
  // isAuth: true,
  mainScreen: 'page:news_index',
  screens: [
    {
      id: 'page:news_index',
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
            sectionId: 'models/post/post-filter',
          },
          {
            sectionId: 'models/post/post-list'
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
      id: 'models/post/post-filter',
      sectionComponentType: '',
      section: {
        fields: [],
        buttons: [
          {
            icon: '',
            label: '',
            props: {
              color: 'primary',
              type: 'button'
            },
            onClickAction: {
              type: 'ResetFilter'
            }
          },
          {
            icon: '',
            label: '',
            color: 'primary',
            type: 'submit',
          }
        ],
        onSubmitAction: {
          method: 'GET',
          path: '/post'
        }
      },
    },
    {
      id: 'models/post/post-list',
      sectionComponentType: '',
      section: {
        fields: ['title', 'body', 'actions'],
        item: [
          {
            title: 'post1',
            body: 'example...',
            actions: [
              {
                label: '詳細',
                onClickAction: {
                  type: 'RoutePush',
                  to: '/post/1'
                }
              }
            ]
          },
          {
            title: 'post2',
            body: 'example...',
            actions: [
              {
                label: '詳細',
                onClickAction: {
                  type: 'RoutePush',
                  to: '/post/2'
                }
              }
            ]
          },
          {
            title: 'post3',
            body: 'example...',
            actions: [
              {
                label: '詳細',
                onClickAction: {
                  type: 'RoutePush',
                  to: '/post/3'
                }
              }
            ]
          },
          {
            title: 'post4',
            body: 'example...',
            actions: [
              {
                label: '詳細',
                onClickAction: {
                  type: 'RoutePush',
                  to: '/post/4'
                }
              }
            ]
          },
        ],
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
