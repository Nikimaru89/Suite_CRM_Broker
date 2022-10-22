import { useEffect, useState } from 'react'
import { Box, Card, Typography, Checkbox, Button, Grid, CardContent } from "@mui/material"
import { useSelector } from 'react-redux'
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
  padding: '5px',
  textTransform: 'none'
}))

const Banks = ({moveHandle, nextClick}) => {
  const [checkList, setCheckList] = useState(0)
  const [persent, setPersent] = useState(0)
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
    let length=0;
    bankData.map((item, idx)=>{
      if(index === idx && !temp[idx].checked) {
        temp[idx].checked = true
        setCheckList(checkList + 1)
      } else if(index === idx && temp[idx].checked) {
        temp[idx].checked = false
        setCheckList(checkList - 1)
      }
      temp[idx] = item
    })
    setBankData([...temp])
    console.log('length', length)
  };

  useEffect(()=>{
    setPersent(checkList * 7.14)
  }, [checkList])

  const handleSubmit = () => {
    moveHandle(6);
    nextClick('bankforms');
    let bank = [];
    bankData.map((item, index) => {
      item.checked && bank.push({name:item.text, image:item.imgurl});
    })
    localStorage.setItem('bankList', JSON.stringify(bank))
  }

  return (
    <>
      <Typography variant='body2' sx={{
        p: '20px 0px',
        textAlign: 'left'
      }}>
        Create an account for your client so you can track their progress and stay in control.
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit}>
        <Card sx={{
          borderRadius: '5px',
          boxShadow: '0px 0px 10px lightgrey'
        }}>
          <ProgressLine _width={persent}/>
          <Box sx={{
            p: '20px 25px 0px',
            textAlign: 'left'
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Typography variant='h5'>Banks</Typography>
              <Button sx={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'none',
                color: 'black'
              }}>
                <img style={{
                    width: '15px'
                  }} src='/images/icons/project-icons/save.png'/>
                <Typography variant='body2'>
                  &nbsp;Changes saved
                </Typography>
              </Button>
            </Box>
            <Typography variant='body2' sx={{
              pt: '20px'
            }}>
              Select up to 3 banks to send your application to
            </Typography>
          </Box>
          <Box sx={{p:{sm: '10px 25px', xs: '10px'}}}>
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
        <Box sx={{
          p: '30px 0px',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <CustButton 
            mw={150} 
          >
            Next step
          </CustButton>
        </Box>
      </Box>
    </>
  )
}

export default Banks