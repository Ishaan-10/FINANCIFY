import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:3001",
})

export const signIn = async (data)=>await API.post('/auth/login',data)
export const signUp = async (data)=>await API.post('/auth/register',data)
export const test = async ()=>await API.get('/')