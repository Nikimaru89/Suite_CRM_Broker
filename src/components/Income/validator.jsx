
export const validator = (values, fieldName) => {
  let errors = {};
  switch (fieldName) {
    case "monthlySalary":
      validateMonthlySalary(values.monthlySalary, errors);
      break;
    case "addIncome":
      validateAddIncome(values.addIncome, errors);
      break;
    case "creditCard":
      validateCreditCard(values.creditCard, errors);
      break;
    case "monthlyInstallments":
      validateMonthlyInsallments(values.monthlyInstallments, errors);
      break;
    case "loanAmount":
      validateLoanAmount(values.loanAmount, errors);
      break;
    case "propertyValue":
      validatePropertyValue(values.propertyValue, errors);
      break;
    case "downPayment":
      validateDownPayment(values.downPayment, errors);
      break;
    case "mortgageLength":
      validateMortgageLength(values.mortgageLength, errors);
      break;  
    default:
  }
  return errors;
};

// ******************************
function validateMonthlySalary(name, errors) {
  let result = true;
  if(!name) {
    errors.monthlySalary = " Your fixed monthly salary is required";
    result = false;
  }
  return result;
}

function validateAddIncome(name, errors) {
  let result = true;
  if(!name) {
    errors.addIncome = " Your additional income is required";
    result = false;
  }
  return result;
}

function validateCreditCard(name, errors) {
  let result = true;
  if(!name) {
    errors.creditCard = " Your total credit card limit is required";
    result = false;
  }
  return result;
}

function validateMonthlyInsallments(name, errors) {
  let result = true;
  if(!name) {
    errors.monthlyInstallments = " Your monthly fixed installments is required";
    result = false;
  }
  return result;
}

function validateLoanAmount(name, errors) {
  let result = true;
  if(!name) {
    errors.loanAmount = " Your loan amount is required";
    result = false;
  }
  return result;
}

function validatePropertyValue(name, errors) {
  let result = true;
  if(!name) {
    errors.propertyValue = " Your property value is required";
    result = false;
  }
  return result;
}

function validateDownPayment(name, errors) {
  let result = true;
  if(!name) {
    errors.downPayment = " Your downpayment is required";
    result = false;
  }
  return result;
}

function validateMortgageLength(name, errors) {
  let result = true;
  if(!name) {
    errors.mortgageLength = " Your mortgage length is required";
    result = false;
  }
  return result;
}

