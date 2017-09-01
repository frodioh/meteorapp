Template.Students.onRendered(function () {
  //Dropdowns
  $('#groupControl').dropdown();
  $('.group-add-modal .ui.dropdown').dropdown({
    allowAdditions: true
  });
  $('.class-add-modal .ui.dropdown').dropdown({
      allowAdditions: true
  });

  //Tabs
  $('.page__tabs .item').tab();
});

Template.Students.helpers({
  students() {
    return Meteor.users.find({roles: ['student']});
  },
  groups() {
    return Groups.find({});
  },
  classes() {
    return Classes.find({});
  },
  dateView(date) {
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return date.toLocaleString('ru', options);
  },
  countStudents(students) {
    return students.length;
  },
  countGroups(groups) {
    return groups.length;
  }
});

Template.Students.events({
  //#Classes
  'click .class-add': function(event) {
      event.preventDefault();
      $('.ui.modal.class-add-modal').modal({
          closable: true,
          transition: 'vertical flip',
          onApprove: function() {
              let jthis = $(this);
              let classNameInput = jthis.find('input.class-name');
              let className = classNameInput.val();
              let groups = jthis.find('.dropdown .menu .item.active');
              let groupsIds = [];
              groups.each(function() {
                  groupsIds.push(this.getAttribute('data-value'));
              });
              classNameInput.value = '';
              Classes.insert({name: className, groups: groupsIds});
          },
          inverted: true
      }).modal('show');
  },
  //#Groups
  'click .group-add': function(event) {
    event.preventDefault();
    $('.ui.modal.group-add-modal').modal({
      closable: true,
      transition: 'vertical flip',
      onApprove: function() {
        let jthis = $(this);
        let groupNameInput = jthis.find('input.group-name');
        let groupName = groupNameInput.val();
        let students = jthis.find('.dropdown .menu .item.active');
        let studentsIds = [];
        students.each(function() {
          studentsIds.push(this.getAttribute('data-value'));
        });
        groupNameInput.value = '';
        Groups.insert({name: groupName, students: studentsIds});
      },
      inverted: true
    }).modal('show');
  },
  'click .group-remove': function(event) {
    event.preventDefault();
    Groups.remove({_id: this._id}, function() {
      console.log('Удаление прошло успешно!');
    });
  },
  //#Students
  'click .students-accept': function(event) {
    event.preventDefault();
    Meteor.call('acceptStudent', this._id, function(err, result) {
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