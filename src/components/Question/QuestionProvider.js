import React, { createContext, useState } from "react";

export const QuestionContext = createContext()

export const QuestionProvider = (props) => {
    const [types, setTypes] = useState([])
    const [question, setQuestion] = useState({})
    const getQuestionById = (questionId) => {
        return fetch(`http://localhost:8000/questions/${questionId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("tech_token")}`
            },
        })
            .then(res => res.json())
            .then(res => setQuestion(res))
    }
    const updateQuestion = (question) => {
        return fetch(`http://localhost:8000/questions/${question.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("tech_token")}`
            },
            body: JSON.stringify(question)
        })
            .then(() => getQuestionById(question.id))
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
            getTypes, question,
            updateQuestion
        }}>
            {props.children}
        </QuestionContext.Provider>
    )
}