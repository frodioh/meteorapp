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
    return Groups.find({});
  }
});

Template.Students.events({
  'click .group-add': function(event) {
    event.preventDefault();
    $('.group-add + .ui.modal').modal({
      inverted: true
    }).modal('show');
  }
});