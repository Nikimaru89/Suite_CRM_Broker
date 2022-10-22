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
  Container,
  Typography,
  InputAdornment,
  IconButton,
  CircularProgress
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Auth } from 'aws-amplify';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

const theme = createTheme();

export default function ResetPassword() {
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false)
  const [code, setCode] = useState('')
  const [password, setPassword] = useState({
    password: "",
    showPassword: false,
  });
  const email = useSelector(state => state.auth.currentUser.email)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(email, code, password.password);
      addToast('New password was successfully reset', {
        appearance:'success',
        autoDismiss:true
      });
      navigate('/login')
    }
    catch (error) {
      addToast(error.message,{
        appearance:'error',
        autoDismiss:true
      })
    }
    setLoading(false);
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
            Reset your password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="code"
              label="Verification Code"
              name="code"
              autoComplete="code"
              autoFocus
              onChange={e => setCode(e.target.value)}
            />
            <TextField
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