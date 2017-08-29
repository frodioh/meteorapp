// Generate user initials
// Accounts.onCreateUser((options, user) => {
//     const { first_name, last_name } = user.services.facebook;
//     user.initials = first_name[0].toUpperCase() + last_name[0].toUpperCase();
//     // Don't forget to return the new user object at the end!
//     return user;
// });
// Meteor.publish('users', function () {
//     if (this.userId === 'superuser') {
//         return SecretData.find();
//     } else {
//         // Declare that no data is being published. If you leave this line out,
//         // Meteor will never consider the subscription ready because it thinks
//         // you're using the `added/changed/removed` interface where you have to
//         // explicitly call `this.ready`.
//         return [];
//     }
// });