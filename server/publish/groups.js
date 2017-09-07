Meteor.publish('groups', function(userId) {
  this.ready();
  return Groups.find({});
});