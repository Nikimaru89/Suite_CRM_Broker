import { useState} from 'react';
import { Box, Typography, Card } from "@mui/material"
import { Link } from 'react-router-dom';
import { styled } from "@mui/material"
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Client, Income, Banks, Bankforms } from '../../../components';

const Container = styled(Box)(({theme})=>({
  '.css-1pyy021-MuiTabs-flexContainer':{
    display: 'flex',
    justifyContent: 'center',
  }
}))

const NavBar = styled(Box)(({theme})=>({
  display: 'flex',
  justifyContent: 'flex-start',
}))

const TabBar = styled(Tabs)(({theme})=>({
  width: '100%',
  display: 'flex',
  justifyContent: 'center !important'
}))

const CustTab = styled(Tab)(({theme})=>({
  padding: '10px 5px',
  textTransform: 'none'
}))

const CustTypography = styled(Typography)(({theme})=>({
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

  function a11yProps(index) {
    console.log("index", index)
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const tabChange = (event, newValue) => {
    setValue(newValue);
    console.log('newValue', newValue)
  };

  const moveHandle = (idx) => {
    a11yProps(idx)
    tabChange('', idx)
  }

  return (
    <Container>
      <NavBar>
        <Link href=''><Typography>Cases /&nbsp;</Typography></Link>
        <Link href=''><Typography>Create a case</Typography></Link>
      </NavBar>
      <Card sx={{
        mt: '30px',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        '.css-heg063-MuiTabs-flexContainer':{
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
          }}
        >
          <CustTab label="Client" {...a11yProps(0)} />
          <CustTypography>{'>'}</CustTypography>
          <CustTab label="Income & Mortgage" {...a11yProps(1)} />
          <CustTypography>{'>'}</CustTypography>
          <CustTab label="Banks" {...a11yProps(2)} />
          <CustTypography>{'>'}</CustTypography>
          <CustTab label="Bank forms" {...a11yProps(3)} />
          <CustTypography>{'>'}</CustTypography>
          <CustTab label="Documents" {...a11yProps(4)} />
          <CustTypography>{'>'}</CustTypography>
          <CustTab label="Review and submit" {...a11yProps(5)} />
        </TabBar>
      </Card>
      <TabPanel value={value} index={0}>
        <Client moveHandle={moveHandle}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Income moveHandle={moveHandle}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Banks moveHandle={moveHandle}/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Bankforms moveHandle={moveHandle}/>
      </TabPanel>
    </Container>
  )
}

export default CasesCreate