import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom";
import './Login.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//This is a form to log an existing user in
export const Login = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    //functions used for demo website
    const handleDefaultLogin = (event) => {
        event.preventDefault()
        const defaultUser = {
            username: "nick@nickcarver.com",
            password: "password"
        }
        return fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(defaultUser)
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid) {
                    localStorage.setItem("is_logged_in", "true")
                    localStorage.setItem("tech_token", res.token)
                    history.push("/")
                }
            })
    }
    const handleLogin = (event) => {
        event.preventDefault()
        return fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid) {
                    localStorage.setItem("is_logged_in", "true")
                    localStorage.setItem("tech_token", res.token)
                    history.push("/")
                }
            })
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
                <Button color="primary" onClick={handleDefaultLogin} className="loginButton btn signInButton" type="submit">Sign in</Button>
            </section>
            <section>
                or
            </section>
            <section>
                <Form>
                    <FormGroup className="registerFormPage1">
                        <Label for="inputEmail">Email address</Label>
                        <Input onChange={handleInputChange} type="email" name="username" placeholder="email" value={user.username} id="email" autoComplete="email" required />
                    </FormGroup>
                    <FormGroup className="registerFormPage1">
                        <Label for="inputPassword">Password</Label>
                        <Input onChange={handleInputChange} type="password" name="password" placeholder="password" value={user.password} id="password" autoComplete="new-password" required />
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