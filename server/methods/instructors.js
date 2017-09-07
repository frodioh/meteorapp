Meteor.methods({
  updateInstructor(userId) {
    if(Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
      if(Roles.userIsInRole(userId, 'student')) {
        Meteor.users.update({_id: userId}, {$set: {"student.accepted": true}});
      }
      return true;
    } else {
      return false;
    }
  },
  addInstructor(instructor) {
    if(Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
        let instructorId = Random.id();
        Meteor.users.insert({
            _id: instructorId,
            username: instructor.username,
            surname: instructor.surname,
            emails: [
                { address: instructor.email, verified: true }
            ],
            createdAt: new Date(),
            instructor: {
              auto: instructor.auto
            },
            profile: {
            },
            services: {
            }
        });
        Accounts.setPassword(instructorId, instructor.pass);
        Roles.addUsersToRoles(instructorId, 'instructor', Roles.GLOBAL_GROUP);
        return true;
    } else {
        return false;
    }
  }
});