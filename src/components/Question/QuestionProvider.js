import React, { createContext, useState } from "react";

export const QuestionContext = createContext()

export const QuestionProvider = (props) => {
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
    return (
        <QuestionContext.Provider value={{
            getQuestionById
        }}>
            {props.children}
        </QuestionContext.Provider>
    )
}