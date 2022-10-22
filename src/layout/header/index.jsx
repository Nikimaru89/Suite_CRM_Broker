import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button, Typography } from "@mui/material"
import { styled, IconButton } from "@mui/material"
import DescriptionIcon from '@mui/icons-material/Description';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PlayForWorkIcon from '@mui/icons-material/PlayForWork';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useEffect } from 'react';

const Container = styled(Box)(({theme})=>({
  position: 'fixed',
  width: '100%',
  height: '70px',
  left: '0px',
  top: '0px',
  background: '#F2F2F3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: '10'
}))

const UserAvator = styled(IconButton)(({theme})=>({
  width: '50px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  background: '#E2E9FC',
  fontSize: '20px'
}))

const InsetBlock = styled(Box)(({theme})=>({
  display: 'flex',
  alignItems:'center'
}))

const IconBtn = styled(IconButton)(({theme})=>({
  color: 'black',
  '&:hover':{
    background: 'lightgrey'
  }
}))

const Header = () => {

  const location = useLocation()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(()=>{
    console.log('location', location.pathname)
  }, [location])
  
  return (
    <>
      {location.pathname !== '/' ?
        <Container sx={{
          display: {sm: 'none', xs: 'flex'}
        }}>
          <Box sx={{
            width: '100%',
            p: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <UserAvator>ss</UserAvator>
            </Box>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                width: '50px',
                height: '50px',
                background: 'lightgrey',
                borderRadius: '50%',
                // p: '0px'
              }}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <DescriptionIcon sx={{fontSize: '30px'}}/>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <RequestQuoteIcon sx={{fontSize: '30px'}}/>
              </MenuItem>
              {/* <Typography variant="body2" >
                TOOLS
              </Typography> */}
              <MenuItem onClick={handleClose}>
                <TrendingUpIcon sx={{fontSize: '30px'}}/>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <PlayForWorkIcon sx={{fontSize: '30px'}}/>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <HelpCenterIcon sx={{fontSize: '30px'}}/>
              </MenuItem>
            </Menu>
          </Box>
        </Container> : <></>
      }
    </>
  )
}

export default Header