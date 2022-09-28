import { useState } from 'react'
import { Box, Card, Typography, Checkbox, Button } from "@mui/material"
import CustButton from '../CustButton'
import { styled } from "@mui/material"

const ProgressLine = styled(Box)((props)=>({
  width: `${props._width}%`,
  height: '8px',
  background: props._width < 50 ? 'black' : 'blue',
}))

const BankList = styled(Button)(({theme})=>({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  border: '1px solid lightgrey',
  borderRadius: '5px',
  margin: '10px auto',
  padding: '10px 5px'
}))

const Banks = ({moveHandle}) => {

  const [bankData, setBankData] = useState([
    {
      name: 'hsbc',
      imgurl: '/images/icons/project-icons/hsbc.png',
      text: 'HSBC',
      checked: false,
    },
    {
      name: 'adcb',
      imgurl: '/images/icons/project-icons/adcb.png',
      text: 'Abu Dhabi Commercial Bank',
      checked: false,
    },
    {
      name: 'adib',
      imgurl: '/images/icons/project-icons/adib.jpg',
      text: 'Abu Dhabi Islamic Bank',
      checked: false,
    },
    {
      name: 'ajman',
      imgurl: '/images/icons/project-icons/ajman.png',
      text: 'Ajman Bank',
      checked: false,
    },
    {
      name: 'commercial',
      imgurl: '/images/icons/project-icons/commercial.jpg',
      text: 'Commercial Bank of Dubai',
      checked: false,
    },
    {
      name: 'dubai',
      imgurl: '/images/icons/project-icons/dubai.jpg',
      text: 'Dubai IsLamic Bank',
      checked: false,
    },
    {
      name: 'enbd',
      imgurl: '/images/icons/project-icons/enbd.png',
      text: 'ENBD',
      checked: false,
    },
    {
      name: 'emirates',
      imgurl: '/images/icons/project-icons/emirates.png',
      text: 'Emirates Islamic Bank',
      checked: false,
    },
    {
      name: 'fab',
      imgurl: '/images/icons/project-icons/fab.png',
      text: 'FAB',
      checked: false,
    },
    {
      name: 'mashreq',
      imgurl: '/images/icons/project-icons/mashreq.png',
      text: 'Mashreq Bank',
      checked: false,
    },
    {
      name: 'national',
      imgurl: '/images/icons/project-icons/national.png',
      text: 'National Bank of Fujairah',
      checked: false,
    },
    {
      name: 'rakbank',
      imgurl: '/images/icons/project-icons/rakbank.png',
      text: 'RAKBANK',
      checked: false,
    },
    {
      name: 'chartered',
      imgurl: '/images/icons/project-icons/chartered.jpg',
      text: 'Standard Chartered Bank',
      checked: false,
    },
    {
      name: 'united-arab',
      imgurl: '/images/icons/project-icons/united-arab.png',
      text: 'United Arab Bank',
      checked: false,
    },
  ])

  const handleClick = (index) => {
    let temp = [...bankData];
    bankData.map((item, idx)=>{
      if(index === idx && !temp[idx].checked) {
        temp[idx].checked = true
      } else if(index === idx && temp[idx].checked) {
        temp[idx].checked = false
      }
      temp[idx] = item
    })
    setBankData([...temp])
  };

  return (
    <Box>
      <Typography variant='body2' sx={{
        p: '20px 0px',
        textAlign: 'left'
      }}>
        Create an account for your client so you can track their progress and stay in control.
      </Typography>
      <Card sx={{borderRadius: '5px'}}>
        <ProgressLine _width={35}/>
        <Box sx={{
          p: '20px 20px 0px',
          textAlign: 'left'
        }}>
          <Typography variant='h5'>Banks</Typography>
          <Typography variant='body2' sx={{
            pt: '20px'
          }}>
            Select up to 3 banks to send your application to
          </Typography>
        </Box>
        <Box sx={{p: '10px 25px'}}>
          {
            bankData.map((item, idx)=>(
              <BankList key={idx} onClick={()=>handleClick(idx)}>
                <Checkbox
                  checked={item.checked}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <img style={{width: '50px'}} src={item.imgurl}/>
                <Typography variant='body2' sx={{
                  px: '10px',
                  color: 'black'
                }}>{item.text}</Typography>
              </BankList>
            ))
          }
        </Box>
      </Card>
      <Box onClick={()=>{
        moveHandle(6)
      }} sx={{
        p: '30px 0px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <CustButton mw={150}>
          Next step
        </CustButton>
      </Box>
    </Box>
  )
}

export default Banks