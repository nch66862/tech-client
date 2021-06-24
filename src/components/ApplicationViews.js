import React from "react"
import { Route } from "react-router-dom"
import { Question } from "./Question/Question"
import { QuestionProvider } from "./Question/QuestionProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "1rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <QuestionProvider>
                <Route exact path="/">
                    <Question />
                </Route>
            </QuestionProvider>
        </main>
    </>
}
