import React, { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [profiles, setProfiles] = useState([])
    const logUserIn = (credentials) => {
        return fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        })
            .then(res => res.json())
    }
    const getPublicProfiles = () => {
        return fetch("http://localhost:8000/users", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("priority_user_token")}`
            }
        })
        .then(res => res.json())
        .then(setProfiles)
    }
    return (
        <UserContext.Provider value={{
            getPublicProfiles, profiles,
            checkAuthenticated, getSubscriptions,
            logUserIn, getProfileById,
            publicProfile, changeSubscription,
            getUserStatistics, userStatistics,
            getWhatById, userWhats
        }}>
            {props.children}
        </UserContext.Provider>
    )
}