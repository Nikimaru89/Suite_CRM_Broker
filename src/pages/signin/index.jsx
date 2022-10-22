import React, { useState } from 'react';
import { 
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  CircularProgress
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Auth } from 'aws-amplify';
import { useToasts } from 'react-toast-notifications';
import { useDispatch } from 'react-redux';
import { signIn, authToken } from '../../actions/auth';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({
    password: "",
    showPassword: false,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await Auth.signIn(email, email);
      dispatch(authToken(res.signInUserSession.accessToken.jwtToken))
      addToast('You have logged in successfully', {
        appearance:'success',
        autoDismiss:true
      })
      navigate('/overview')
    }
    catch (error) {
      addToast(error.message, {
        appearance:'error',
        autoDismiss:true
      })
    }
    setLoading(false)
  };

  const handlePasswordChange = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleReset = async () => {
    dispatch(signIn(email));
    try {
      await Auth.forgotPassword(email);
      addToast('Please check your email', {appearance:'success', autoDismiss:true});
      navigate('/reset_password')
    }
    catch (error) {
      addToast(error.message, {appearance:'error', autoDismiss:true})
    }      
  }

  return (
    <ThemeProvider theme={theme}>
      <Box 
        component="main" 
        sx={{
          maxWidth: '450px',
          width: '100%',
          p: '20px',
          marginTop:'65px'
        }}>
        <CssBaseline />
        <Box>
          <Typography>Dont't have an account yet?&nbsp;
            <Link to='/signup'>Sign up</Link>
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
            Sign in for Brokers
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
             {/* <TextField
              type={password.showPassword ? "text" : "password"}
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
              onChange={handlePasswordChange("password")}
              value={password.password}
              InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {password.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )}}
            />
            <Grid container>
              <Grid item xs>
                Forgot password?&nbsp;
                <span style={{cursor:'pointer', color:'#6E4EE7'}} onClick={handleReset}>
                  Reset
                </span>
              </Grid>
            </Grid> */}
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
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}