// Meteor.publish('user', function () {
//     let currentUser = Mongo.users.findOne({_id: this.userId});
//     if(currentUser.type = 'student') {
//         return {
//             name: currentUser.username,
//             surname: currentUser.surname,
//         }
//     };
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