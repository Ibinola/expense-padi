// Action Types
export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';
export const UPDATE_FORM_VALUES = 'UPDATE_FORM_VALUES';
export const SUBMIT_FORM = 'SUBMIT_FORM';

// Initial State
export const initialState = {
    step: 1,
    formValues: {
        personalDetails: {
            firstName: '',
            lastName: '',
        },
        accountDetails: {
            bankName: '',
            accountNumber: '',
            accountName: '',
        },
        pinSetup: '',
    },
};

// Reducer Function
export function accountDetailsReducer(state, action) {
    switch (action.type) {
        case NEXT_STEP:
            return { ...state, step: state.step + 1 };
        case PREV_STEP:
            return { ...state, step: state.step - 1 };
        case UPDATE_FORM_VALUES:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    [action.payload.field]: action.payload.values,
                },
            };
        case SUBMIT_FORM:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    pinSetup: action.payload,
                },
            };
        default:
            return state;
    }
}