import React from 'react'
import FormWrapper from "./FormWrapper"
import { Form, Row, Col, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import message from './constant/message.png'
import "./css/Sender.css"

const Sender = ({ onChangeSenderEmail, onChangeSenderPassword}) => {
    return (
        <FormWrapper>
            <Form>
                <div className="div-step">
                    STEP 1.
                </div>
                <div className="div-title">
                    Register Your Email Account
                </div>
                <div className="div-logo">
                    <img src={message} className="img-logo"/>
                </div>
                <Form.Group as={Row} className="form-sender" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="email"
                            placeholder="Your Email Address"
                            className="form-input"
                            onChange={e => onChangeSenderEmail(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="password"
                            placeholder=""
                            className="form-input"
                            onChange={e => onChangeSenderPassword(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <div className="div-submit">
                    <Button
                        variant="primary"
                        type="submit"
                        className="btn-submit"
                    ><Link to="/password">
                        Next
                    </Link>
                    </Button>
                </div>
            </Form>
        </FormWrapper>
    )
}
export default Sender