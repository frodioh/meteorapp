//Для маршрута / рендерится шаблон MainLayout
//На место заглушки "main" будет подставлен шаблон Home

FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('MainLayout', {main: 'Home'});
    }
});

//Для маршрута /test рендерится шаблон MainLayout
//На место заглушки "main" будет подставлен шаблон Test

FlowRouter.route('/test', {
    name: 'test',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Test'});
    }
})