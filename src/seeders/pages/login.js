module.exports = {
  page: 'login',
  // layout: 'base',
  pattern: '/login',
  // isAuth: true,
  mainScreen: 'page:login',
  screens: [
    {
      id: 'page:login',
      screenProperties: {},
      screen: {
        type: 'ModalLayout',
        contents: [
          {
            sectionId: 'ui/app-brand',
          },
          {
            sectionId: 'ui/form-login',
          },
          {
            sectionId: 'ui/login-actions',
          },
        ],
      },
    },
  ],
  sections: [
    {
      id: 'ui/app-brand',
      sectionComponentType: '',
      section: {
        title: 'Dashboard',
      },
    },
    {
      id: 'ui/form-login'
    },
    {
      id: 'ui/login-actions',
      navs: [
        {
          label: 'パスワードをお忘れですか？',
          onClickAction: {
            type: 'RoutePush',
            to: '/password/forget/'
          }
        }
      ]
    }
  ],
};
