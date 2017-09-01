Template.Information.onRendered(function () {

});

Template.Information.helpers({
  information() {
    return Information.find({});
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

Template.Information.events({
  //#Information
  'click .information-add': function(event) {
    event.preventDefault();
      $('.ui.modal.information-add-modal').modal({
          closable: true,
          transition: 'vertical flip',
          onApprove: function() {
              let jthis = $(this);
              let informationTitle = jthis.find('input.information-title');
              let informationContent = jthis.find('textarea.information-content');
              let information = {
                  title: informationTitle.val(),
                  content: informationContent.val(),
              };
              informationTitle.value = '';
              informationContent.value = '';
              Information.insert(information);
          },
          inverted: true
      }).modal('show');
  }
});