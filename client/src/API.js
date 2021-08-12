import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:3001",
    withCredentials: true,
})

// Auth
export const signIn = async (data)=>await API.post('/auth/login',data)
export const signUp = async (data)=>await API.post('/auth/register',data)
export const logout = async ()=>await API.get('/auth/logout')
export const test = async ()=>await API.get('/')

// Transactions
export const getTransaction = async()=>await API.get('/transaction');
export const createTransaction = async(data)=>await API.post('/transaction',data);
export const updateTransaction = async(data)=>await API.put('/transaction',data);
export const deleteTransaction = async(data)=>await API.delete('/transaction',{data:data});

// Recurring Payments
export const getPayment = async()=>await API.get('/recurring');
export const createPayment = async(data)=>await API.post('/recurring',data);
export const updatePayment = async(data)=>await API.put('/recurring',data);
export const deletePayment = async(data)=>await API.delete('/recurring',{data:data});

// Income Sources
export const getIncome = async()=> await API.get('/income');
export const createIncome = async(data)=> await API.post('/income',data);
// export const updateIncome = async(data)=> await API.put('/income',data);
// export const deleteIncome = async(data)=> await API.delete('/income',data);

// Goals
export const getGoal = async()=>await API.get('/goals')
export const setGoal = async(data)=>await API.post('/goals',data)
export const updateGoal = async(data)=>await API.put('/goals',data)
export const addAmount = async(data)=>await API.put('/goals/addamount',data)
export const completeGoal = async(data)=>await API.put('/goals/completed',data)
export const deleteGoal = async(data)=>await API.delete('/goals',{data:data})


// Overview
export const getOverview = async()=>await API.get('/overview/')

// Profile
export const getProfile = async()=>await API.get('/profile/')
export const updateProfile = async(data)=>await API.put('/profile/',data)

