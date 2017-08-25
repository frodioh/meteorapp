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

//Переадресация на главную, если пользователь авторизован
//Иначе на страницу авторизации
FlowRouter.route('/', {
    name: 'index',
    action: function() {
        if(!!this.userId) {
            FlowRouter.go('/home');
        } else {
            FlowRouter.go('/login');
        }
    }
});

//Главная
FlowRouter.route('/home', {
    name: 'home',
    action: function() {
        if(!!this.userId) {
            BlazeLayout.render('MainLayout', {main: 'Home'});
        } else {
            FlowRouter.go('/login');
        }
    }
});

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {
    },
    action: function() {
        if(!!this.userId) {
            FlowRouter.go('/home');
        } else {
            FlowRouter.go('/login');
        }
    }
};