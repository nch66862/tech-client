import React, { useContext, useEffect, useState } from "react"
import './Question.css'
import { QuestionContext } from "./QuestionProvider"
import { Button } from 'reactstrap';
import { QuestionForm } from './QuestionForm'


//just a container for a footer for completeness
export const Question = () => {
    const { getQuestionById } = useContext(QuestionContext)
    const [question, setQuestion] = useState({})
    const [modal, setModal] = useState(false);
    const toggleEditQuestion = () => setModal(!modal);
    useEffect(() => {
        getQuestionById(1)
            .then(res => setQuestion(res))
    }, [])
    return (
        <>
            <section className="question">
                <h2>{question.question?.question_text}</h2>
                {question.question?.answer_values.map((answer) => {
                    return (
                        <article key={answer.id} className="option">
                            <p>{answer.answer_value}</p>
                        </article>
                    )
                })}
            </section>
            <Button color="primary" className="inputTimeButton" onClick={toggleEditQuestion}>Edit</Button>
            {modal && <QuestionForm toggleEditQuestion={toggleEditQuestion} modal={modal} />}
        </>
    )
}