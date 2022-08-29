import { createContext,useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase'
export const authContext = createContext();

export const useAuth = () => {

  const context =  useContext(authContext)
  if(!context) throw new Error('There is no authProvider')
  return context;

}




export function AuthProvider({children}){
    const singUp = (email,passwowrd) =>
        createUserWithEmailAndPassword(auth,email,passwowrd)
    

    const user={
        login:true,
    }

    return(
        <authContext.Provider value={{user,singUp}}>
            {children}
        </authContext.Provider>

    )

}