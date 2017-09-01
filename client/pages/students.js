Template.Students.onRendered(function () {
  //Dropdowns
  $('#groupControl').dropdown();
  $('.group-add-modal .ui.dropdown').dropdown({
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
  dateView(date) {
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return date.toLocaleString('ru', options);
  },
  countStudents(students) {
    console.log(students.fetch());
    return students.fetch();
  }
});

Template.Students.events({
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
        console.log(studentsIds);
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
    Meteor.call('acceptStudent', this._id);
  }
});