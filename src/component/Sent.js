import React from 'react'
import FormWrapper from "./FormWrapper"
import "./css/Sender.css"
import send from "./constant/send.png"

const Sent = () => {
    return (
        <FormWrapper>
            <div className="div-logo">
                <img src={send} className="img-logo"/>
            </div>
        </FormWrapper>

    )
}
export default Sent