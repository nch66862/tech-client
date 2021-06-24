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
        <section className="question">
            <h2>{question.question?.question_text}</h2>
            {question.question?.answer_values.map((answer, index) => {
                return <article key={index}>{answer}</article>
            })}
        </section>
    )
}