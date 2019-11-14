import React, { Component } from 'react'
import { connect } from 'react-redux'
import Email from "../component/Email"
import { inputSenderEmail, inputSenderPassword } from '../redux/actions'

class EmailContainer extends Component {
    render() {
        const { inputSenderEmail, inputSenderPassword } = this.props
        return (
            <Email onChangeEmail={inputSenderEmail} onChangePassword={inputSenderPassword}/>
        )
    }
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
    inputSenderEmail,
    inputSenderPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailContainer)