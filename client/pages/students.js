Meteor.subscribe('students', Meteor.userId());
Meteor.subscribe('groups', Meteor.userId());

Template.Students.onRendered(function () {
  //Dropdowns
  this.$('#groupControl').dropdown();

  //Tabs
  $('.page__tabs .item').tab();
});

Template.Students.helpers({
  students() {
    return Meteor.users.find({roles: ['student']});
  },
  groups() {
    return Mongo.Groups.find();
  }
});