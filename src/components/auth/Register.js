import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Register.css"

//This is a form to register a new user to the database
export const Register = () => {
    //useHistory keeps track of the URL visted in a URL stack
    const history = useHistory()
    //the main state variable that will be saved to the database
    const [registerUser, setRegisterUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })
    //modifies the state variable when changes are made to the inputs on the form
    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        if (event.target.id.includes("Id")) {
            newUser[event.target.id] = parseInt(event.target.value)
        } else {
            newUser[event.target.id] = event.target.value
        }
        setRegisterUser(newUser)
    }
    //performs a post to the database when registering a new memeber
    const handleRegister = (event) => {
        event.preventDefault()
        return fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(registerUser)
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid) {
                    localStorage.setItem("tech_token", res.token)
                    localStorage.setItem("is_logged_in", "true")
                    history.push("/")
                }
            })
    }
    //takes the user back to the dashboard screen if they do not want to register a new member
    const handleCancelRegister = (event) => {
        event.preventDefault()
        history.push("/Login")
    }
    return (
        <main className="registerPage">
            <Form className="registerFormPage1">
                <h2 className="h3 mb-3 font-weight-normal">Sign Up</h2>
                <FormGroup className="registerFormPage1">
                    <Label for="first_name">First Name</Label>
                    <Input onChange={handleInputChange} type="text" name="first_name" placeholder="first name" value={registerUser.first_name} id="first_name" autoComplete="given-name" required />
                </FormGroup>
                <FormGroup className="registerFormPage1">
                    <Label for="last_name">Last Name</Label>
                    <Input onChange={handleInputChange} type="text" name="last_name" placeholder="last name" value={registerUser.last_name} id="last_name" autoComplete="family-name" required />
                </FormGroup>
                <FormGroup className="registerFormPage1">
                    <Label for="inputEmail">Email address</Label>
                    <Input onChange={handleInputChange} type="email" name="email" placeholder="email" value={registerUser.email} id="email" autoComplete="email" required />
                </FormGroup>
                <FormGroup className="registerFormPage1">
                    <Label for="inputPassword">Create Password</Label>
                    <Input onChange={handleInputChange} type="password" name="password" placeholder="password" value={registerUser.password} id="password" autoComplete="new-password" required />
                </FormGroup>
            </Form>
            <FormGroup>
                <Button className="registerNavButton" onClick={handleCancelRegister}>Cancel</Button>
                <Button className="registerNavButton" onClick={handleRegister}>Register</Button>
            </FormGroup>
        </main >
    )
}

