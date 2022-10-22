import { Button } from "@mui/material";
import { styled } from "@mui/material";

const CustomButton = styled(Button)((props)=>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#6E4EE7',
  padding: '10px 0px',
  maxWidth: props.mw ? `${props.mw}px` : '230px',
  maxHeight: props.mh ? `${props.mh}px` : 'auto',
  width: '100%',
  textTransform: 'none',
  color: 'white',
  '&:hover': {
    boxShadow: '0px 0px 10px black',
    color: 'black'
  }
}))

const CustButton = ({children, mw, onClick, mh}) => {
  return (
    <CustomButton mw={mw} type='submit' mh={mh}>
      {children}
    </CustomButton>
  )
}

export default CustButton