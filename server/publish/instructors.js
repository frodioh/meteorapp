Meteor.publish('instructors', function(userId) {
  let haveAccess = false;

  if(Roles.userIsInRole(userId, 'superadmin')) {
    haveAccess = true;
  } else if(Roles.userIsInRole(userId, ['superadmin', 'moderator', 'instructor'], ['instructorsControl'])) {
    haveAccess = true;
  }

  if (haveAccess) {
    let selector = {
      roles: ['instructor']
    };
    this.ready();
    return Meteor.users.find(selector);
  } else {
    this.stop();
  }
});