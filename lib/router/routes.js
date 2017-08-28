//Маршрутизация

//Авторизация
AccountsTemplates.configureRoute('signIn', {
    layoutType: 'blaze',
    name: 'signin',
    path: '/login',
    template: 'AuthLogin',
    layoutTemplate: 'AuthLayout',
    contentRegion: 'main',
    redirect: '/home'
});

//Регистрация
AccountsTemplates.configureRoute('signUp', {
    name: 'join',
    path: '/join',
    template: 'AuthLogin',
    layoutTemplate: 'AuthLayout',
    contentRegion: 'main',
    redirect: '/home'
});

//Перенаправления с корня на страницу авторизации
//Или на главную страницу. В зависимости от наличия авторизованного пользователя
FlowRouter.route('/', {
  name: 'index',
  action: function() {
      if(!Meteor.userId()) {
          FlowRouter.go('/login');
      } else {
          FlowRouter.go('/home');
      }
  }
});

//Перенаправление с главной страницы на страницу авторизации
//Если пользователь неавторизован
FlowRouter.route('/home', {
    name: 'home',
    action: function() {
        if(!Meteor.userId()) {
            FlowRouter.go('/login');
        } else {
            BlazeLayout.render('MainLayout', {main: 'Home'});
        }
    }
});

FlowRouter.notFound = {
    //Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {
    },
    action: function() {
        if(!Meteor.userId()) {
            FlowRouter.go('/login');
        } else {
            FlowRouter.go('/home');
        }
    }
};