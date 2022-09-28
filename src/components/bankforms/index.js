import { Box, Card, Typography } from "@mui/material"
import CustButton from "../CustButton"
import { styled } from "@mui/material"

const ProgressLine = styled(Box)((props)=>({
  width: `${props._width}%`,
  height: '8px',
  background: props._width < 50 ? 'black' : 'blue',
}))

const Bankforms = ({moveHandle}) => {

  return (
    <Box>
      <Typography variant='body2' sx={{
        p: '20px 0px',
        textAlign: 'left'
      }}>
        Upload the application form from the banks selected. Make sure the required forms have been filed in and signed by your client.
      </Typography>
      <Card sx={{
        height: '150px',
        borderRadius: '5px'
      }}>
        {/* <ProgressLine _width={35}/>
        <input type='file' multiple/> */}

      </Card>
      <Box onClick={()=>{
        moveHandle(6)
      }} sx={{
        p: '30px 0px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Box sx={{
          display: 'flex'
        }}>
          <Typography variant='body2'>
            Your client's data is sate Check our
          </Typography>&nbsp;
          <a href="">
            <Typography variant='body2'>
              Data and Privacy Protection Policy
            </Typography>
          </a>
        </Box>
        <CustButton mw={150}>
          Next step
        </CustButton>
      </Box>
    </Box>
  )
}

export default Bankforms