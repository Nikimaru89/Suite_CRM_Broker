import React, { useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import CustButton from '../../components/CustButton'

const Container = styled(Box)(({theme}) =>({
  position: 'relative',
  width: '100%',
  height: '100vh',
  padding: '0px 20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const Wrapper = styled(Box)(({theme})=>({
  width: '100%',
  height: '88%',
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}))

const CreateButton = styled(Button)(({theme})=>({
  maxWidth: '230px',
  width: '100%',
  height: '40px',
  padding: '5px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'none',
  background: '#6E4EE7',
  color: 'white',
  '&:hover': {
    boxShadow: '0px 0px 10px black',
    color: 'black'
  }
}))

const CustHeader = styled(Box)(({theme})=>({
  width: '100%',
  height: '10%',
  padding: '10px 0px 0px',
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
          <CustTypography variant='h4' sx={{
            color: 'black',
            fontSize: {sm: '48px', xs: '40px'}
          }}>
            Cases
          </CustTypography>
          <CustTypography variant='body1' sx={{
            color: 'black',
            fontSize: {sm: '16px', xs: '14px'}
          }}
          >
            Manage your clients
          </CustTypography>
        </Box>
        <Link to='/cases/create' style={{
          textDecoration: 'none'
        }}>
          <CreateButton>
            <Typography variant='h5'>+</Typography>
              &nbsp;Create a case
          </CreateButton>
        </Link>
      </CustHeader>
      <Wrapper>
        <Typography variant='h4' sx={{
          color: 'black',
          fontSize: {sm: '34px', xs: '24px'}
        }}>
          Register & Create a Case 
        </Typography>
        <Typography variant='h6' sx={{
          color: 'black',
          my: {xs: 3, sm:6},
          fontSize: {sm: '20px', xs: '16px'}
        }}>
          Send and Manage Your Client Cases
        </Typography>
        <Link to='/cases/create' style={{
          textDecoration: 'none'
        }}>
          <CreateButton>
            Create a Case 
          </CreateButton>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Overview