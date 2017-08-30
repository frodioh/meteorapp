
Template['atForm'].helpers({
    atClass: function() {
        if(AccountsTemplates.getState()=='signUp') {
            return 'register-form';
        } else {
            return 'auth-form';
        }
    },
    isSignUp: function() {
        if(AccountsTemplates.getState() == 'signUp') {
            return true;
        } else {
            return false;
        }
    },
    isSignIn: function() {
        if(AccountsTemplates.getState() == 'signIn') {
            return true;
        } else {
            return false;
        }
    }
});

Template['atForm'].onRendered(function () {
    this.$('.at-select-input select').dropdown();
    $('.auth-page__inner')
        .transition('pulse')
    ;
});