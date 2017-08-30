Meteor.publish('userData', function () {
    if (this.userId) {
        userId = this.userId;
        // Select only the users that match the array of IDs passed in
        let selector = {
            _id: userId
        };
        // Only return some fields
        let options = {
            fields: {
                createdAt: 1,
                username: 1,
                surname: 1,
                emails: 1,
                phone: 1
            }
        };
        options.fields.student = 1;

        if(Roles.userIsInRole(userId, 'student')) {
        } else if(Roles.userIsInRole(userId, 'instructor')) {
            options.fields.instructor = 1;
        } else if(Roles.userIsInRole(userId, 'moderator')) {
            options.fields.moderator = 1;
        } else if(Roles.userIsInRole(userId, 'superadmin')) {
            options.fields.superadmin = 1;
        }

        console.log(Meteor.users.find(selector, options));

        return Meteor.users.find(selector, options);
    } else {
        this.ready();
    }

});