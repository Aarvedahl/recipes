export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
       path: 'food',  // path for our page
       data: { // custom menu declaration
         menu: {
           title: 'Food Page', // menu title
           icon: 'ion-android-home', // menu icon
           pathMatch: 'prefix', // use it if item children not displayed in menu
           selected: false,
           expanded: false,
           order: 0
         }
       }
     },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
