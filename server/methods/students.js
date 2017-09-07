Meteor.methods({
  acceptStudent(userId) {
    if(Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
      if(Roles.userIsInRole(userId, 'student')) {
        Meteor.users.update({_id: userId}, {$set: {"student.accepted": true}});
      }
      return true;
    } else {
      return false;
    }
  },
  addStudent(student) {
      if(Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
          let studentId = Random.id();
          Meteor.users.insert({
              _id: studentId,
              name: student.name,
              surname: student.surname,
              emails: [
                  { address: student.email, verified: true }
              ],
              createdAt: new Date(),
              student: {
                  lessons: 0,
                  totalLessons: 28,
                  accepted: true,
                  isArchive: false
              },
              profile: {
              },
              services: {
              }
          });
          Accounts.setPassword(studentId, student.pass);
          Roles.addUsersToRoles(studentId, 'student', Roles.GLOBAL_GROUP);
          return true;
      } else {
          return false;
      }
  }
});