import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

//Создание коллекции
Information = new Mongo.Collection('information');

//Определение прав для коллекции
Information.allow({
    insert: function(userId, doc) {
        return Roles.userIsInRole(userId, 'superadmin');
    },
    remove: function(userId, doc) {
        return Roles.userIsInRole(userId, 'superadmin');
    }
});

//Создание схемы для этой коллекции
InformationSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Заголовок"
    },
    content: {
        type: String,
        label: "Содержимое"
    },
    createdAt: {
        type: Date,
        label: "Создана",
        autoValue: function() {
            return new Date();
        }
    }
});

//Привязка схемы к коллекции
Information.attachSchema(InformationSchema);