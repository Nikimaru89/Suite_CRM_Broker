import { useState, useEffect } from "react";
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import AWS from 'aws-sdk'
import axios from 'axios'
import { getCountryCode } from "./Validator";
import { signup } from '../../actions/auth';
// ******************************

const S3_BUCKET ='bcf-broker';
const REGION ='eu-west-2';

AWS.config.update({
    accessKeyId: 'AKIAWPEJKNXDD472SWMI',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET},
  region: REGION,
}) 

const useForm = ({ initState, callback, validator }) => {
  const { addToast } = useToasts(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [license, setLicense] = useState(null)
  const [id, setID] = useState(null)
  const [passport, setPassport] = useState(null)
  const [loading, setLoading ] = useState(false)
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  const [countryCode, setCountryCode] = useState("GB");
  // ******************************
  useEffect(() => {
    const isValidErrors = () =>
      Object.values(errors).filter(error => typeof error !== "undefined")
        .length > 0;
    if (isSubmited && !isValidErrors()) callback();
  }, [errors]);

  // ******************************
  const handleChange = e => {
    const { name, value } = e.target;
    setState(() => ({
      ...state,
      [name]: value
    }));
    if (name === "phone") {
      const country = getCountryCode(value);
      setCountryCode(() => country);
    }
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
    dispatch(signup(state.email))
    setLoading(true);
    try {
      await Auth.signUp({
        username: state.email,
        password: state.email,
        attributes:{
          email: state.email,
          phone_number: state.phone,
          name: state.name.replace(/ /g, ''),
          'custom:CompanyName': state.companyName
        },
        autoSignIn: { 
          enabled: true,
        }
      })
      
      addToast('You have signed up successfully.', {
        appearance:'success',
        autoDismiss:true
      })
      navigate('/confirmation')
    }
    catch (error) {
      addToast(error.message, {
        appearance:'error',
        autoDismiss:true
      })
    }
   
    // try {
    //   let data = new FormData();
    //   data.append('method', 'set_entries');
    //   data.append('input_type','JSON');
    //   data.append('response_type','JSON');
    //   data.append(
    //     'rest_data',
    //     JSON.stringify({
    //       "session":"rphbdg47qe961cc8rggi85rug8",
    //       "module_name":"Accounts",
    //       "name_value_list":[{
    //         "name":state.name.replace(/ /g, ''),
    //         "phone_office":state.phone,
    //         "email1":state.email,
    //         "company_c":state.companyName
    //       }]
    //     })
    //     JSON.stringify({
    //       "user_auth": {
    //       "user_name":"admin",
    //       "password":"21232f297a57a5a743894a0e4a801fc3"
    //       },
    //       "application_name": "suiteCrm",
    //       "name_value_list": {
    //         "name":"hello",
    //         "value":"test"
    //       }
    //     })
    //   )
    //   const response = await axios.post('http://3.232.194.218/service/v4_1/rest.php', data)
    //   console.log('res', response.data)
    //   if(response.status === 200) {
    //     console.log('success')
    //   }
    // }
    // catch (errors) {
    //   console.log('errors', errors)
    // }

    if (license) {
      const params1 = {
        Body: license,
        Bucket: S3_BUCKET,
        Key: `${state.name}/` + license?.name
      };
  
      myBucket.putObject(params1)
        .on('httpUploadProgress', (evt) => {
        })
        .send((err) => {
            if (err) console.log(err)
        })
    }
    if (id) {
      const params2 = {
        Body: id,
        Bucket: S3_BUCKET,
        Key: `${state.name}/` + id?.name
      };
    
      myBucket.putObject(params2)
        .on('httpUploadProgress', (evt) => {
        })
        .send((err) => {
            if (err) console.log(err)
        })
    }
    if (passport) {
      const params3 = {
        Body: passport,
        Bucket: S3_BUCKET,
        Key: `${state.name}/` + passport?.name
      };
      
      myBucket.putObject(params3)
        .on('httpUploadProgress', (evt) => {
        })
        .send((err) => {
            if (err) console.log(err)
        })
    }
    setLoading(false)
  };

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    state,
    errors,
    countryCode,
    loading,
    setLicense,
    setID,
    setPassport,
    license,
    id,
    passport
  };
};

export default useForm;
