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
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import CustButton from '../CustButton'

const AddButton = styled(Button)(({theme})=>({
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

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Date of birth' autoComplete='off' />
})

const Client = ({moveHandle}) => {

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSelectChange = event => {
    // setLanguage(event.target.value)
  }

  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState(null)

  return (
    <>
      <Typography variant='body2' sx={{
        p: '20px 0px',
        textAlign: 'left'
      }}>
        Create an account for your client so you can track their progress and stay in control.
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
                <Typography variant='h6'>
                  Main applicant
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{
                p: '0px'
              }}>
                <CardContent >
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='First Name' placeholder='Leonard' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Last Name' placeholder='Carter' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
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
            <Box sx={{
              p: '20px',
              pt: '0px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <AddButton sx={{width: '49%'}}>
                Add co-applicant
              </AddButton>
              <AddButton sx={{width: '49%'}}>
                Add co-applicant
              </AddButton>
            </Box>
          </form>
        
      </Card>
      <Box onClick={()=>{
        moveHandle(2)
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

export default Client