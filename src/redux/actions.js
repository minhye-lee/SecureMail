//actionType
const INPUT_SENDER_EMAIL= "INPUT_SENDER_EMAIL"
const INPUT_SENDER_PASSWORD = "INPUT_SENDER_PASSWORD"


//actionCreater
export const inputSenderEmail  = email => ({
    type : INPUT_SENDER_EMAIL,
    email,
});
export const inputSenderPassword = password =>({
    type : INPUT_SENDER_PASSWORD,
    password,
})

const initialState = {
    sender : {
        email : "",
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
        default :
            return state

    }
}

export default email