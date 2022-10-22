import { useState, useEffect } from 'react'
import { Box, Typography, Card, Button } from "@mui/material"
import { styled } from "@mui/material"
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import DatePicker from "react-datepicker"
import { useDispatch, useSelector } from 'react-redux'
import CustButton from '../CustButton'
import "react-datepicker/dist/react-datepicker.css"
import useForm from './useForm'
import { validator } from './validator'

const ProgressLine = styled(Box)((props)=>({
  width: `${props._width}%`,
  height: '8px',
  background: (props._width < 50 ? 'black' : 'blue') || 'lightgrey',
}))

const PlusButton = styled(Button)({
  backgroundColor: 'black',
  borderRadius: '100px',
  fontSize: "15px",
  fontColor: "white",
  color:'white',
  minWidth: '40px',
  height: "40px",
  '&:hover': {
    backgroundColor:'black'
  }
})

const Income = ({moveHandle, nextClick}) => {
  const firstName = useSelector(state => state.client.currentUser.firstName);
  const lastName = useSelector(state => state.client.currentUser.lastName);
  const email = useSelector(state => state.client.currentUser.email);
  const local_client = JSON.parse(localStorage.getItem('cases'));
  
  const [progress1, setProgress1] = useState(0)
  const [expanded, setExpanded] = useState('panel1');
 
  const [progress2, setProgress2] = useState(0)
  
  useEffect(()=>{
    let temp = [
     
    ]
    let num = 0
    temp.map((item, idx)=>{
      if(item) {
        num = num + 1
      } else {
        num = num
      }
    })
    setProgress1(num * 11.12)

  }, [])

const submit = () => {
  console.log(" Submited");
};

const initState = {
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
  residualFee:'',
  transactionType:''
}

const {
  handleSubmit,
  handleChange,
  handleBlur,
  state,
  errors,
  incrementCount,
  decrementCount,
  count
  } = useForm ({
  initState,
  callback: submit,
  validator,
  moveHandle,
  nextClick,
  email,
  local_client
})

const handlePanel = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : true);
};

