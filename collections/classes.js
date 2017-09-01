import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

//Создание коллекции
Classes = new Mongo.Collection('classes');

//Определение прав для коллекции
Classes.allow({
    insert: function(userId, doc) {
        return Roles.userIsInRole(userId, 'superadmin');
    },
    remove: function(userId, doc) {
        return Roles.userIsInRole(userId, 'superadmin');
    }
});

//Создание схемы для этой коллекции
ClassesSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Название"
    },
    groups: {
      type: Array
    },
    "groups.$": {
      type: String
    },
    createdAt: {
        type: Date,
        label: "Создан",
        autoValue: function() {
            return new Date();
        }
    }
});

//Привязка схемы к коллекции
Classes.attachSchema(ClassesSchema);