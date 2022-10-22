import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DescriptionIcon from '@mui/icons-material/Description';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useToasts } from 'react-toast-notifications';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  marginTop:'50px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const StyledButton = styled(ListItemButton)({
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#6E4EE7',
    borderColor: '#005cbf',
  },
  '&:focus': {
    '& .MuiListItemIcon-root':{
      color:'white'
    },
    boxShadow: 'none',
    backgroundColor: '#6E4EE7',
    borderColor: '#005cbf',
    color:'white'
  },
})

const StyledAccordion = styled(Accordion)({
  '& .css-15v22id-MuiAccordionDetails-root': {
    padding:'0px'
  }
})

export default function Sidebar(props) {
  const theme = useTheme();
  const { addToast } = useToasts();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCases = () => {
    navigate('/cases');
  }

  const handleLogOut = async () => {
    try {
      await Auth.signOut();
      addToast('You have logged out successfully.', {
        appearance:'success',
        autoDismiss:true
      })
      navigate('/login')
    } catch (error) {
        addToast(error.message, {
          appearance:'error',
          autoDismiss:true
        })
    }
  }

  return (
    <Box sx={{ display: 'flex', width:'100%' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} >
        <DrawerFooter>
          { open ? 
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            :
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <ChevronRightIcon />
            </IconButton>
          }
        </DrawerFooter>
        <List onClick={handleCases}>
          <ListItem key='Cases' disablePadding sx={{ display: 'block' }}>
            <StyledButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DescriptionIcon /> 
              </ListItemIcon>
              <ListItemText primary='Cases' sx={{ opacity: open ? 1 : 0 }} />
            </StyledButton>
          </ListItem>
        </List>
        <Divider />
        <List>
        <StyledAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
           {open && <Typography>Coming Soon</Typography>}
          </AccordionSummary>
          <AccordionDetails>
            {['Proposals', 'Bank Products', 'Documents center'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <StyledButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 3 === 0 && <RequestQuoteIcon /> }
                    { index % 3 === 1 && <TrendingUpIcon /> }
                    { index % 3 === 2 && <HelpCenterIcon /> }
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </StyledButton>
              </ListItem>
            ))}
          </AccordionDetails>
        </StyledAccordion>
        </List>
        <List onClick={handleLogOut}>
          <ListItem key='Log Out' disablePadding sx={{ display: 'block' }}>
            <StyledButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LogoutIcon /> 
              </ListItemIcon>
              <ListItemText primary='Log Out' sx={{ opacity: open ? 1 : 0 }} />
            </StyledButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <React.Fragment>
          {props.children}
        </React.Fragment>
      </Box>
    </Box>
  );
}

