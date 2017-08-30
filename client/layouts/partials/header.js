Meteor.subscribe('userData');

// Template.Header.onCreated(function() {
//     let self = this;
//     self.autorun(function() {
//         self.subscribe('Meteor.users.one', Meteor.userId());
//     });
// });

Template.Header.helpers({
    user() {
        return Meteor.user();
    },
    isStudent() {
        return Roles.userIsInRole(Meteor.userId(), 'student');
    },
    userTitle() {
        if(Meteor.user().superadmin) {
            return 'Суперадминистратор'
        }
        if(Meteor.user().moderator) {
            return 'Модератор'
        }
        if(Meteor.user().instructor) {
            return 'Инструктор'
        }
        if(Meteor.user().student) {
            return 'Курсант автошколы'
        }
    }
});

Template.Header.events({
    'click .user-block__logout': function(event) {
        event.preventDefault();
        AccountsTemplates.logout();
        FlowRouter.go('/');
    }
});