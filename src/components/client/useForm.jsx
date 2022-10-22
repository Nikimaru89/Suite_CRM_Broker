import { useState, useEffect } from "react";
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';
import * as AWS from 'aws-sdk';
import { client } from '../../actions/client'; 
// ******************************

const useForm = ({ initState, callback, validator, moveHandle, nextClick }) => {
  const docClient = new AWS.DynamoDB.DocumentClient()
  const { addToast } = useToasts(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading ] = useState(false)
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  const [phone, setPhone] = useState({
    phoneNumber:'',
    applicant_phoneNumber:[''],
    borrower_phoneNumber:['']
  })
  const [birthDate, setBirthDate] = useState('')
  // ******************************
  useEffect(() => {
    const isValidErrors = () =>
      Object.values(errors).filter(error => typeof error !== "undefined")
        .length > 0;
    if (isSubmited && !isValidErrors()) callback();
  }, [errors]);

  // ******************************
  const handleChange = (e, index) => {
    if (e.label) {
      setState(() => ({
        ...state,
        ['nationality']:e
      }))
    }
    const { name, value } = e.target;

    if (name.slice(0, 19) === 'applicant_firstName') {
      setState(prevState => ({
        ...prevState,
        applicant_firstName: [...(prevState.applicant_firstName.map((name,idx) => index === idx ? e.target.value : name))]
      }));
    }
    else if (name.slice(0, 18) === 'applicant_lastName') {
      setState(prevState => ({
        ...prevState,
        applicant_lastName: [...(prevState.applicant_lastName.map((name,idx) => index === idx ? e.target.value : name))]
      }));
    }
    else if (name.slice(0, 15) === 'applicant_email') {
      setState(prevState => ({
        ...prevState,
        applicant_email: [...(prevState.applicant_email.map((name,idx) => index === idx ? e.target.value : name))]
      }));
    }
    else if (name.slice(0, 19) === 'applicant_residency') {
      setState(prevState => ({
        ...prevState,
        applicant_residency: [...(prevState.applicant_residency.map((name, idx) => index === idx ? e.target.value: name))]
      }));
    }
    else if (name.slice(0, 22) === 'applicant_relationship') {
      setState(prevState => ({
        ...prevState,
        applicant_relationship: [...(prevState.applicant_relationship.map((name, idx) => index === idx ? e.target.value: name))]
      }));
    }
    else if (name.slice(0, 18) === 'borrower_firstName') {
      setState(prevState => ({
        ...prevState,
        borrower_firstName: [...(prevState.borrower_firstName.map((name,idx) => index === idx ? e.target.value : name))]
      }));
    }
    else if (name.slice(0, 17) === 'borrower_lastName') {
      setState(prevState => ({
        ...prevState,
        borrower_lastName: [...(prevState.borrower_lastName.map((name,idx) => index === idx ? e.target.value : name))]
      }));
    }
    else if (name.slice(0, 14) === 'borrower_email') {
      setState(prevState => ({
        ...prevState,
        borrower_email: [...(prevState.borrower_email.map((name,idx) => index === idx ? e.target.value : name))]
      }));
    }
    else if (name.slice(0, 18) === 'borrower_residency') {
      setState(prevState => ({
        ...prevState,
        borrower_residency: [...(prevState.borrower_residency.map((name, idx) => index === idx ? e.target.value: name))]
      }));
    }
    else if (name.slice(0, 21) === 'borrower_relationship') {
      setState(prevState => ({
        ...prevState,
        borrower_relationship: [...(prevState.borrower_relationship.map((name, idx) => index === idx ? e.target.value: name))]
      }));
    }
    else {
      setState(() => ({
        ...state,
        [name]: value
      }));
    }
  };

  // ******************************
  const handleBlur = e => {
    if (e.label) {
      fieldName = 'nationality'
    }
    const { name: fieldName } = e.target;
    const faildFiels = validator(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(faildFiels)[0]
    }));
  };

  const addNewApplicant = (index) => {
    const {applicant_firstName, applicant_lastName, applicant_email, applicant_residency, applicant_relationship} = state
    const {applicant_phoneNumber} = phone
    if (index > 0) {
      setState(prevState => ({
        ...prevState,
        applicant_firstName:[...applicant_firstName, ''],
        applicant_lastName:[...applicant_lastName, ''],
        applicant_email:[...applicant_email, ''],
        applicant_residency:[...applicant_residency, ''],
        applicant_relationship: [...applicant_relationship, '']
      }));
      setPhone(prevState => ({
        ...prevState,
        applicant_phoneNumber:[...applicant_phoneNumber, ''],
      }));
    }
    
  }

  const addNewBorrower = (index) => {
    const {borrower_firstName, borrower_lastName, borrower_email, borrower_residency, borrower_relationship} = state
    const {borrower_phoneNumber} = phone
    if (index > 0) {
    setState(prevState => ({
      ...prevState,
      borrower_firstName:[...borrower_firstName, ''],
      borrower_lastName:[...borrower_lastName, ''],
      borrower_email:[...borrower_email, ''],
      borrower_residency:[...borrower_residency, ''],
      borrower_relationship: [...borrower_relationship, '']
    }));
    setPhone(prevState => ({
      ...prevState,
      borrower_phoneNumber:[...borrower_phoneNumber, '']
    }));
    }
  }

  const handlePhone = (e, index, type) => {
    if (type === 'main') {
      setPhone({...phone, phoneNumber:e})
    }
    else if (type === "applicant") {
      setPhone(prevState => ({
        ...prevState,
        applicant_phoneNumber:[...(prevState.applicant_phoneNumber.map((name,idx) => index === idx ? e : name))]
      }))
    }
    else if (type === "borrower") {
      setPhone(prevState => ({
        ...prevState,
        borrower_phoneNumber:[...(prevState.borrower_phoneNumber.map((name,idx) => index === idx ? e : name))]
      }))
    }
  }
  // ******************************
  const handleSubmit = async(e) => {
    e.preventDefault();
    moveHandle(2);
    nextClick('income');
    
    const payload = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phoneNumber: phone.phoneNumber,
      birthDate: `${birthDate?.getDate()}/${birthDate?.getMonth() + 1}/${birthDate?.getFullYear()}`,
      nationality: state.nationality?.label,
      employment: state.employment,
      residency: state.residency,
      // applicant_firstName:state.applicant_firstName,
      // applicant_lastName:state.applicant_lastName,
      // applicant_email:state.applicant_email,
      // applicant_phoneNumber:phone.applicant_phoneNumber,
      // applicant_residency:state.applicant_residency,
      // applicant_relationship:state.applicant_relationship,
      // borrower_firstName:state.borrower_firstName,
      // borrower_lastName:state.borrower_lastName,
      // borrower_email:state.borrower_email,
      // borrower_phoneNumber:phone.borrower_phoneNumber,
      // borrower_residency:state.borrower_residency,
      // borrower_relationship:state.borrower_relationship,
    }

    const context = {
      clientId:'10'
    }

    dispatch(client({
      firstName:state.firstName,
      lastName:state.lastName,
      email:state.email 
    }))
    const client = await axios.post('/save_client_data', payload, context);
    console.log('broker_client', client)
    };

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    state,
    errors,
    phone,
    setPhone,
    birthDate,
    setBirthDate,
    addNewApplicant,
    handlePhone,
    addNewBorrower
  };
};

export default useForm;
