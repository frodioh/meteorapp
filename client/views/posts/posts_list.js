var postsData = [
    {
        title: '"Государство" Платона',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'И ты, Брут!',
        url: 'http://meteor.com'
    },
    {
        title: 'Лорем Ипсум',
        url: 'http://themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});