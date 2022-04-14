import React, {createContext, useContext, useEffect, useState} from "react";
import {database} from './firebase'
import {collection, doc, updateDoc} from 'firebase/firestore'
import { getDocs} from 'firebase/firestore'

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [chats, setChats] = useState([]);
    
    const fetchChats = () => {
        const collectionReference = collection(database, 'chats');
        getDocs(collectionReference)
            .then((snapshot)=>{
            snapshot.docs.forEach(doc=> {
                setChats(doc.data().chats)
            })
            })
            .catch(error=>console.log(error))
    }

    const updateChats = () => {
        if(chats.length > 0){
            const docRef = doc(database, 'chats', 's5DLpVJoOk5MXnU5hIUF');
            const tempChats = {
                chats: chats
            }
            updateDoc(docRef, tempChats)
        }
    }
    useEffect(()=>{
        fetchChats();
    }, [])
    useEffect(()=>{
        updateChats()
    },[chats])
    return <AppContext.Provider value={{
        chats,
        setChats
    }}>
        {children}
    </AppContext.Provider>
}

export function useGlobalContext() {
    return useContext(AppContext)
}