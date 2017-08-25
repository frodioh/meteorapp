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

// Для маршрута / рендерится шаблон MainLayout
// На место заглушки "main" будет подставлен шаблон Home

FlowRouter.route('/', {
  name: 'index',
  triggersEnter: [function(context, redirect) {
      if(!this.userId) {
        redirect('/login');
      } else {
        redirect('/home');
      }
  }],
  action: function() {
  }
});

FlowRouter.route('/home', {
    name: 'home',
    triggersEnter: [function(context, redirect) {
        if(!this.userId) {
            redirect('/login');
        } else {
            stop();
        }
    }],
    action: function() {
       BlazeLayout.render('MainLayout', {main: 'Home'});
    }
});

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {
    },
    triggersEnter: [function(context, redirect) {
        if(!this.userId) {
            redirect('/login');
        } else {
            redirect('/home');
        }
    }],
    action: function() {
        if(!this.userId) {
            FlowRouter.go('/login');
        } else {
            FlowRouter.go('/home');
        }
    }
};