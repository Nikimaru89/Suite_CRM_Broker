import React, { useState } from 'react';
import { 
  CircularProgress, 
  Button, 
  Avatar, 
  CssBaseline, 
  TextField, 
  Grid,
  Box,
  Typography,
  Container 
} from '@mui/material';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhoneInput from 'react-phone-number-input';
import PhoneNumber from "./PhoneNumber";
import { validator } from "./Validator";
import useForm from "./useForm";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const initState = {
    name: "",
    companyName: "",
    phone: "+44",
    email:"",
  };

  const submit = () => {
    console.log(" Submited");
  };
  
  const {
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
  } = useForm({
    initState,
    callback: submit,
    validator,
  });


  
  const handleLicense = (e) => {
    setLicense(e.target.files[0])
  }
  const handleID = (e) => {
    setID(e.target.files[0])
  }
  const handlePassport = (e) => {
    console.log('passport')
    setPassport(e.target.files[0])
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom:'20px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#6E4EE7' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  onChange={handleChange}
                  value={state.name}
                  error={errors.name ? true : false}
                  helperText={errors.name}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                  autoComplete="companyName"
                  onChange={handleChange}
                  value={state.companyName}
                />
              </Grid>
              <Grid item xs={6}>
                <PhoneNumber
                  fullWidth
                  errors={errors}
                  state={state}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  countryCode={countryCode}
                />
                {/* <PhoneInput
                  className='phone-number-input'
                  type='phone'
                  placeholder="Enter phone number"
                  international
                  defaultCountry="US"
                  value={state.phone}
                  onChange={handleChange}
                  error={errors.phone ? true : false}
                  helperText={errors.phone}
                  onBlur={handleBlur}
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={state.email}
                  error={errors.email ? true : false}
                  helperText={errors.email}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} style={{display:'flex', flexDirection:'column', gap:5}}>
                <Typography variant='body'>Trade license</Typography>
                <div style={{border: '1px solid lightgrey', padding: '10px',borderRadius: '4px'}}>
                  <div>
                    <input type="file" id="license-btn" hidden onChange={e => handleLicense(e)}/>
                    <label 
                      for="license-btn" 
                      style={{
                        backgroundColor: '#6E4EE7',
                        color: 'white',
                        padding: '0.5rem',
                        fontFamily: 'sans-serif',
                        borderRadius: '0.3rem',
                        cursor: 'pointer',
                        marginTop: '1rem'
                      }}
                    >
                      Choose File
                    </label>
                    <span id="file-chosen" style={{marginLeft: '1rem', fontFamily: 'sans-serif'}}>
                      {license?.name ? license.name : ''}
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} style={{display:'flex', flexDirection:'column', gap:5}}>
                <Typography variant='body'>ID</Typography>
                <div style={{border: '1px solid lightgrey', padding: '10px',borderRadius: '4px'}}>
                  <div>
                    <input type="file" id="id-btn" hidden onChange={e => handleID(e)}/>
                    <label 
                      for="id-btn" 
                      style={{
                        backgroundColor: '#6E4EE7',
                        color: 'white',
                        padding: '0.5rem',
                        fontFamily: 'sans-serif',
                        borderRadius: '0.3rem',
                        cursor: 'pointer',
                        marginTop: '1rem'
                      }}
                    >
                      Choose File
                    </label>
                    <span id="file-chosen" style={{marginLeft: '1rem', fontFamily: 'sans-serif'}}>
                      {id?.name ? id.name : ''}
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} style={{display:'flex', flexDirection:'column', gap:5}}>
                <Typography variant='body'>Passport</Typography>
                <div style={{border: '1px solid lightgrey', padding: '10px',borderRadius: '4px'}}>
                  <div>
                    <input type="file" id="passport-btn" hidden onChange={(e) => handlePassport(e)}/>
                    <label 
                      for="passport-btn" 
                      style={{
                        backgroundColor: '#6E4EE7',
                        color: 'white',
                        padding: '0.5rem',
                        fontFamily: 'sans-serif',
                        borderRadius: '0.3rem',
                        cursor: 'pointer',
                        marginTop: '1rem'
                      }}
                    >
                      Choose File
                    </label>
                    <span id="file-chosen" style={{marginLeft: '1rem', fontFamily: 'sans-serif'}}>
                      {passport?.name ? passport.name : ''}
                    </span>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: 'none', background:'#6E4EE7' }}
            >
            {loading && <CircularProgress />}
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        <Copyright sx={{ mt: 5 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}