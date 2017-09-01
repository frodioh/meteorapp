// Meteor.methods({
//   deleteUser: function (targetUserId, group) {
//     if (!Meteor.user() ||
//       !Roles.userIsInRole(loggedInUser,
//         ['manage-users', 'support-staff'], group)) {
//       throw new Meteor.Error(403, "Access denied")
//     }
//
//     // remove permissions for target group
//     Roles.setUserRoles(targetUserId, [], group)
//
//     // do other actions required when a user is removed...
//   }
// });