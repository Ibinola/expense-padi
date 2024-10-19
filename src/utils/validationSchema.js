import * as Yup from 'yup';

// Common validations
const emailValidation = Yup.string().email('Invalid email address').required("Please enter your email address");
const passwordValidation = Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        'Must contain at least 1 uppercase letter and 1 special character'
    )
    .required("Password is required");

// Initial values
export const initialValues = {
    forgotPassword: { email: '' },
    signUp: { email: '', password: '', agreeToTerms: false },
    resetPassword: { newPassword: '', confirmPassword: '' },
    linkAccount: { accountName: '', accountNumber: '', bankName: '' },
    configuration: { typeOfTransaction: '', remarksTrails: '', remark: '', },
    logIn: { email: '', password: '' }
};

// Schemas
export const schemas = {
    ResetPassword: Yup.object().shape({
        newPassword: passwordValidation,
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    }),

    UserSignUp: Yup.object({
        email: emailValidation,
        password: passwordValidation,
        agreeToTerms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
    }),

    LinkAccount: Yup.object({
        accountNumber: Yup.string().matches(/^\d{10}$/, "Invalid Account number, must be 10 digits").required("Account number is required"),
        bankName: Yup.string().required("Please select a bank"),
        accountName: Yup.string().required("Account name is required"),
    }),

    PinSetup: Yup.object().shape({
        pin: Yup.string().matches(/^\d{4}$/, 'Pin must be exactly 4 digits').required('PIN is required'),
    }),

    TrackingRules: Yup.object({
        typeOfTransaction: Yup.mixed().oneOf(['Debit', 'Credit'], "Invalid transaction type").required("Transaction type is required"),
        remarksTrails: Yup.string().required("Remark trail is required"),
        remark: Yup.string().required("Please select a remark"),
    }),

    PersonalDetails: Yup.object({
        firstName: Yup.string().required('Please enter your first name'),
        lastName: Yup.string().required('Please enter your last name'),
    }),

    ForgotPassword: Yup.object().shape({
        email: emailValidation,
    })
};


export const {
    ResetPassword: ResetPasswordSchema,
    UserSignUp: userSignUpValidationSchema,
    LinkAccount: linkAccountValidationSchema,
    PinSetup: PinSetupSchema,
    TrackingRules: trackingRulesValidationSchema,
    PersonalDetails: PersonalDetailsSchema,
    ForgotPassword: ForgotPasswordSchema,
} = schemas;

export { emailValidation, passwordValidation };