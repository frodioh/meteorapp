//Профиль
FlowRouter.route('/profile/:userId', {
  name: 'profile',
  subscriptions: function(params) {
    console.log('lets profile');
    this.register('profile', Meteor.subscribe('profile', params.userId));
  },
  action: function(params) {
      if(Roles.userIsInRole(Meteor.userId(), ['superadmin', 'moderator', 'instructor']) || (Meteor.userId() === params.userId)) {
        BlazeLayout.render('MainLayout', {main: 'Profile'});
      } else {
        FlowRouter.go('/home');
      }
  }
});