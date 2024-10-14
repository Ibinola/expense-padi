import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required("Email Address Required"),
    password: Yup.string('At least 1 Uppercase Letter & 1 Special character').required("Password Required"),

})


export const linkAccountValidationSchema = Yup.object({
    accountNumber: Yup.string().required("Account Number Required"),
    bankName: Yup.string().required("Please select a bank"),
    accountName: Yup.string().required("Account Name Required"),
})

export const trackingRulesValidationSchema = Yup.object({
    typeOfTransaction: Yup.string().required("Type of Transaction Required"),
    remarksTrails: Yup.string().required("Remark Trail Required"),
    remark: Yup.string().required("Please select a remark"),
})
