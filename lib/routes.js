//Маршрутизация

//Для маршрута / рендерится шаблон MainLayout
//На место заглушки "main" будет подставлен шаблон Home

FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('MainLayout', {main: 'Home'});
    }
});

//Для маршрута /recipe-book рендерится шаблон MainLayout
//На место заглушки "main" будет подставлен шаблон Recipes

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
})