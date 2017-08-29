Template.Header.helpers({
    user() {
        return Meteor.user()
    }
});

Template.Header.events({
    'click .user-block__logout': function(event) {
        event.preventDefault();
        AccountsTemplates.logout();
        FlowRouter.go('/');
    }
});