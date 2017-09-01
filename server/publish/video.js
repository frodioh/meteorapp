Meteor.publish('video', function(userId) {
  let haveAccess = false;

  if(Roles.userIsInRole(userId, 'superadmin')) {
    haveAccess = true;
  } else if(Roles.userIsInRole(userId, ['superadmin', 'moderator', 'instructor'], ['videoControl'])) {
    haveAccess = true;
  }

  if (haveAccess) {
    this.ready();
    return Video.find({});
  } else {
    this.stop();
  }
});