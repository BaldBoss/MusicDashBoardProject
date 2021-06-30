import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { routes } from '../Routes/Routes'
import { useSelector } from 'react-redux'
export default function PrivateRoute({children, ...rest}) {
    const isLoggedIn = useSelector(state => state.UserData.isLoggedIn)
    return (
        <Route
        {...rest}
        render={props =>{
            return isLoggedIn ? children : <Redirect to={routes.Login}></Redirect>
        }}
        >

        </Route>
    )
}
