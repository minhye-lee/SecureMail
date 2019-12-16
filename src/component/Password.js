import React from 'react'
import FormWrapper from "./FormWrapper"
import key from './constant/key.png'
import "./css/Sender.css"
import { Link } from "react-router-dom"
import { Form, Row, Col, Button } from 'react-bootstrap'

const Password = ({ onChangeContentPassword, onEncryptPassword }) => {
    return (
        <FormWrapper>
            <div className="div-step">
                STEP 2.
            </div>
            <div className="div-title">
                Set A Secure Password
            </div>
            <div className="div-logo">
                <img src={key} className="img-logo"/>
            </div>
            <Form>
                <Form.Group as={Row} className="form-sender" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="password"
                            placeholder=""
                            className="form-input"
                            onChange={e => onChangeContentPassword(onEncryptPassword(e.target.value))}
                            // onChange={e => onChangeContentPassword(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <div className="div-submit">
                    <Button
                        variant="primary"
                        type="submit"
                        className="btn-submit"
                    ><Link to="/email">
                        Next
                    </Link>
                    </Button>
                </div>
            </Form>
        </FormWrapper>
    )
}

export default Password