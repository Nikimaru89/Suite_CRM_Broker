import { forwardRef, useState } from 'react'
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
import DatePicker from 'react-datepicker'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import OutlinedInput from '@mui/material'
import CustButton from '../CustButton'
import InputAdornment from '@mui/material'
import IconButton from '@mui/material'

const ProgressLine = styled(Box)((props)=>({
  width: `${props._width}%`,
  height: '8px',
  background: props._width < 50 ? 'black' : 'blue',
}))

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Date of birth' autoComplete='off' />
})

const AddButton = styled(Button)(({theme})=>({
  background: 'black',
  color: 'white',
  '&:hover': {
    boxShadow: '0px 0px 10px black',
    color: 'black'
  },
}))

const Income = ({moveHandle}) => {

  const [expanded, setExpanded] = useState(true);
  const [date, setDate] = useState(null)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  const handleSelectChange = event => {
    // setLanguage(event.target.value)
  }

  const handleClickShowPassword = () => {

  }

  const handleMouseDownPassword = () => {

  }

  return (
    <>
      <Typography variant='body2'sx={{
        p: '20px 0px',
        textAlign: 'left'
      }}>
        Fill in all the money information about the income, property and mortgage information.
      </Typography>
      <Card sx={{borderRadius: '5px'}}>
        <ProgressLine _width={35}/>
          <form onSubmit={e => e.preventDefault()}>
          <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              sx={{
                boxShadow: 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<img style={{width: '20px'}} src='/images/icons/project-icons/direction.png'/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{p: '0px 20px'}}
              >
                <Box sx={{
                  textAlign: 'left'
                }}>
                  <Typography variant='h6'>
                    Shane Goodgie
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
                      <Grid item xs={12} sm={6}>
                        <TextField
                          sx={{width: '98%'}}
                          fullWidth
                          label='Fixed Monthly Salary'
                          placeholder='Leonard'
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type='number'
                        label='Additional Income'
                        placeholder='Carter'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type='text'
                        label='Additional income type'
                        placeholder=''
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='Total credit card limit'
                        placeholder='30,000'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='Monthly fixed installments'
                        placeholder='6,000'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DatePicker
                        selected={date}
                        showYearDropdown
                        showMonthDropdown
                        placeholderText='MM-DD-YYYY'
                        customInput={<CustomInput />}
                        id='form-layouts-separator-date'
                        onChange={date => setDate(date)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>Nationlity</InputLabel>
                        <Select
                          label='Country'
                          defaultValue=''
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='Western'>Western Sahara</MenuItem>
                          <MenuItem value='Estonia'>Estonia</MenuItem>
                          <MenuItem value='Kazakhstan'>Kazakhstan</MenuItem>
                          <MenuItem value='Kyrgyzstan'>Kyrgyzstan</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>Employment status</InputLabel>
                        <Select
                          defaultValue=''
                          label='Employment status'
                          onChange={handleSelectChange}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='English'>Salaried</MenuItem>
                          <MenuItem value='French'>Self employed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>Residency status</InputLabel>
                        <Select
                          defaultValue=''
                          label='Residency status'
                          onChange={handleSelectChange}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='French'>UAE National</MenuItem>
                          <MenuItem value='English'>UAE Resident</MenuItem>
                          <MenuItem value='French'>Non Resident</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </AccordionDetails>
          </Accordion>
        </form>
      </Card>
      <Card sx={{borderRadius: '5px', mt: '30px'}}>
        <ProgressLine _width={35}/>
          <form onSubmit={e => e.preventDefault()}>
          <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
              sx={{
                boxShadow: 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<img style={{width: '20px'}} src='/images/icons/project-icons/direction.png'/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{p: '0px 20px'}}
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
                      <Grid item xs={12} sm={5.9}>
                        <FormControl fullWidth>
                          <InputLabel id='form-layouts-separator-select-label'>
                            Which Emirate?
                          </InputLabel>
                          <Select
                            defaultValue=''
                            label='Which Emirate?'
                            onChange={handleSelectChange}
                            id='form-layouts-separator-select'
                            labelId='form-layouts-separator-select-label'
                          >
                            <MenuItem value='Dubai'>Dubai</MenuItem>
                            <MenuItem value='Abu'>Abu Dhabi</MenuItem>
                            <MenuItem value='Sharjah'>Sharjah</MenuItem>
                            <MenuItem value='Ajman'>Ajman</MenuItem>
                            <MenuItem value='Ras'>Ras AI Khaimah</MenuItem>
                            <MenuItem value='Fujairah'>Fujairah</MenuItem>
                            <MenuItem value='Umm'>Umm AI Quwain</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type='number'
                        label='Loan amount'
                        placeholder='500,000'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>
                          Property status
                        </InputLabel>
                        <Select
                          defaultValue=''
                          label='Property status'
                          onChange={handleSelectChange}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='Ready'>Ready</MenuItem>
                          <MenuItem value='Under'>Under Construction</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='Property value'
                        placeholder='500,000'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='Downpayment(%)'
                        placeholder='30'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>
                          Mortgage type
                        </InputLabel>
                        <Select
                          defaultValue=''
                          label='Mortgage type'
                          onChange={handleSelectChange}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='Conventional'>Conventional</MenuItem>
                          <MenuItem value='Islamic'>Islamic</MenuItem>
                          <MenuItem value='Best'>Best possible rate</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='Mortgage length(years)'
                        placeholder='6,000'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>
                          Add Residual Assoclate fee?
                        </InputLabel>
                        <Select
                          defaultValue=''
                          label='Add Residual Assoclate fee?'
                          onChange={handleSelectChange}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='Yes'>Yes</MenuItem>
                          <MenuItem value='No'>No</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>
                          Transaction type
                        </InputLabel>
                        <Select
                          defaultValue=''
                          label='Transaction type'
                          onChange={handleSelectChange}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='payment'>Handover payment</MenuItem>
                          <MenuItem value='purchase'>Primary purchase</MenuItem>
                          <MenuItem value='Resale'>Resale</MenuItem>
                          <MenuItem value='equity'>Buyout-equity</MenuItem>
                          <MenuItem value='Buyout'>Buyout</MenuItem>
                          <MenuItem value='Equity'>Equity</MenuItem>
                          <MenuItem value='resale'>Handover resale</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='Monthly fixed installments'
                        placeholder='6,000'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DatePicker
                        selected={date}
                        showYearDropdown
                        showMonthDropdown
                        placeholderText='MM-DD-YYYY'
                        customInput={<CustomInput />}
                        id='form-layouts-separator-date'
                        onChange={date => setDate(date)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>Nationlity</InputLabel>
                        <Select
                          label='Country'
                          defaultValue=''
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='Western'>Western Sahara</MenuItem>
                          <MenuItem value='Estonia'>Estonia</MenuItem>
                          <MenuItem value='Kazakhstan'>Kazakhstan</MenuItem>
                          <MenuItem value='Kyrgyzstan'>Kyrgyzstan</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>Employment status</InputLabel>
                        <Select
                          defaultValue=''
                          label='Employment status'
                          onChange={handleSelectChange}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='English'>Salaried</MenuItem>
                          <MenuItem value='French'>Self employed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-select-label'>Residency status</InputLabel>
                        <Select
                          defaultValue=''
                          label='Residency status'
                          onChange={handleSelectChange}
                          id='form-layouts-separator-select'
                          labelId='form-layouts-separator-select-label'
                        >
                          <MenuItem value='French'>UAE National</MenuItem>
                          <MenuItem value='English'>UAE Resident</MenuItem>
                          <MenuItem value='French'>Non Resident</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </AccordionDetails>
          </Accordion>
        </form>
      </Card>
      <Box onClick={()=>{
        moveHandle(4)
      }} sx={{
        p: '30px 0px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <CustButton mw={150}>
          Next step
        </CustButton>
      </Box>
    </>
  )
}

export default Income