import React, { useContext, useEffect, useState } from "react"
import './Question.css'
import { QuestionContext } from "./QuestionProvider"

//just a container for a footer for completeness
export const Question = () => {
    const { getQuestionById } = useContext(QuestionContext)
    const [question, setQuestion] = useState({})
    useEffect(() => {
        getQuestionById(1)
            .then(res => setQuestion(res))
    }, [])
    return (
        <section className="profile">
            {question.question.question_text}
        </section>
    )
}