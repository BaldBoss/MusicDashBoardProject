import {useState } from "react"
import { routes } from "../../Routes/Routes"
import styles from "./Header.module.css"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/UserSlice/UserSlice"
import { AuthService } from "../../Service/AuthService"

export default function Header(params) {
    const isLoggedIn = useSelector(state => state.UserData.isLoggedIn)
    const [error,setError] = useState('')
    const history = useHistory()
    const currentUser = useSelector(state => state.UserData)
    const dispatch = useDispatch()
    

    function handleLogout(){
        setError('')
        
            AuthService.logout().then(() =>{
                dispatch(logout())
                localStorage.removeItem("userToken")
                history.push(routes.Login)
            }).catch(()=>{
                setError("failed to logout")
            })
            
       
    }

    return(
        <div>
            {isLoggedIn ? (
            <div className={styles.HeaderLoggedinContainer}>
                <div className="ms-5 d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-soundwave me-3" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    <h3>8 people listening you</h3>
                </div>
                <div className="d-flex me-5">
                    <div className="d-flex me-3">
                        <div>
                            <h6>{currentUser.email}</h6>
                            <p className="text-end">Artist</p>
                        </div>
                        
                        <div className={styles.avatar}></div>
                    </div>
                    <div className={styles.logout}>
                        <svg onClick={handleLogout}  xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-box-arrow-in-left ms-3" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                        <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/></svg>
                    </div>
                    
                </div>
                
            </div>) :
            <div className={styles.HeaderContainer}>signup
                <svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/></svg>
            </div>
          }
        </div>
    )
};
