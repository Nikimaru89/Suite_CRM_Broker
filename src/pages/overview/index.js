import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import CustButton from '../../components/CustButton'

const Container = styled(Box)(({theme}) =>({
  position: 'relative',
  height: '90vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const Wrapper = styled(Box)(({theme})=>({
  maxWidth: '500px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}))

const CreateButton = styled(Button)(({theme})=>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#6E4EE7',
  padding: '10px',
  maxWidth: '230px',
  height: '60px',
  width: '100%',
  textTransform: 'none',
  color: 'white',
  '&:hover': {
    boxShadow: '0px 0px 10px black',
    color: 'black'
  }
}))

const CustHeader = styled(Box)(({theme})=>({
  position: 'absolute',
  width: '100%',
  top: '0px',
  left: '0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))


const CustTypography = styled(Typography)(({theme}) =>({
  textTransform: 'none',
}))
const Overview = () => {

  return (
    <Container>
      <CustHeader>
        <Box>
          <CustTypography variant='h2' sx={{color: 'black'}}>Cases</CustTypography>
          <CustTypography>Manage your clients</CustTypography>
        </Box>
        <Link to='/cases' style={{
          textDecoration: 'none'
        }}>
          <CreateButton>
            <Typography variant='h4' sx={{
              color: 'white',
            }}>+</Typography>
              Create a case
          </CreateButton>
        </Link>
      </CustHeader>
      <Wrapper>
        <Typography variant='h4' sx={{color: 'black'}}>Send your first case to Huspy</Typography>
        <Typography variant='h6' sx={{
          color: 'black', my: 6
        }}>Ready to get started? Submit the details of your first case and let us handle the rest.</Typography>
        <Link to='/cases' style={{
          textDecoration: 'none'
        }}>
          <CreateButton>
            Create a cases
          </CreateButton>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Overview