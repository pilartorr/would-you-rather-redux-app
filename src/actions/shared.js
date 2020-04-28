import { getInitialData, saveQuestionAnswerApi} from '../utils/api'
import { receiveUsers, saveUserAnswer } from '../actions/users'
import { receiveQuestions, saveQuestionAnswer } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'sarahedo'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

export function handleSaveQuestionAnswer (qid, answer) {
  return (dispatch, getState) => {
      const { authedUser } = getState()
      dispatch(showLoading())
      return saveQuestionAnswerApi({authedUser, qid, answer})
          .then(() => {
              dispatch(saveQuestionAnswer(authedUser, qid, answer))
              dispatch(saveUserAnswer(authedUser, qid, answer))
              dispatch(hideLoading())
          })  
  }
}