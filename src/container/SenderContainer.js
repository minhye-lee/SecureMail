import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sender from "../component/Sender"
import { inputSenderEmail, inputSenderPassword } from '../redux/actions'

class EmailContainer extends Component {

    onClickSubmit = () => {
    }

    render() {
        const { inputSenderEmail, inputSenderPassword } = this.props
        return (
            <Sender
                onChangeSenderEmail={inputSenderEmail}
                onChangeSenderPassword={inputSenderPassword}
            />
        )
    }
}

const mapStateToProps = state => ({
    sender : state.email.sender,
    receiver : state.email.receiver,
})
const mapDispatchToProps = {
    inputSenderEmail,
    inputSenderPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailContainer)