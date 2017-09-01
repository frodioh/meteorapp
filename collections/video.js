import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

//Создание коллекции
Video = new Mongo.Collection('video');

//Определение прав для коллекции
Video.allow({
    insert: function(userId, doc) {
        return Roles.userIsInRole(userId, 'superadmin');
    },
    remove: function(userId, doc) {
        return Roles.userIsInRole(userId, 'superadmin');
    }
});

//Создание схемы для этой коллекции
VideoSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Заголовок"
    },
    link: {
        type: String,
        label: "Ссылка"
    },
    createdAt: {
        type: Date,
        label: "Добавлено",
        autoValue: function() {
            return new Date();
        }
    }
});

//Привязка схемы к коллекции
Video.attachSchema(VideoSchema);