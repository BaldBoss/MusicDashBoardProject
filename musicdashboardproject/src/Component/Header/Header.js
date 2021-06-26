import { useContext, useState } from "react"
import { routes } from "../../Routes/Routes"
import { useAuth } from "../context/AuthContext"
import styles from "./Header.module.css"
import { useHistory } from "react-router"

export default function Header(params) {
    const {isLoggedIn} = useAuth()
    const {currentUser,logout} = useAuth()
    const [error,setError] = useState('')
    const history = useHistory()

    async function handleLogout(){
        setError('')
        try {
            await logout()
            history.push(routes.Login)
        } catch {
            setError('Failed to Log out')
        }
    }

    return(
        <div>
            {isLoggedIn ? (
            <div className={styles.HeaderLoggedinContainer}>
                <div>
                    <h3>8 people listening you</h3>
                </div>
                <div className="d-flex">
                    <div className="d-flex">
                        <div>
                            <h6>{currentUser.email}</h6>
                            <p className="text-end">Artist</p>
                        </div>
                        
                        <div className={styles.avatar}></div>
                    </div>
                    <svg onClick={handleLogout} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                    <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/></svg>
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
