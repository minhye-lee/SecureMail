import React, { Component } from 'react'
import { connect } from 'react-redux'
import Email from "../component/Email"
import CryptoAES from 'crypto-js/aes'
import { inputReceiverEmail, inputContentText, inputContentTitle, submitEmail } from '../redux/actions'

class EmailContainer extends Component {

    onClickSubmit = () => {
        const { submitEmail, sender, receiver, content } = this.props
        submitEmail(sender, receiver, content)
    }

    onEncryptText = text => {
        const { content } = this.props
        const password = content.password
        const ciphertext = CryptoAES.encrypt(text, password)
        console.log(ciphertext.toString())
        return ciphertext.toString()
    }



    render() {
        const {inputReceiverEmail, inputContentText, inputContentTitle } = this.props

        return (
            <Email
                onChangeReceiverEmail={inputReceiverEmail}
                onChangeText = {inputContentText}
                onChangeTitle = {inputContentTitle}
                onClickSubmit = {this.onClickSubmit}
                onEncryptText= {this.onEncryptText}
            />
        )
    }
}

const mapStateToProps = state => ({
    sender : state.email.sender,
    receiver : state.email.receiver,
    content : state.email.content
})
const mapDispatchToProps = {
    inputReceiverEmail,
    inputContentText,
    inputContentTitle,
    submitEmail,
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailContainer)