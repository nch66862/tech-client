import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom";
import './Login.css'
import Logo from '../images/PriorityLogo.png'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//This is a form to log an existing user in
export const Login = () => {
    const history = useHistory()
    const [user, setUser] = useState()
    //functions used for demo website
    const handleLogin = (event) => {
        event.preventDefault()
        localStorage.setItem("logged_in_user", "Nick")
        history.push("/")
    }
    const handleInputChange = (event) => {
        let modifiedUser = {...user}
        modifiedUser[event.target.name] = event.target.value
        setUser(modifiedUser)
    }
    return (
        <main className="container--login centered">
            <h1>Technology Advice</h1>
            <section>
                <Button color="primary" onClick={handleLogin} className="loginButton btn signInButton" type="submit">Sign in</Button>
            </section>
            <section>
                or
            </section>
            <section>
                <Form>
                    <FormGroup className="registerFormPage1">
                        <Label for="inputEmail">Email address</Label>
                        <Input onChange={handleInputChange} type="email" name="email" placeholder="email" value={registerUser.email} id="email" autoComplete="email" required />
                    </FormGroup>
                    <FormGroup className="registerFormPage1">
                        <Label for="inputPassword">Create Password</Label>
                        <Input onChange={handleInputChange} type="password" name="password" placeholder="password" value={registerUser.password} id="password" autoComplete="new-password" required />
                    </FormGroup>
                </Form>
                <Button color="primary" onClick={handleLogin} className="loginButton btn signInButton" type="submit">Login</Button>
            </section>
            <section className="link--register">
                <Link className="registrationButton" to="/register">Register</Link>
            </section>
        </main>
    )
}