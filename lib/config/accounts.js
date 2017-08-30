AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: false,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
     onSubmitHook: function() {
         $('.auth-page__inner')
             .transition('fade')
         ;
     },
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,
});

AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'isStudent',
    type: 'hidden',
    template: 'atHiddenStudentInput'
});
AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    placeholder: 'Имя',
    required: true,
    minLength: 1,
    errStr: 'Введите ваше имя'
});
AccountsTemplates.addField({
    _id: 'surname',
    type: 'text',
    placeholder: 'Фамилия',
    required: true,
    minLength: 1,
    errStr: 'Введите вашу фамилию'
});
AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    placeholder: 'Логин (электронная почта)',
    required: true,
    minLength: 6,
    re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errStr: 'Введите адрес электронной почты'
});
AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    placeholder: 'Телефон',
    displayName: 'Телефон',
    required: true,
    re: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
    errStr: 'Введите номер телефона',
});
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    placeholder: 'Пароль',
    required: true,
    minLength: 6,
    errStr: 'Минимальная длина пароля - 6 символов'
});
AccountsTemplates.addField({
    _id: 'password_again',
    type: 'password',
    placeholder: 'Пароль ещё раз',
    required: true,
    minLength: 6,
    errStr: 'Минимальная длина пароля - 6 символов'
});
AccountsTemplates.addField({
    _id: "class",
    type: "select",
    displayName: "Выберите класс",
    select: [
        {
            text: "банан",
            value: "1",
        },
        {
            text: "вишня",
            value: "2",
        },
    ],
});
AccountsTemplates.addField({
    _id: 'group',
    type: 'text',
    placeholder: 'Номер группы',
    required: true,
    minLength: 2,
    errStr: 'Введите номер вашей группы'
});
AccountsTemplates.addField({
    _id: 'agreement',
    type: 'checkbox',
    displayName: 'Согласен на обработку персональных данных» - ниже пояснение «Ставя отметку, я даю свое согласие на обработку моих персональных данных в соответствии с законом №152-ФЗ «О персональных данных» от 27.07.2006 и принимаю условия',
    required: true,
    errStr: ''
});