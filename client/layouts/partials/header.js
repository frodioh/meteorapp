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
        if(Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
            return 'Суперадминистратор'
        }
        if(Roles.userIsInRole(Meteor.userId(), 'moderator')) {
            return 'Модератор'
        }
        if(Roles.userIsInRole(Meteor.userId(), 'instructor')) {
            return 'Инструктор'
        }
        if(Roles.userIsInRole(Meteor.userId(), 'student')) {
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