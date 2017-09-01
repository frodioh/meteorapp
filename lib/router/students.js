FlowRouter.route('/students', {
  name: 'students',
  subscriptions: function() {
    this.register('students', Meteor.subscribe('students', Meteor.userId()));
    this.register('groups', Meteor.subscribe('groups', Meteor.userId()));
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
      BlazeLayout.render('MainLayout', {main: 'Students'});
    }
  }
});