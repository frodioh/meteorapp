import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

//Создание коллекции
Groups = new Mongo.Collection('groups');

//Определение прав для коллекции
Groups.allow({
    insert: function(userId, doc) {
        return Roles.userIsInRole('superadmin');
    }
});

// //Схема для ингредиентов
// IngredientSchema = new SimpleSchema({
//     name: {
//         type: String,
//         label: "Ингредиент"
//     },
//     amount: {
//         type: String,
//         label: "Количество"
//     }
// });

//Создание схемы для этой коллекции
GroupsSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Номер"
    },
    studentsCount: {
      type: Number,
      label: "Количество студентов",
      defaultValue: 0
    },
    students: {
      type: [String]
    },
    isArchive: {
        type: Boolean,
        defaultValue: false,
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
Groups.attachSchema(GroupsSchema);