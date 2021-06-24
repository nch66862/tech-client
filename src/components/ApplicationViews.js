import React from "react"
import { Route } from "react-router-dom"
import { Profile } from "./profile/Profile"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "1rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <Profile />
            </Route>
        </main>
    </>
}
