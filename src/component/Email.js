import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import './css/Sender.css'
import {Link} from 'react-router-dom'

const Email = ({ onChangeReceiverEmail, onChangeText, onChangeTitle, onClickSubmit, onEncryptText }) => {
    return (
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Receiver
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            onChange={e => onChangeReceiverEmail(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Title
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            placeholder="Untitled"
                            onChange={e => onChangeTitle(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Textarea</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="24"
                        onChange={e => onChangeText(onEncryptText(e.target.value))}
                    />
                </Form.Group>
                <div className="div-submit">
                    <Link to="/">
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={onClickSubmit}
                    >
                        Submit
                    </Button>
                    </Link>
                </div>

            </Form>
    )
}
export default Email