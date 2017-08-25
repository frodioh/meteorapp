AccountsTemplates.configure({
    //Поведение
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    //Внешний вид
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: false,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    //Валидация на стороне клиента
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    //Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    //Перенаправление
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Хуки
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    //Texts
    texts: {
        button: {
            changePwd: "Сменить пароль",
            enrollAccount: "Enroll Text",
            forgotPwd: "Забыл пароль",
            resetPwd: "Сбросить пароль",
            signIn: "Войти",
            signUp: "Регистрация",
        }
    }
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    placeholder: 'Пароль',
    required: true,
    minLength: 6,
    errStr: 'Минимальная длина пароля - 6 символов',
});