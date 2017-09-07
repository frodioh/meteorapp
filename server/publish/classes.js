Meteor.publish('classes', function(userId) {
  this.ready();
  return Classes.find({});
});