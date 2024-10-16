
import { toast } from 'react-toastify';

export const toastConfig = {
    pauseOnHover: false,  
    autoClose: 1500,      
    hideProgressBar: true,
    draggable: true,

    style: {
        backgroundColor: '#FFFFFF'  
    }
};


export const showToast = {
    success: (message) => toast.success(message, toastConfig),
    error: (message) => toast.error(message, toastConfig),
    info: (message) => toast.info(message, toastConfig),
    warning: (message) => toast.warning(message, toastConfig),
};
