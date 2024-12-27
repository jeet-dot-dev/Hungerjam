import {toast} from 'react-toastify';

export const haddleSuccess = (msg)=>{
    toast.success(msg)
}

export const haddleError = (msg)=>{
    toast.error(msg)
}