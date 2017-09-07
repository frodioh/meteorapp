//Функция, которая срабатывает, при запуске приложения
Meteor.startup(function() {
    if(!Accounts.findUserByEmail('admin@admin.com')) {
      let adminId = Random.id();
      Meteor.users.insert({
        _id: adminId,
        name: 'admin',
        emails: [
          { address: 'admin@admin.com', verified: true }
        ],
        createdAt: new Date(),
        profile: {
        },
        services: {
        }
      });
      Accounts.setPassword(adminId, 'admin');
      Roles.addUsersToRoles(adminId, 'superadmin', Roles.GLOBAL_GROUP);
    }
});