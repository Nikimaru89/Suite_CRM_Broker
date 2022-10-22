
export const validator = (values, fieldName) => {
  let errors = {};
  switch (fieldName) {
    case "firstName":
      validateFirstName(values.firstName, errors);
      break;
    case "lastName":
      validateLastName(values.lastName, errors);
      break;
    case "email":
      validateEmail(values.email, errors);
      break;
    case "nationality":
      validateNationality(values.nationality, errors);
      break;
    case "nationality":
      validateEmployment(values.employment, errors);
      break;   
    default:
  }
  return errors;
};

// ******************************
function validateFirstName(name, errors) {
  let result = true;
  if(!name) {
    errors.firstName = " Your  first name is required";
    result = false;
  }
  return result;
}

function validateLastName(name, errors) {
  let result = true;
  if(!name) {
    errors.lastName = " Your  last name is required";
    result = false;
  }
  return result;
}

function validateEmail(email, errors) {
  let result = true;

  if (!email) {
    errors.email = "Email is Required";
    result = false;
  } else {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(email).toLowerCase());
    if (!result) errors.email = "Invalid Email address";
  }
  return result;
}

function validateNationality(name, errors) {
  let result = true;
  if(!name) {
    errors.nationality = " Your  nationality is required";
    result = false;
  }
  return result;
}

function validateEmployment(name, errors) {
  let result = true;
  if(!name) {
    errors.employment = " Your  employment status is required";
    result = false;
  }
  return result;
}


