import React, { useContext, useEffect, useState } from "react"
import { Modal, ModalBody, ModalFooter, Button, Input, Form, FormGroup } from "reactstrap"
import { QuestionContext } from "./QuestionProvider";

export const QuestionModal = ({ priorityModal, togglePriorityModal }) => {
    const { getQuestionById, updateQuestion, getTypes, types } = useContext(QuestionContext)
    const [editedQuestion, setEditedQuestion] = useState({
        question_text: "",
        required: null,
        type_id: 0
    });
    const handleUpdateField = (event) => {
        let newPriority = { ...editedQuestion }
        newPriority[event.target.name] = event.target.value
        setEditedQuestion(newPriority)
    }
    const handleUpdateRequired = (event) => {
        let newPriority = { ...editedQuestion }
        newPriority[event.target.name] = event.target.value
        setEditedQuestion(newPriority)
    }
    const handleSubmitEdit = (event) => {
        event.preventDefault()
        updateQuestion(editedQuestion)
            .then(() => toggleEditQuestion())
    }
    useEffect(() => {
        getQuestionById(1)
            .then(res => setEditedQuestion(res))
            .then(() => getTypes())
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <Modal isOpen={priorityModal} toggle={togglePriorityModal}>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="inputQuestion">Question</Label>
                            <Input name="question_text" type="text" onChange={handleUpdateField} value={editedQuestion?.question_text} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="inputQuestion">Required?</Label>
                            <Input name="required" type="checkbox" onChange={handleUpdateRequired} value={editedQuestion?.required} defaultChecked={editedQuestion?.required} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" name="type_id" onChange={handleUpdateField}>
                                {types.map(type => {
                                    return <option value={type.id}>{type.type}</option>
                                })}
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={handleSubmitEdit}>Save</Button>
                    <Button color="secondary" onClick={togglePriorityModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
