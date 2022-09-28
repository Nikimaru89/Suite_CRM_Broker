// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Controller } from 'react-hook-form'
// ** MUI Components
import Alert from '@mui/material/Alert'
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import { Grid, FilledInput } from '@mui/material'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '400px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const LoginPage = () => {

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Container>
      <BoxWrapper>
        <Box sx={{ mb: 6 }}>
          <TypographyStyled variant='body2'>Don't have an account yet?&nbsp;
            <Link href='/signup'>Sign up</Link>
          </TypographyStyled>
          <Box sx={{boxShadow: '0px 0px 5px #C7C8CF', height: '1px', width: '100%'}}></Box>
          <Typography variant='h4' sx={{
            color: 'black',
            marginTop: '50px'
          }}>Sign in for Brokers</Typography>
          <Typography variant='body2' sx={{
            marginTop: '20px'
          }}>
            We'll help you close clients faster and earn higher commission.
          </Typography>
          <Typography variant='body2'>What's not to like?</Typography>
        </Box>
        <form noValidate autoComplete='off' onSubmit={()=>handleSubmit()}>
          <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
              <Controller
                name='email'
                control={''}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    autoFocus
                    label='Email'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error=''
                    placeholder='admin@materialize.com'
                  />
                )}
              />
            </FormControl> */}
          </Grid>
          </Grid>
          <Box
            sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
          >
            <Typography component={MuiLink} variant='body2' sx={{ color: 'dark' }}>
              Forgot Password?&nbsp;
              <Link passHref href='/forgot-password'>Reset</Link>
            </Typography>
              
          </Box>
          <Button fullWidth size='large' type='submit' variant='contained' sx={{
            textTransform: 'none',
          }}>
            Sign in
          </Button>
        </form>
      </BoxWrapper>
    </Container>
  )
}
// LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
// LoginPage.guestGuard = true

export default LoginPage
