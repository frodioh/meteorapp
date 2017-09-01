FlowRouter.route('/instructors', {
  name: 'instructors',
  subscriptions: function() {
    this.register('instructors', Meteor.subscribe('instructors', Meteor.userId()));
  },
  action: function() {
    let haveAccess = false;
    let userId = Meteor.userId();
    if(Roles.userIsInRole(userId, 'superadmin')) {
      haveAccess = true;
    } else if(Roles.userIsInRole(userId, ['superadmin', 'moderator'], ['studentsControl', 'groupsControl'])) {
      haveAccess = true;
    }
    if(!haveAccess) {
      FlowRouter.go('/login');
    } else {
      BlazeLayout.render('MainLayout', {main: 'Instructors'});
    }
  }
});