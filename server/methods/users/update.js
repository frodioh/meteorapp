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
  addStudent(userId) {
    //todo add adding students
  }
});