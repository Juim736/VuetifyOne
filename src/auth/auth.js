import axios from 'axios';

export function login(credentials) {
    return new Promise((res,rej) => {
        axios.post('http://192.168.152.89:8001/api/auth/login',credentials)
        .then((response) => {
            res(response.data)
        })
        .catch((error) => {
            rej(error)
        })
    })
}

export function registration(registerData) {
    return new Promise((res,rej) => {
        axios.post('http://192.168.152.89:8001/api/auth/registration',registerData)
        .then((response) => {
            res(response)
        })
        .catch((error) => {
            rej(error)
        })
    })
}

export function getLocalUser() {
    const userStr = localStorage.getItem("user");
    if(!userStr){
        return null;
    }else{
        return userStr;
    }
}