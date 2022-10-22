import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Card } from "@mui/material"
import { styled } from "@mui/material"
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker"
import { useDispatch, useSelector } from 'react-redux'
import countryList from 'react-select-country-list'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import CustButton from '../CustButton'
import { default as Selection }  from 'react-select'
import useForm from './useForm'
import  { validator } from './validator'
import "react-datepicker/dist/react-datepicker.css"
import 'react-phone-number-input/style.css'
import { ConsoleLogger } from '@aws-amplify/core';

const AddButton = styled(Button)(({theme})=>({
  textTransform: 'none',
  background: 'black',
  color: 'white',
  '&:hover': {
    boxShadow: '0px 0px 10px black',
    color: 'black'
  },
}))

const ProgressLine = styled(Box)((props)=>({
  width: `${props._width}%`,
  height: '8px',
  background: props._width < 50 ? 'black' : 'blue',
}))


const Client = ({
  moveHandle,
  nextClick
}) => {
  const initState = {
    firstName:'',
    lastName:'',
    email:'',
    nationality:{ },
    employment:'',
    residency:'',
    applicant_firstName:[''],
    applicant_lastName:[''],
    applicant_email:[''],
    applicant_residency:[''],
    applicant_relationship:[''],
    borrower_firstName:[''],
    borrower_lastName:[''],
    borrower_email:[''],
    borrower_residency:[''],
    borrower_relationship:[''],
  }
  
  const submit = () => {
    console.log(" Submited");
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    state,
    errors,
    phone,
    birthDate,
    setBirthDate,
    addNewApplicant,
    handlePhone,
    addNewBorrower
  } = useForm ({
    initState,
    callback: submit,
    validator,
    moveHandle,
    nextClick
  })
  
  const handlePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0)
  const [expanded, setExpanded] = useState('panel1');
  const [applicant, setApplicant] = useState([])
  const [borrower, setBorrower] = useState([])
  const options = useMemo(() => countryList().getData(), [])
  const [local, setLocal] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    nationality:'',
    employment:'',
    residency:'',
    applicant_firstName:'',
    applicant_lastName:'',
    applicant_email:'',
    applicant_phoneNumber:'',
    applicant_residency:'',
    applicant_relationship:'',
    borrower_firstName:'',
    borrower_lastName:'',
    borrower_email:'',
    borrower_phoneNumber:'',
    borrower_residency:'',
    borrower_relationship:''
  })
  // useEffect(()=>{
  //   let temp = [
  //     state.firstName,
  //     state.lastName,
  //     state.email,
  //     phone,
  //     birthDate,
  //     state.nationality,
  //     state.employment,
  //     state.residency
  //   ]
  //   let num = 0
  //   temp.map((item, idx)=>{
  //     if(item) {
  //       num = num + 1
  //     } else {
  //       num = num
  //     }
  //   })
  //   setProgress(num * 12.5)
  //   const client = JSON.parse(localStorage.getItem('client'));
  //   console.log('client', client)
  //   if (client) {
  //     setLocal(client);
  //   }
  // }, [
  //   local,
  //   state.firstName,
  //   state.lastName,
  //   state.email,
  //   phone,
  //   birthDate,
  //   state.nationality,
  //   state.employment,
  //   state.residency
  // ])

  const addApplicant = () => {
    setApplicant([...applicant, {id:applicant.length + 1}])
    addNewApplicant(applicant.length)
  }

  const removeApplicant = (index) => {
    setApplicant(applicant.filter(item => item.id !== index))
  }

  const addBorrower = () => {
    setBorrower([...borrower, {id:borrower.length + 1}])
    addNewBorrower()
  }

  const removeBorrower = (index) => {
    setBorrower(borrower.filter(item => item.id !== index))
  }
  return (
    <>
      <Typography variant='body2' sx={{
        p: '20px 0px',
        textAlign: 'left'
      }}>
        Create an account for your client so you can track their progress and stay in control.
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Card sx={{
          borderRadius: '5px',
          boxShadow: '0px 0px 10px lightgrey',
          overflow: 'unset'
        }}>
          <Box sx={{
            height: '8px',
            background: 'lightgrey',
            borderRadius: '5px 5px 0px 0px',
            overflow: 'hidden'
          }}>
            <ProgressLine _width={progress}/>
          </Box>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handlePanel('panel1')}
            sx={{
              boxShadow: 'none',
              '.MuiAccordionSummary-content': {
                m: '10px auto !important'
              },
              '.MuiAccordionSummary-root': {
                minHeight: 'unset'
              }
            }}
          >
            <AccordionSummary
              expandIcon={<img style={{width: '20px'}} src='/images/icons/project-icons/direction.png'/>}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                p: '0px 20px',
              }}
            >
              <Typography variant='h6'>
                Main applicant
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{
              p: '0px',
            }}>
              <CardContent sx={{
                p: {xs: '10px'}
              }}>
                
                  <Grid container spacing={5}>
                    <Grid item xs={12} ss={6}>
                      <Typography variant='body2'>First Name</Typography>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label=""
                        onChange={handleChange}
                        value={local.firstName ? local.firstName :state.firstName}
                        error={errors.firstName ? true : false}
                        helperText={errors.firstName}
                        onBlur={handleBlur}
                        placeholder='Tom'
                        disabled={local.firstName ? true : false}
                        sx= {{
                          color:'black'
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} ss={6}>
                    <Typography variant='body2'>Last Name</Typography>
                      <TextField
                        autoComplete="given-name"
                        name="lastName"
                        required
                        fullWidth
                        id="lastName"
                        label=""
                        onChange={handleChange}
                        value={local.lastName ? local.lastName : state.lastName}
                        error={errors.lastName ? true : false}
                        helperText={errors.lastName}
                        onBlur={handleBlur}
                        placeholder='Richard'
                        disabled={local.lastName ? true : false}
                      />
                    </Grid>
                    <Grid item xs={12} ss={6}>
                      <Typography variant='body2'>Email</Typography>
                      <TextField
                        autoComplete="given-name"
                        name="email"
                        required
                        fullWidth
                        id="email"
                        label=""
                        onChange={handleChange}
                        value={local.email ? local.email : state.email}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                        onBlur={handleBlur}
                        placeholder='TomRichard@gmail.com'
                        disabled={local.email ? true : false}
                      />
                    </Grid>
                    <Grid item xs={12} ss={6} sx={{
                      'input':{
                        height: '50px !important',
                        borderColor: '#D9D9D9',
                        borderWidth: '0.3px',
                        borderRadius: '5px',
                        '&:hover':{
                          border: 'solid 1px black'
                        }
                      }
                    }}>
                      <Typography variant='body2'>Phone number</Typography>
                      <PhoneInput
                        required
                        fullWidth
                        id='phoneNumber'
                        placeholder="Enter phone number"
                        international
                        name='phoneNumber'
                        defaultCountry="US"
                        value={local.phoneNumber ? local.phoneNumber : phone.phoneNumber}
                        onChange={(e) => handlePhone(e, -1, 'main')}
                        disabled={local.phoneNumber ? true : false}
                      />
                    </Grid>
                    <Grid item xs={11.9} ss={6}
                      sx={{
                        'input': {
                          width: '99%',
                          height: '50px',
                          borderColor: '#D9D9D9',
                          borderWidth: '0.3px',
                          borderRadius: '5px',
                          '&:hover':{
                            border: 'solid 1px black'
                          }
                        }
                      }}
                    >
                      <Typography variant='body2'>Date of birth</Typography>
                        <DatePicker
                          selected={birthDate} 
                          name='birthDate'
                          onChange={(e) => setBirthDate(e)}
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          placeholderText='Date of birth'
                        />
                    </Grid>
                    <Grid item xs={12} ss={6}>
                      <Typography variant='body2'>Nationlity</Typography>
                      <FormControl fullwidth sx={{
                        width: '100%',
                        
                      }}>
                        <Selection 
                          options={options} 
                          required
                          fullWidth
                          id='nationality'
                          placeholder="Enter lyour nationality"
                          international
                          name='nationality'
                          defaultCountry="US"
                          value={local.nationality ? local.nationality : state.nationality}
                          onChange={handleChange}
                          error={errors.nationality ? true : false}
                          helperText={errors.nationality}
                          onBlur={handleBlur}
                          disabled={local.nationality ? true : false}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} ss={6}>
                      <Typography variant='body2'>Employment status</Typography>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>
                        </InputLabel>
                        <Select
                          defaultValue='Salaried'
                          label=''
                          onChange={handleChange}
                          labelId='form-layouts-separator-select-label'
                          name="employment"
                          required
                          fullWidth
                          id="employment"
                          value={local.employment ? local.employment : state.employment}
                          error={errors.employment ? true : false}
                          helperText={errors.employment}
                          onBlur={handleBlur}
                          disabled={local.employment ? true : false}
                        >
                          <MenuItem value='Salaried'>Salaried</MenuItem>
                          <MenuItem value='Self employed'>Self employed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} ss={6}>
                      <Typography variant='body2'>Residency status</Typography>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>
                        </InputLabel>
                        <Select
                          defaultValue=''
                          label=''
                          onChange={handleChange}
                          name='residency'
                          value={local.residency ? local.residency : state.residency}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                          disabled={local.residency ? true : false}
                        >
                          <MenuItem value='UAE National'>UAE National</MenuItem>
                          <MenuItem value='UAE Resident'>UAE Resident</MenuItem>
                          <MenuItem value='Non Resident'>Non Resident</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  {applicant.map((item, index) => 
                    item.id > 0 &&
                    <>
                      <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Typography variant='h6' style={{margin:'20px 0px 20px 0px'}}>
                          Co-applicant # {item.id}
                        </Typography>
                        <IconButton aria-label="delete" size="small" style={{display:'flex'}} onClick={() => removeApplicant(item.id)}>
                          <DeleteIcon fontSize="small" />
                          <Typography variant='body2'>Remove</Typography>
                        </IconButton>
                      </div>
                      <Grid container spacing={5}>
                        <Grid item xs={12} ss={6}>
                          <Typography variant='body2'>First Name</Typography>
                          <TextField
                            autoComplete="given-name"
                            name={`applicant_firstName_${item.id}`}
                            required
                            fullWidth
                            id="firstName"
                            label=""
                            onChange={e => handleChange(e, index)}
                            value={state.applicant_firstName[index]}
                            error={errors.firstName ? true : false}
                            helperText={errors.firstName}
                            onBlur={handleBlur}
                            placeholder='Tom'
                          />
                        </Grid>
                        <Grid item xs={12} ss={6}>
                        <Typography variant='body2'>Last Name</Typography>
                          <TextField
                              name={`applicant_lastName_${item.id}`}
                              required
                              fullWidth
                              id="lastName"
                              label=""
                              onChange={e => handleChange(e, index)}
                              value={state.applicant_lastName[index]}
                              error={errors.lastName ? true : false}
                              helperText={errors.lastName}
                              onBlur={handleBlur}
                              placeholder='Richard'
                          />
                        </Grid>
                        <Grid item xs={12} ss={6}>
                          <Typography variant='body2'>Email</Typography>
                          <TextField
                            name={`applicant_email_${item.id}`}
                            required
                            fullWidth
                            id="email"
                            label=""
                            onChange={e => handleChange(e, index)}
                            value={state.applicant_email[index]}
                            error={errors.email ? true : false}
                            helperText={errors.email}
                            onBlur={handleBlur}
                            placeholder='TomRichard@gmail.com'
                          />
                        </Grid>
                        <Grid item xs={12} ss={6} sx={{
                          'input':{
                            height: '50px !important',
                            borderColor: '#D9D9D9',
                            borderWidth: '0.3px',
                            borderRadius: '5px',
                            '&:hover':{
                              border: 'solid 1px black'
                            }
                          }
                        }}>
                          <Typography variant='body2'>Phone number</Typography>
                          <PhoneInput
                            required
                            fullWidth
                            id='phoneNumber'
                            placeholder="Enter phone number"
                            international
                            name={`applicant_phoneNumber_${item.id}`}
                            defaultCountry="US"
                            value={phone.applicant_phoneNumber[index]}
                            onChange={(e) => handlePhone(e, index, 'applicant')}
                          />
                        </Grid>
                        <Grid item xs={12} ss={6}>
                          <Typography variant='body2'>Residency status</Typography>
                          <FormControl fullWidth>
                            <InputLabel id='form-layouts-separator-select-label'>
                            </InputLabel>
                            <Select
                              defaultValue=''
                              label=''
                              onChange={e => handleChange(e, index)}
                              name={`applicant_residency_${item.id}`}
                              value={state.applicant_residency[index]}
                              id='form-layouts-separator-select'
                              labelId='form-layouts-separator-select-label'
                            >
                              <MenuItem value='UAE National'>UAE National</MenuItem>
                              <MenuItem value='UAE Resident'>UAE Resident</MenuItem>
                              <MenuItem value='Non Resident'>Non Resident</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} ss={6}>
                          <Typography variant='body2'>Relationship</Typography>
                          <FormControl fullWidth>
                            <InputLabel id='form-layouts-separator-select-label'>
                            </InputLabel>
                            <Select
                              defaultValue='Salaried'
                              label=''
                              onChange={e => handleChange(e, index)}
                              labelId='form-layouts-separator-select-label'
                              name={`applicant_relationship_${item.id}`}
                              required
                              fullWidth
                              id="relaionship"
                              value={state.applicant_relationship[index]}
                              error={errors.applicant_relationship ? true : false}
                              helperText={errors.applicant_relationship}
                              onBlur={handleBlur}
                            >
                              <MenuItem value='Father'>Father</MenuItem>
                              <MenuItem value='Mother'>Mother</MenuItem>
                              <MenuItem value='Son'>Son</MenuItem>
                              <MenuItem value='Daughter'>Daughter</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </>
                  )}
                  {borrower.map((item, index) => 
                    item.id > 0 &&
                    <>
                      <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Typography variant='h6' style={{margin:'20px 0px 20px 0px'}}>
                          Co-borrower # {item.id}
                        </Typography>
                        <IconButton aria-label="delete" size="small" style={{display:'flex'}} onClick={() => removeBorrower(item.id)}>
                          <DeleteIcon fontSize="small" />
                          <Typography variant='body2'>Remove</Typography>
                        </IconButton>
                      </div>
                      <Grid container spacing={5}>
                        <Grid item xs={12} ss={6}>
                          <Typography variant='body2'>First Name</Typography>
                          <TextField
                            autoComplete="given-name"
                            name={`borrower_firstName_${item.id}`}
                            required
                            fullWidth
                            id="firstName"
                            label=""
                            onChange={e => handleChange(e, index)}
                            value={state.borrower_firstName[index]}
                            error={errors.borrower_firstName ? true : false}
                            helperText={errors.borrower_firstName}
                            onBlur={handleBlur}
                            placeholder='Tom'
                          />
                        </Grid>
                        <Grid item xs={12} ss={6}>
                        <Typography variant='body2'>Last Name</Typography>
                          <TextField
                              name={`borrower_lastName_${item.id}`}
                              required
                              fullWidth
                              id="lastName"
                              label=""
                              onChange={e => handleChange(e, index)}
                              value={state.borrower_lastName[index]}
                              error={errors.lastName ? true : false}
                              helperText={errors.lastName}
                              onBlur={handleBlur}
                              placeholder='Richard'
                          />
                        </Grid>
                        <Grid item xs={12} ss={6}>
                          <Typography variant='body2'>Email</Typography>
                          <TextField
                            name={`borrower_email_${item.id}`}
                            required
                            fullWidth
                            id="email"
                            label=""
                            onChange={e => handleChange(e, index)}
                            value={state.borrower_email[index]}
                            error={errors.email ? true : false}
                            helperText={errors.email}
                            onBlur={handleBlur}
                            placeholder='TomRichard@gmail.com'
                          />
                        </Grid>
                        <Grid item xs={12} ss={6} sx={{
                          'input':{
                            height: '50px !important',
                            borderColor: '#D9D9D9',
                            borderWidth: '0.3px',
                            borderRadius: '5px',
                            '&:hover':{
                              border: 'solid 1px black'
                            }
                          }
                        }}>
                          <Typography variant='body2'>Phone number</Typography>
                          <PhoneInput
                            required
                            fullWidth
                            id='phoneNumber'
                            placeholder="Enter phone number"
                            international
                            name={`borrower_phoneNumber_${item.id}`}
                            defaultCountry="US"
                            value={phone.borrower_phoneNumber[index]}
                            onChange={(e) => handlePhone(e, index, 'borrower')}
                          />
                        </Grid>
                        <Grid item xs={12} ss={6}>
                          <Typography variant='body2'>Residency status</Typography>
                          <FormControl fullWidth>
                            <InputLabel id='form-layouts-separator-select-label'>
                            </InputLabel>
                            <Select
                              defaultValue=''
                              label=''
                              onChange={e => handleChange(e, index)}
                              name={`borrower_residency_${item.id}`}
                              value={state.borrower_residency[index]}
                              id='form-layouts-separator-select'
                              labelId='form-layouts-separator-select-label'
                            >
                              <MenuItem value='UAE National'>UAE National</MenuItem>
                              <MenuItem value='UAE Resident'>UAE Resident</MenuItem>
                              <MenuItem value='Non Resident'>Non Resident</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} ss={6}>
                          <Typography variant='body2'>Relationship</Typography>
                          <FormControl fullWidth>
                            <InputLabel id='form-layouts-separator-select-label'>
                            </InputLabel>
                            <Select
                              defaultValue='Salaried'
                              label=''
                              onChange={e => handleChange(e, index)}
                              labelId='form-layouts-separator-select-label'
                              name={`borrower_relationship_${item.id}`}
                              required
                              fullWidth
                              id="relaionship"
                              value={state.borrower_relationship[index]}
                              error={errors.borrower_relationship ? true : false}
                              helperText={errors.borrower_relationship}
                              onBlur={handleBlur}
                            >
                              <MenuItem value='Father'>Father</MenuItem>
                              <MenuItem value='Mother'>Mother</MenuItem>
                              <MenuItem value='Son'>Son</MenuItem>
                              <MenuItem value='Daughter'>Daughter</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </>
                  )}
              </CardContent>
            </AccordionDetails>
          </Accordion>
          <Box sx={{
            p: {xs: '10px', sm: '20px'},
            pt: '0px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: {xs: 'column', sm: 'row'},
          }}>
            <AddButton 
              sx={{
                width: {xs:'100%', sm:'49%'}
              }}
              onClick={() => addBorrower()}
            >
              Add co-borrower
            </AddButton>
            <AddButton 
              sx={{
                width: {xs:'100%', sm:'49%'},
                mt: {xs: '10px', sm: '0px'}
              }}
              onClick={() => addApplicant()}
            >  
              Add co-applicant
            </AddButton>
          </Box>
          
        </Card>
        <Box sx={{
          p: '30px 0px',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <CustButton 
            mw={150} 
          >
            Next step
          </CustButton>
        </Box>
      </Box>
    </>
  )
}

export default Client