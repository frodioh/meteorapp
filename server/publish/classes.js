Meteor.publish('classes', function(userId) {
  let haveAccess = false;

  if(Roles.userIsInRole(userId, 'superadmin')) {
    haveAccess = true;
  } else if(Roles.userIsInRole(userId, ['superadmin', 'moderator', 'instructor'], ['studentsControl'])) {
    haveAccess = true;
  }

  if (haveAccess) {
    this.ready();
    return Classes.find({});
  } else {
    this.stop();
  }
});