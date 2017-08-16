if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Диоген',
        url: 'http://sachagreif.com/introducing-telescope/',
        description: 'Диоген синопский - киник',
        flagged: false
    });

    Posts.insert({
        title: 'Лорем ипсум когито ерго сум',
        url: 'http://meteor.com',
        description: 'Рыбный текст - это очень хорошо',
        flagged: false
    });

    Posts.insert({
        title: 'И ты, Брут!',
        url: 'http://themeteorbook.com',
        description: 'И я, Цезарь..',
        flagged: false
    });

    Posts.insert({
        title: 'Метеор - так себе фреймворк',
        url: 'http://yandex.ru',
        description: 'Реактивность - полный бред',
        flagged: true
    })
}