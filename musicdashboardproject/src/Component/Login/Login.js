
import React, { useEffect, useRef, useState } from 'react'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import { routes } from '../../Routes/Routes'
import { Link,useHistory } from 'react-router-dom'
import { AuthService } from '../../Service/AuthService'
import { useDispatch } from 'react-redux'
import { addUserData,login} from '../../store/UserSlice/UserSlice'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    async function handlesubmit(e){
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            const userData = await AuthService.login(emailRef.current.value,passwordRef.current.value)
            dispatch(addUserData(emailRef.current.value))
            dispatch(login())
            console.log(userData.user.toJSON())
            localStorage.setItem("userToken" , JSON.stringify(userData.user.toJSON()))
            history.push(routes.home)
        }catch{
            setError("Failed to log in")
            setLoading(false)
        }       
    }

    useEffect(()=>{
        const userTokenCheck = localStorage.getItem("userToken")
        if(userTokenCheck){
            const userToken = JSON.parse(userTokenCheck)
            if(userToken.stsTokenManager.expirationTime > new Date())
            {
                dispatch(addUserData(userToken.email))
                dispatch(login())
                history.push(routes.home)
            }
        }
       
    },[])


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handlesubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-2" type="submit">Log in</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an Account? <Link to={routes.SignUp}>Sign Up</Link>
            </div>
        </>
    )
}
