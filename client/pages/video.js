Template.Video.onRendered(function () {

});

Template.Video.helpers({
  video() {
    return Video.find({});
  },
  dateView(date) {
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleString('ru', options);
  }
});

Template.Video.events({
  //#Video
  'click .video-add': function(event) {
    event.preventDefault();
      $('.ui.modal.video-add-modal').modal({
          closable: true,
          transition: 'vertical flip',
          onApprove: function() {
              function validateYouTubeUrl(url)
              {
                  if (url) {
                      let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
                      let match = url.match(regExp);
                      if (match && match[2].length === 11) {
                          var resultUrl = 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0';
                          return resultUrl;
                      } else {
                          console.log('Неправильный url');
                          return false;
                      }
                  }
              }
              let jthis = $(this);
              let videoTitle = jthis.find('input.video-title');
              let videoLink = jthis.find('input.video-link');
              let video = {
                  title: videoTitle.val(),
                  link: validateYouTubeUrl(videoLink.val())
              };
              videoTitle.value = '';
              videoLink.value = '';
              Video.insert(video);
          },
          inverted: true
      }).modal('show');
  }
});