import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState={
    transactions:[
        {id:1, text:'Flower', amount:-10},
        {id:2, text:'Salary', amount:500},
        {id:3, text:'Book', amount:-10},
        {id:4, text:'Camera', amount:110},

    ]
}
export const GlobalContext= createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state, dispatch]= useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(id){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:id
        })
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
    {children}
    </GlobalContext.Provider>);


}