Meteor.publish('information', function(userId) {
  let haveAccess = false;

  if(Roles.userIsInRole(userId, 'superadmin')) {
    haveAccess = true;
  } else if(Roles.userIsInRole(userId, ['superadmin', 'moderator', 'instructor'], ['informationControl'])) {
    haveAccess = true;
  }

  if (haveAccess) {
    this.ready();
    return Information.find({});
  } else {
    this.stop();
  }
});