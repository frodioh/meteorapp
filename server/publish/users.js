Meteor.publish('userData', function () {
    userId = Meteor.userId();
    if (userId) {
        // Select only the users that match the array of IDs passed in
        let selector = {
            _id: userId
        };
        // Only return some fields
        let options = {
            fields: {
                createdAt: 1,
                name: 1,
                surname: 1,
                emails: 1,
                phone: 1
            }
        };

        if(Roles.userIsInRole(userId, 'student')) {
            options.fields.student = 1;
        } else if(Roles.userIsInRole(userId, 'instructor')) {
            options.fields.instructor = 1;
        } else if(Roles.userIsInRole(userId, 'moderator')) {
            options.fields.moderator = 1;
        } else if(Roles.userIsInRole(userId, 'superadmin')) {
            options.fields.superadmin = 1;
        }

        return Meteor.users.find(selector, options);
    } else {
        this.ready();
    }

});