import {
  ACTION_CLIENT
} from '../configs/actionTypes/client'

const INITIAL_STATE = {
  currentUser: {
      firstName:'',
      lastName:'',
      email:'',
      // phoneNumber:'',
      // birthDate:'',
      // nationality:'',
      // employment:'',
      // residency:'',
      // applicant_firstName:[],
      // applicant_lastName:[],
      // applicant_email:[],
      // applicant_phoneNumber:[],
      // applicant_residency:[],
      // applicant_relationship:[],
      // borrower_firstName:[],
      // borrower_lastName:[],
      // borrower_email:[],
      // borrower_phoneNumber:[],
      // borrower_residency:[],
      // borrower_relationship:[],
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_CLIENT:
      return {
        ...state,
        currentUser: {
          firstName:action.payload.firstName,
          lastName:action.payload.lastName,
          email:action.payload.email,
          // phoneNumber:action.payload.phoneNumber,
          // birthDate:action.payload.birthDate,
          // nationality:action.payload.nationality,
          // employment:action.payload.employment,
          // residency:action.payload.residency,
        }
      }
    default:
      return state
  }
}

export default reducer