FlowRouter.route('/video', {
  name: 'video',
  subscriptions: function() {
    this.register('video', Meteor.subscribe('video', Meteor.userId()));
  },
  action: function() {
    let haveAccess = false;
    let userId = Meteor.userId();
    if(Roles.userIsInRole(userId, 'superadmin')) {
      haveAccess = true;
    } else if(Roles.userIsInRole(userId, ['superadmin', 'moderator'], ['videoControl'])) {
      haveAccess = true;
    }
    if(!haveAccess) {
      FlowRouter.go('/login');
    } else {
      BlazeLayout.render('MainLayout', {main: 'Video'});
    }
  }
});