import {
  ACTION_INCOME
} from '../configs/actionTypes/income'

const INITIAL_STATE = {
  currentUser: {
    monthlySalary:'',
    addIncome:'',
    addIncomeType:'',
    creditCard:'',
    monthlyInstallments:'',
    emirate:'',
    loanAmount:'',
    propertyStatus:'',
    propertyValue:'',
    downPayment:'',
    mortgageType:'',
    mortgageLength:'',
    residualFee:'',
    transactionType:''
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_INCOME:
      return {
        ...state,
        currentUser: {
          monthlySalary:action.payload.monthlySalary,
          addIncome:action.payload.addIncome,
          addIncomeType:action.payload.addIncomeType,
          creditCard:action.payload.creditCard,
          monthlyInstallments:action.payload.monthlyInstallments,
          emirate:action.payload.emirate,
          loanAmount:action.payload.loanAmount,
          propertyStatus:action.payload.propertyStatus,
          propertyValue:action.payload.propertyValue,
          downPayment:action.payload.downPayment,
          mortgageType:action.payload.mortgageType,
          mortgageLength:action.payload.mortgageLength,
          residualFee:action.payload.residualFee,
          transactionType:action.payload.transactionType,
        }
      }
    default:
      return state
  }
}

export default reducer