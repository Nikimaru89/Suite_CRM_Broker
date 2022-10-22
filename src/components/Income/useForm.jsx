import { useState, useEffect } from "react";
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import * as AWS from 'aws-sdk';
import { income } from '../../actions/income'; 
// ******************************

const useForm = ({ initState, callback, validator, moveHandle, nextClick, email, local_client}) => {
  const docClient = new AWS.DynamoDB.DocumentClient()
  const { addToast } = useToasts(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading ] = useState(false);
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);

  // ******************************
  useEffect(() => {
    const isValidErrors = () =>
      Object.values(errors).filter(error => typeof error !== "undefined")
        .length > 0;
    if (isSubmited && !isValidErrors()) callback();
  }, [errors]);

  // ******************************
  let [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count => count + 1);
  }
  function decrementCount() {
    if(count > 0) {
      setCount(count => count - 1);
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setState(() => ({
      ...state,
      [name]: value
    }));
  };

  // ******************************
  const handleBlur = e => {
    const { name: fieldName } = e.target;
    const faildFiels = validator(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(faildFiels)[0]
    }));
  };

  // ******************************
  const handleSubmit = async(e) => {
    e.preventDefault();
    moveHandle(4);
    nextClick('bank');
    const payload = {
      monthlySalary:state.monthlySalary,
      addIncome:state.addIncome,
      addIncomeType:state.addIncomeType,
      creditCard:state.creditCard,
      monthlyInstallments:state.monthlyInstallments,
      emirate:state.emirate,
      loanAmount:state.loanAmount,
      propertyStatus:state.propertyStatus,
      propertyValue:state.propertyValue,
      downPayment:state.downPayment,
      mortgageType:state.mortgageType,
      mortgageLength:count,
      residualFee:state.residualFee,
      transactionType:state.transactionType,
    }
    local_client = local_client.map((item, index) => {
      if (item.client.email === email) {
        return {
          ...item,
          income: payload
        }
      }
      return item
    })
    localStorage.setItem('cases', JSON.stringify(local_client))
  };

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    state,
    errors,
    incrementCount,
    decrementCount,
    count
  };
};

export default useForm;
