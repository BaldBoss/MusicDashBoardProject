// import React, {createContext, useContext, useEffect, useState} from 'react';
// import { auth } from '../../Firebase';
// export const AuthContext = createContext();

// export function useAuth(){
//     return useContext(AuthContext)
// }

// export const AuthContextProvider = (props) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const [currentUser,setCurrentUser]= useState()
//     const [loading,setLoading] = useState(true)


//     useEffect(() =>{
//         const unsubscribe = auth.onAuthStateChanged(user => {
//                 setCurrentUser(user)
//                 setLoading(false)
//             })
//             return unsubscribe
//     }, [])

   

//     const value ={
//         currentUser,
//         login,
//         isLoggedIn,
//         logout,
//         signup
//     }
//     return(
//         <AuthContext.Provider value={value}>
//             {!loading && props.children}
//         </AuthContext.Provider>
//     )
// }