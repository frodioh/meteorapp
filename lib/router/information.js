FlowRouter.route('/information', {
  name: 'information',
  subscriptions: function() {
    this.register('information', Meteor.subscribe('information', Meteor.userId()));
  },
  action: function() {
    let haveAccess = false;
    let userId = Meteor.userId();
    if(Roles.userIsInRole(userId, 'superadmin')) {
      haveAccess = true;
    } else if(Roles.userIsInRole(userId, ['superadmin', 'moderator'], ['informationControl'])) {
      haveAccess = true;
    }
    if(!haveAccess) {
      FlowRouter.go('/login');
    } else {
      BlazeLayout.render('MainLayout', {main: 'Information'});
    }
  }
});