
Template['atForm'].helpers({
    atClass: function() {
        if(AccountsTemplates.getState()=='signUp') {
            return 'register-form';
        } else {
            return 'auth-form';
        }
    }
});

Template['atForm'].onRendered(function () {
    this.$('.at-select-input select').dropdown();
    $('.auth-page__inner')
        .transition('pulse')
    ;
});