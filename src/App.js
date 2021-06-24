import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { NavBar } from "./components/nav/NavBar";
import { Footer } from "./components/footer/Footer";
import { ApplicationViews } from "./components/ApplicationViews";
import './App.css'
//the application component. will handle routing to the application views if the user is logged in, or the login page if a user is not logged in
export const App = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("is_logged_in")) {
                    return (
                        <>
                            <section className="mainBody">
                                <NavBar />
                                <ApplicationViews />
                            </section>
                            <Footer />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)