return (
  <>
    <Typography variant='body2'sx={{
      p: '20px 0px',
      textAlign: 'left'
    }}>
      Fill in all the money information about the income, property and mortgage information.
    </Typography>
    <Box component='form' noValidate onSubmit={handleSubmit}>
      <Card sx={{
        borderRadius: '5px',
        overflow: 'unset',
        boxShadow: '0px 0px 10px lightgrey'
      }}>
        <Box sx={{
          height: '8px',
          background: 'lightgrey',
          borderRadius: '5px 5px 0px 0px',
          overflow: 'hidden'
        }}>
          <ProgressLine _width={progress1}/>
        </Box>
        
        <Accordion
            expanded={expanded === 'panel1'}
            onChange={handlePanel('panel1')}
            sx={{
              boxShadow: 'none',
              '.MuiAccordionSummary-content':{
                margin: '10px 0px'
              }
            }}
          >
            <AccordionSummary
              expandIcon={<img style={{width: '20px'}} src='/images/icons/project-icons/direction.png'/>}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{p: '0px 20px',}}
            >
              <Box sx={{
                textAlign: 'left',
              }}>
                <Typography variant='h6'>
                  {`${firstName} ${lastName}`}
                </Typography>
                <Typography variant='body2'>
                  Main applicant
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{
              p: '0px'
            }}>
              <CardContent >
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Grid item xs={12} md={5.9}>
                      <Typography variant='body2'>
                        Fixed Monthly Salary
                      </Typography>
                      <TextField
                        sx={{width: '98%'}}
                        required
                        fullWidth
                        type='number'
                        label=''
                        placeholder='20,000'
                        name="monthlySalary"
                        id="monthlySalary"
                        onChange={handleChange}
                        value={state.monthlySalary}
                        error={errors.monthlySalary ? true : false}
                        helperText={errors.monthlySalary}
                        onBlur={handleBlur}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>
                      Additional Income
                    </Typography>
                    <TextField
                      sx={{width: '98%'}}
                      required
                      fullWidth
                      type='number'
                      label=''
                      placeholder='50,000'
                      name="addIncome"
                      id="addIncome"
                      onChange={handleChange}
                      value={state.addIncome}
                      error={errors.addIncome ? true : false}
                      helperText={errors.addIncome}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>
                      Additional income type
                    </Typography>
                    <FormControl fullwidth sx={{
                      width: '100%',
                    }}>
                      <Select
                        label=''
                        defaultValue=''
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                        name='addIncomeType'
                        value={state.addIncomeType}
                        onChange={handleChange}
                      >
                        <MenuItem value='Rental'>Rental</MenuItem>
                        <MenuItem value='Bonus'>Bonus</MenuItem>
                        <MenuItem value='Commission'>Commission</MenuItem>
                        <MenuItem value='Allowance'>Allowance</MenuItem>
                        <MenuItem value='Other'>Other</MenuItem>
                      </Select> 
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>
                      Total credit card limit
                    </Typography>
                    <TextField
                       sx={{width: '98%'}}
                       required
                       fullWidth
                       type='number'
                       label=''
                       placeholder='50,000'
                       name="creditCard"
                       id="creditCard"
                       onChange={handleChange}
                       value={state.creditCard}
                       error={errors.creditCard ? true : false}
                       helperText={errors.creditCard}
                       onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>
                      Monthly fixed installments
                    </Typography>
                    <TextField
                       sx={{width: '98%'}}
                       required
                       fullWidth
                       type='number'
                       label=''
                       placeholder='6,000'
                       name="monthlyInstallments"
                       id="monthlyInstallments"
                       onChange={handleChange}
                       value={state.monthlyInstallments}
                       error={errors.monthlyInstallments ? true : false}
                       helperText={errors.monthlyInstallments}
                       onBlur={handleBlur}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </AccordionDetails>
        </Accordion>
        
      </Card>
      <Card sx={{
        borderRadius: '5px',
        mt: '30px',
        boxShadow: '0px 0px 10px lightgrey'
      }}>
        <Box sx={{
          height: '8px',
          background: 'lightgrey'
        }}>
          <ProgressLine _width={progress2}/>
        </Box>
        <Accordion
            expanded={expanded === 'panel2'}
            onChange={handlePanel('panel2')}
            sx={{
              boxShadow: 'none',
              '.MuiAccordionSummary-content':{
                margin: '10px 0px'
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
              <Box>
                <Typography variant='h6'>
                  Mortgage details
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{
              p: '0px'
            }}>
              <CardContent >
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Grid item xs={12} md={5.8}>
                      <Typography variant='body2'>Which Emirate?</Typography>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>
                        </InputLabel>
                        <Select
                          defaultValue=''
                          label=''
                          name='emirate'
                          value={state.emirate}
                          // onChange={(e)=>setWhichEmirate(e.target.value)}
                          onChange={handleChange}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='Dubai'>Dubai</MenuItem>
                          <MenuItem value='Abu Dhabi'>Abu Dhabi</MenuItem>
                          <MenuItem value='Sharjah'>Sharjah</MenuItem>
                          <MenuItem value='Ajman'>Ajman</MenuItem>
                          <MenuItem value='Ras AI Khaimah'>Ras AI Khaimah</MenuItem>
                          <MenuItem value='Fujairah'>Fujairah</MenuItem>
                          <MenuItem value='Umm AI Quwain'>Umm AI Quwain</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>Loan amount</Typography>
                    <TextField
                        sx={{width: '98%'}}
                        required
                        fullWidth
                        type='number'
                        label=''
                        placeholder='6,000'
                        name="loanAmount"
                        id="loanAmount"
                        onChange={handleChange}
                        value={state.loanAmount}
                        error={errors.loanAmount ? true : false}
                        helperText={errors.loanAmount}
                        onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>Property status</Typography>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>
                      </InputLabel>
                      <Select
                        defaultValue=''
                        label=''
                        name='propertyStatus'
                        value={state.propertyStatus}
                        onChange={handleChange}
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                      >
                        <MenuItem value='Ready'>Ready</MenuItem>
                        <MenuItem value='Under Construction'>Under Construction</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>Property value</Typography>
                    <TextField
                        sx={{width: '98%'}}
                        required
                        fullWidth
                        type='number'
                        label=''
                        placeholder='500,000'
                        name="propertyValue"
                        id="propertyValue"
                        onChange={handleChange}
                        value={state.propertyValue}
                        error={errors.propertyValue ? true : false}
                        helperText={errors.propertyValue}
                        onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>Downpayment(%)</Typography>
                    <TextField
                        sx={{width: '98%'}}
                        required
                        fullWidth
                        type='number'
                        label=''
                        placeholder='500,000'
                        name="downPayment"
                        id="downPayment"
                        onChange={handleChange}
                        value={state.downPayment}
                        error={errors.downPayment ? true : false}
                        helperText={errors.downPayment}
                        onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>Mortgage type</Typography>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>
                      </InputLabel>
                      <Select
                        defaultValue=''
                        label=''
                        name='mortgageType'
                        value={state.mortgageType}
                        onChange={handleChange}
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                      >
                        <MenuItem value='Conventional'>Conventional</MenuItem>
                        <MenuItem value='Islamic'>Islamic</MenuItem>
                        <MenuItem value='Best possible rate'>Best possible rate</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>
                      Mortgage length(years)
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
                      <PlusButton onClick={decrementCount}>
                        -
                      </PlusButton>

                      <TextField
                        sx={{ width: '38%' }}
                        required
                        fullWidth
                        type='text'
                        label=''
                        placeholder='500,000'
                        name="mortgageLength"
                        id="mortgageLength"
                        onChange={handleChange}
                        value={count}
                        error={errors.mortgageLength ? true : false}
                        helperText={errors.mortgageLength}
                        onBlur={handleBlur}
                      />
                      <PlusButton onClick={incrementCount}>
                        +
                      </PlusButton>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>
                      Add Residual Assoclate fee?
                    </Typography>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>
                      </InputLabel>
                      <Select
                        defaultValue=''
                        label=''
                        name='residualFee'
                        value={state.residualFee}
                        onChange={handleChange}
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                      >
                        <MenuItem value='Yes'>Yes</MenuItem>
                        <MenuItem value='No'>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='body2'>
                      Transaction type
                    </Typography>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>
                        
                      </InputLabel>
                      <Select
                        defaultValue=''
                        label=''
                        name='transactionType'
                        vlaue={state.transactionType}
                        onChange={handleChange}
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                      >
                        <MenuItem value='Handover payment'>Handover payment</MenuItem>
                        <MenuItem value='Primary purchase'>Primary purchase</MenuItem>
                        <MenuItem value='Resale'>Resale</MenuItem>
                        <MenuItem value='Buyout-equity'>Buyout-equity</MenuItem>
                        <MenuItem value='Buyout'>Buyout</MenuItem>
                        <MenuItem value='Equity'>Equity</MenuItem>
                        <MenuItem value='Handover resale'>Handover resale</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </AccordionDetails>
        </Accordion>
      </Card>
      <Box sx={{
        p: '30px 0px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <CustButton mw={150}>
          Next step
        </CustButton>
      </Box>
    </Box>
  </>
)
}

export default Income