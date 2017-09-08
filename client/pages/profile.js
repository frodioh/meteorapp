Template.Profile.onRendered(function () {
});

Template.Profile.helpers({
  profile() {
    let userId = FlowRouter.getParam("userId");
    return Meteor.users.findOne({_id: userId});
  },
  getEmail() {
    let userId = FlowRouter.getParam("userId");
    let user = Meteor.users.findOne({_id: userId});
    return user.emails[0].address;
  },
  getGroup() {
    let userId = FlowRouter.getParam("userId");
    let user = Meteor.users.findOne({_id: userId});

  },
  dateView(date) {
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleString('ru', options);
  }
});

Template.Profile.events({

});