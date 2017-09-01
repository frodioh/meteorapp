Meteor.publish('groups', function(userId) {
  let haveAccess = false;

  if(Roles.userIsInRole(userId, 'superadmin')) {
    haveAccess = true;
  } else if(Roles.userIsInRole(userId, ['superadmin', 'moderator', 'instructor'], ['studentsControl'])) {
    haveAccess = true;
  }

  if (haveAccess) {
    this.ready();
    return Groups.find({});
  } else {
    this.stop();
  }
});