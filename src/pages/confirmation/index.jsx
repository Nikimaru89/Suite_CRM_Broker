import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress
} from '@mui/material'
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Auth, sectionHeader } from 'aws-amplify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const theme = createTheme();

export default function Confirmation() {
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false)
  const [code, setCode] = useState('')
  const email = useSelector(state => state.auth.currentUser.email)
  console.log('email', email, 'code', code)

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await Auth.confirmSignUp(email, code);
      addToast('Your email is successfully confirmed', {
        appearance:'success',
        autoDismiss:true
      })
      navigate('/login')
    }
    catch (error) {
      addToast(error.message, {
        appearance:'error',
        autoDismiss:true
      })
    }
    setLoading(false)
  };
  
  const handleResend = async () => {
    try {
      await Auth.resendSignUp(email);
      addToast('verification code was successfully send',{
        appearance:'success',
        autoDismiss:true
      })
    } 
    catch (error) {
      addToast(error.message, {
        appearance:'error',
        autoDismiss:true
      })
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Box component="main" sx={{
        maxWidth: '450px',
        width: '100%',
        p: '20px',
        marginTop:'65px'
      }}>
        <CssBaseline />
        <Box>
          <Typography>Already have access?&nbsp;
            <Link to='/login'>Sign in</Link>
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography component="h1" variant="h4">
            Confirm for Brokers
          </Typography>
          <Typography component="h1" variant="body2" sx={{
            my: '20px'
          }}>
            We'll help you close clients faster and earn higher commission.<br/>
            What's not to like?
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="verification"
              label="Verification Code"
              name="verification"
              autoComplete="verification"
              autoFocus
              onChange={e => setCode(e.target.value)}
            />
            <Grid container >
              <Grid item >
                would you like resend verification code?&nbsp;
                <Button variant='contained' style={{background:'#6E4EE7', marginLeft:'10px'}} onClick={handleResend}>
                  resend
                </Button>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                textTransform: 'none',
                background: '#6E4EE7'
              }}
            >
              {loading && <CircularProgress />}
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}