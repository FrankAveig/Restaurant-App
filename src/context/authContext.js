import { createContext,useContext,useEffect,useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import {auth} from '../firebase/firebase'
export const authContext = createContext();

export const useAuth = () => {

  const context =  useContext(authContext)
  if(!context) throw new Error('There is no authProvider')
  return context;

}




export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const singUp = (email,password) =>
        createUserWithEmailAndPassword(auth,email,password)
    
    const login = (email,password) => signInWithEmailAndPassword(auth,email,password)
    const logout =()=>{signOut(auth)}

useEffect(()=>{
    onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
    });
},[])

    return(
        <authContext.Provider value={{singUp,login,user,logout,loading}}>
            {children}
        </authContext.Provider>

    )

}