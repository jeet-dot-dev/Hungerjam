import {toast} from 'react-toastify';

export const haddleSuccess = (msg)=>{
    toast.success(msg,{
        position:'top-right'
    })
}

export const haddleError = (msg)=>{
    toast.success(msg,{
        position:'top-right'
    })
}