Accounts.onCreateUser((options, user) => {
  if(options.profile.isStudent) {
      user._id = Random.id();
      user.name = options.profile.name;
      user.surname = options.profile.surname;
      user.phone = options.profile.phone;
      user.student = {
        class: options.profile.class,
        group: options.profile.group,
        lessons: 0,
        totalLessons: 28,
        accepted: false,
        isArchive: false
      };
      user.roles = { "__global_roles__" : [ "student"] };
      Roles.addUsersToRoles(user._id, 'student', Roles.GLOBAL_GROUP);
  }
  return user;
});
