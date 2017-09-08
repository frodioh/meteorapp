Meteor.publish('profile', function(userId) {
  let haveAccess = false;
  if(Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
    haveAccess = true;
  } else if(Roles.userIsInRole(Meteor.userId(), ['superadmin', 'moderator', 'instructor'], ['studentsControl'])) {
    haveAccess = true;
  } else if(Meteor.userId() === userId) {
    haveAccess = true;
  }

  if (haveAccess) {
    let selector = {
      "_id": userId,
      "roles.__global_roles__" : [ "student" ]
    };
    let options = {
        fields: {
            createdAt: 1,
            name: 1,
            surname: 1,
            emails: 1,
            phone: 1
        }
    };
    if(Roles.userIsInRole(userId, 'student')) {
        options.fields.student = 1;
    } else if(Roles.userIsInRole(userId, 'instructor')) {
        options.fields.instructor = 1;
    } else if(Roles.userIsInRole(userId, 'moderator')) {
        options.fields.moderator = 1;
    }
    this.ready();
    return Meteor.users.find(selector, options);
  } else {
    this.stop();
  }
});