import React, { Component } from 'react'
import Password from "../component/Password"
import { inputContentPassword } from "../redux/actions"
import {connect} from "react-redux"
import sha256 from 'crypto-js/sha256'


class PasswordContainer extends Component {

    onEncryptPassword = password => {
        const ciphertext = sha256(password).toString()
        console.log(ciphertext)
        return ciphertext
    }

    render () {
        const { inputContentPassword } = this.props
        return (
            <Password
                onChangeContentPassword = {inputContentPassword}
                onEncryptPassword = {this.onEncryptPassword}
            />
        )
    }
}
const mapStateToProps = state => ({
    sender : state.email.sender,
    receiver : state.email.receiver,
})
const mapDispatchToProps = {
    inputContentPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordContainer)