import React, { createContext, useState } from "react";

export const QuestionContext = createContext()

export const QuestionProvider = (props) => {
    const [types, setTypes] = useState([])
    const getQuestionById = (questionId) => {
        return fetch(`http://localhost:8000/questions/${questionId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("tech_token")}`
            },
        })
            .then(res => res.json())
    }
    const getTypes = () => {
        return fetch(`http://localhost:8000/types`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("tech_token")}`
            },
        })
            .then(res => res.json())
            .then(res => setTypes(res))
    }
    return (
        <QuestionContext.Provider value={{
            getQuestionById, types,
            getTypes
        }}>
            {props.children}
        </QuestionContext.Provider>
    )
}