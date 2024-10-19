import * as Yup from 'yup';

// Reusable validation
export const emailValidation = Yup.string().email('Invalid email address').required("Please enter your email address");

export const forgotPasswordInitialValue = {
    email: ''
}

export const resetPasswordInitialValues = {
    newPassword: '',
    confirmPassword: '',
}

export const passwordValidation = Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        'Must contain at least 1 uppercase letter and 1 special character'
    )
    .required("Password is required");

export const ResetPasswordSchema = Yup.object().shape({
    newPassword: passwordValidation,
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

export const userSignUpValidationSchema = Yup.object({
    email: emailValidation,
    password: passwordValidation,
});

export const linkAccountValidationSchema = Yup.object({
    accountNumber: Yup.string().matches(/^\d{10}$/, "Invalid Account number, must be 10 digits").required("Account number is required"),
    bankName: Yup.string().required("Please select a bank"),
    accountName: Yup.string().required("Account name is required"),
});

export const linkAccountInitialValues = {
    accountName: '',
    accountNumber: '',
    bankName: '',
};


export const trackingRulesValidationSchema = Yup.object({
    typeOfTransaction: Yup.mixed().oneOf(['Debit', 'Credit'], "Invalid transaction type").required("Transaction type is required"),
    remarksTrails: Yup.string().required("Remark trail is required"),
    remark: Yup.string().required("Please select a remark"),
});


export const PersonalDetailsSchema = Yup.object({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name')
})
