Template.Instructors.onRendered(function () {
  //Dropdowns
  $('#autoControl').dropdown();
});

Template.Instructors.helpers({
  instructors() {
    return Meteor.users.find({roles: {"__global_roles__": ['instructor']}});
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

Template.Instructors.events({
  //#Instructors
  'click .instructor-add': function(event) {
    event.preventDefault();
      $('.ui.modal.instructor-add-modal').modal({
          closable: true,
          transition: 'vertical flip',
          onApprove: function() {
              let jthis = $(this);
              let instructorName = jthis.find('input.instructor-name');
              let instructorSurname = jthis.find('input.instructor-surname');
              let instructorEmail = jthis.find('input.instructor-email');
              let instructorPhone = jthis.find('input.instructor-phone');
              let instructorAuto = jthis.find('input.instructor-auto');
              let instructorPass = jthis.find('input.instructor-pass');
              let instructor = {
                  username: instructorName.val(),
                  surname: instructorSurname.val(),
                  email: instructorEmail.val(),
                  phone: instructorPhone.val(),
                  auto: instructorAuto.val(),
                  pass: instructorPass.val()
              };
              instructorName.value = '';
              instructorSurname.value = '';
              instructorEmail.value = '';
              instructorPhone.value = '';
              instructorAuto.value = '';
              instructorPass.value = '';
              Meteor.call('addInstructor', instructor, function(err, result) {
                  console.log(err);
                  console.log(result);
              });
          },
          inverted: true
      }).modal('show');
  }
});