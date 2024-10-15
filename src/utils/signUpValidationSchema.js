import * as Yup from 'yup';

// Reusable validation
const emailValidation = Yup.string().email('Invalid email address').required("Please enter your email address");

export const userSignUpValidationSchema = Yup.object({
    email: emailValidation,
    password: Yup.string()
        .matches(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
            'Must contain at least 8 characters, 1 uppercase letter, and 1 special character'
        )
        .required("Password is required"),
});

export const linkAccountValidationSchema = Yup.object({
    accountNumber: Yup.string().matches(/^\d{10}$/, "Account number must be 10 digits").required("Account number is required"),
    bankName: Yup.string().required("Please select a bank"),
    accountName: Yup.string().required("Account name is required"),
});

export const trackingRulesValidationSchema = Yup.object({
    typeOfTransaction: Yup.mixed().oneOf(['Debit', 'Credit'], "Invalid transaction type").required("Transaction type is required"),
    remarksTrails: Yup.string().required("Remark trail is required"),
    remark: Yup.string().required("Please select a remark"),
});
