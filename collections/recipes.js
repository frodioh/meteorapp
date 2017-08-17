import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

//Создание коллекции
Recipes = new Mongo.Collection('recipes');

//Определение прав для коллекции
Recipes.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});

//Создание схемы для этой коллекции
RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Имя"
    },
    desc: {
        type: String,
        label: "Описание"
    },
    author: {
        type: String,
        label: "Автор",
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Создан",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

//Привязка схемы к коллекции
Recipes.attachSchema(RecipeSchema);