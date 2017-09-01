Template.Instructors.onRendered(function () {
  //Dropdowns
  $('#autoControl').dropdown();
});

Template.Instructors.helpers({
  instructors() {
    return Meteor.users.find({roles: ['instructor']});
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
  //#Students
  'click .instructor-add': function(event) {
    event.preventDefault();
      $('.ui.modal.instructor-add-modal').modal({
          closable: true,
          transition: 'vertical flip',
          onApprove: function() {
              let jthis = $(this);
              let studentName = jthis.find('input.student-name');
              let studentSurname = jthis.find('input.student-surname');
              let studentEmail = jthis.find('input.student-email');
              let studentPhone = jthis.find('input.student-phone');
              let studentPass = jthis.find('input.student-pass');
              let student = {
                  username: studentName,
                  surname: studentSurname,
                  email: studentEmail,
                  phone: studentPhone,
                  pass: studentPass
              };
              studentName.value = '';
              studentSurname.value = '';
              studentEmail.value = '';
              studentPhone.value = '';
              studentPass.value = '';
          },
          inverted: true
      }).modal('show');
    Meteor.call('addInstructor', instructor, function(err, result) {
      console.log(err);
      console.log(result);
    });
  },
  'click .student-add': function(event) {
    event.preventDefault();
      $('.ui.modal.student-add-modal').modal({
          closable: true,
          transition: 'vertical flip',
          onApprove: function() {
              let jthis = $(this);
              let studentName = jthis.find('input.student-name');
              let studentSurname = jthis.find('input.student-surname');
              let studentEmail = jthis.find('input.student-email');
              let studentPhone = jthis.find('input.student-phone');
              let studentPass = jthis.find('input.student-pass');
              let student = {
                username: studentName,
                surname: studentSurname,
                email: studentEmail,
                phone: studentPhone,
                pass: studentPass
              };
              studentName.value = '';
              studentSurname.value = '';
              studentEmail.value = '';
              studentPhone.value = '';
              studentPass.value = '';
          },
          inverted: true
      }).modal('show');
  }
});