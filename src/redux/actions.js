import { push } from 'react-router-redux'
//actionType
const INPUT_SENDER_EMAIL= "INPUT_SENDER_EMAIL"
const INPUT_SENDER_PASSWORD = "INPUT_SENDER_PASSWORD"
const INPUT_RECEIVER_EMAIL = "INPUT_RECEIVER_EMAIL"
const INPUT_CONTENT_TEXT = "INPUT_CONTENT_TEXT"
const INPUT_CONTENT_TITLE = "INPUT_CONTENT_TITLE"
const INPUT_CONTENT_PASSWORD = "INPUT_CONTENT_PASSWORD"


//actionCreater
export const inputSenderEmail  = email => ({
    type : INPUT_SENDER_EMAIL,
    email,
})
export const inputSenderPassword = password =>({
    type : INPUT_SENDER_PASSWORD,
    password,
})
export const inputReceiverEmail = email => ({
    type : INPUT_RECEIVER_EMAIL,
    email,
})
export const inputContentText = text => ({
    type : INPUT_CONTENT_TEXT,
    text,
})
export const inputContentTitle = title => ({
    type : INPUT_CONTENT_TITLE,
    title,
})
export const inputContentPassword = password => ({
    type : INPUT_CONTENT_PASSWORD,
    password,
})
export const submitEmail = (senderInfo, receiverInfo, contentInfo) => dispatch => {
    fetch('/api/submit', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            senderInfo : senderInfo,
            receiverInfo : receiverInfo,
            contentInfo : contentInfo,
        })
    })
        .then(res => res.json())
        .then(send => {
            if(send) {
                dispatch(push('/sent'))
            } else {
                dispatch(push('/error'))
            }
        })

}

const initialState = {
    sender : {
        email : "",
        password : "",
    },
    receiver : {
        email : ""
    },
    content : {
        title : "",
        text : "",
        password : "",
    },
}

const email = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_SENDER_EMAIL :
            return {
                ...state,
                sender : {
                    ...state.sender,
                    email : action.email,
                },
            }
        case INPUT_SENDER_PASSWORD :
            return {
                ...state,
                sender : {
                    ...state.sender,
                    password: action.password,
                },
            }
        case INPUT_RECEIVER_EMAIL :
            return {
                ...state,
                receiver : {
                    ...state.receiver,
                    email : action.email,
                },
            }
        case INPUT_CONTENT_TEXT :
            return {
                ...state,
                content : {
                    ...state.content,
                    text : action.text,
                    },
            }
        case INPUT_CONTENT_TITLE:
            return {
                ...state,
                content : {
                    ...state.content,
                    title : action.title,
                }
            }
        case INPUT_CONTENT_PASSWORD:
            return {
                ...state,
                content : {
                    ...state.content,
                    password : action.password,
                }
            }
        default :
            return state

    }
}

export default email