Meteor.methods({
  acceptStudent(userId) {
    if(Roles.userIsInRole(this.userId, 'superadmin')) {
      if(Roles.userIsInRole(userId, 'students')) {
        Meteor.users.update({_id: userId}, {$set: {student: {accepted: true}}});
      }
      return true;
    } else {
      return false;
    }
  }
});