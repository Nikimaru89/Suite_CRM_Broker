import { useEffect, useState } from 'react';
import { Box, Typography, Card, Grid } from "@mui/material"
import { Link } from 'react-router-dom';
import { styled } from "@mui/material"
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Client, Income, Banks, Bankforms, Documents, Review } from '../../components';
import Sidebar from '../../layout/sidebar'

const Container = styled(Grid)(({ theme }) => ({
  '.MuiGrid-container': {
    display: 'flex',
    justifyContent: 'center !important'
  }
}))

const NavBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
}))

const TabBar = styled(Tabs)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center !important',
  '.Mui-selected': {
    color: 'black !important'
  },
}))

const CustTab = styled(Tab)((props) => ({
  padding: '10px 5px',
  textTransform: 'none',
  fontWeight: '700',
  fontSize: '15px',
  color: (props.idx <= props.fw) ? 'black' : 'lightgrey',
  borderColor: '#6E4EE7'
}))

const CustTypography = styled(Typography)(({ theme }) => ({
  padding: '15px 5px'
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

const CasesCreate = () => {

  const [value, setValue] = useState(0);
  const [location, setLocation] = useState(localStorage.getItem('location') ?
    localStorage.getItem('location') : '')

  useEffect(() => {
    if (location === 'client') {
      moveHandle(0)
    } else if (location === 'income') {
      moveHandle(2)
    } else if (location === 'bank') {
      moveHandle(4)
    } else if (location === 'bankforms') {
      moveHandle(6)
    } else if (location === 'documents') {
      moveHandle(8)
    } else if (location === 'review') {
      moveHandle(10)
    }
  }, [])

  const nextClick = (path) => {
    localStorage.setItem('location', path)
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const tabChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      localStorage.setItem('location', 'client')
    } else if (newValue === 2) {
      localStorage.setItem('location', 'income')
    } else if (newValue === 4) {
      localStorage.setItem('location', 'bank')
    } else if (newValue === 6) {
      localStorage.setItem('location', 'bankforms')
    } else if (newValue === 8) {
      localStorage.setItem('location', 'documents')
    } else if (newValue === 10) {
      localStorage.setItem('location', 'review')
    }
  };

  const moveHandle = (idx) => {
    console.log('idx', idx)
    a11yProps(idx)
    tabChange('', idx)
  }

  return (
    <Sidebar>
      <Container container columnGap={{ xs: 2, ss: 4 }} sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Grid item xs={12} sm={12} ss={12} md={12} sx={{
          p: { sm: '20px', xs: '10px 0px 10px' },
          mt: { xs: '90px', sm: '0px' }
        }}>
          <Grid item xs={12}>
            <NavBar>
              <Link to='/cases' style={{
                color: 'black'
              }}>
                <Typography>Cases</Typography>
              </Link>
              <Link to='/' style={{
                textDecoration: 'none'
              }}>
                <Typography>&nbsp;&nbsp;/&nbsp;&nbsp;Create a case</Typography>
              </Link>
            </NavBar>
            <Card sx={{
              mt: '30px',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: { lg: 'center', xs: 'flex-start' },
              boxShadow: '0px 0px 10px lightgrey',
              overflow: 'auto',
              '.MuiTabs-root': {
                minWidth: '850px',
              },
              '.MuiTabs-flexContainer': {
                display: 'flex',
                justifyContent: 'center'
              }
            }}>
              <TabBar
                value={value}
                onChange={tabChange}
                aria-label="basic tabs example"
                sx={{
                  display: 'flex',
                  justifyContent: 'center !important',
                  boxShadow: '0px 0px 10px grey'
                }}
              >
                <CustTab
                  fw={value}
                  idx={0}
                  label="Client" {...a11yProps(0)} />
                <CustTypography>{'>'}</CustTypography>
                <CustTab
                  fw={value}
                  idx={2}
                  label="Income & Mortgage" {...a11yProps(1)} />
                <CustTypography>{'>'}</CustTypography>
                <CustTab
                  fw={value}
                  idx={4}
                  label="Banks" {...a11yProps(2)} />
                <CustTypography>{'>'}</CustTypography>
                <CustTab
                  fw={value}
                  idx={6}
                  label="Bank forms" {...a11yProps(3)} />
                <CustTypography>{'>'}</CustTypography>
                <CustTab
                  fw={value}
                  idx={8}
                  label="Documents" {...a11yProps(4)} />
                <CustTypography>{'>'}</CustTypography>
                <CustTab
                  fw={value}
                  idx={10}
                  label="Review and submit" {...a11yProps(5)} />
              </TabBar>
            </Card>
            <TabPanel value={value} index={0}>
              <Client
                moveHandle={moveHandle}
                nextClick={nextClick}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Income
                moveHandle={moveHandle}
                nextClick={nextClick}
              />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Banks
                moveHandle={moveHandle}
                nextClick={nextClick}
              />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Bankforms
                moveHandle={moveHandle}
                nextClick={nextClick}
              />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <Documents
                moveHandle={moveHandle}
                nextClick={nextClick}
              />
            </TabPanel>
            <TabPanel value={value} index={10}>
              <Review
              />
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </Sidebar>
  )
}

export default CasesCreate