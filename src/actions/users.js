import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

function answerQuestion({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function handleAnswerQuestion(info) {
    return (dispatch) => {
        dispatch(answerQuestion(info))

        return saveQuestionAnswer(info)
            .catch(err => {
                console.warn('Error in handleAnswerQuestion: ', err)
                dispatch(answerQuestion(info))
                alert('There was an error answering the question. Try again.')
            })
    }
}



