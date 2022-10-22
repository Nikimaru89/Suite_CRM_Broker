import { useState } from 'react'

// ** MUI Imports
import {
  Box,
  Button,
  Stack,
  styled
} from '@mui/material'
import Typography from '@mui/material/Typography'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useSelector } from 'react-redux'
// ** Third Party Imports

import CustButton from '../CustButton'
import DropZone from './dropzone'
import FileTile from './fileTile'
import './index.css'
import { ConsoleLogger } from '@aws-amplify/core';
// Styled component for the heading inside the dropzone area

const UploadButton = styled(Button)((props)=>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#6E4EE7',
  padding: '10px 0px',
  maxWidth: '250px',
  maxHeight: '50px',
  width: '100%',
  textTransform: 'none',
  color: 'white',
  '&:hover': {
    boxShadow: '0px 0px 10px black',
    color: 'black'
  }
}))

const Bankforms = ({ moveHandle, nextClick }) => {
  const email = useSelector(state => state.client.currentUser.email)
  
  // const [local_income, set_local_income] = useState(income)
  const bankList = JSON.parse(localStorage.getItem('bankList'));
  const [uploadFiles, setUploadFiles] = useState([]);
  const [bankForms, setBankForms] = useState([]);

  const handleDropFiles = (item, files) => {
    console.log('files', files)
    setUploadFiles([...uploadFiles, {name: item, file:files[0]}]);
  };

  const updateProgerss = (p) => {
    const intervel = setTimeout(() => {
      console.log(p);
      if (p > 100) {
        console.log('cleared');
        clearInterval(intervel);
        return;
      }

      uploadFiles.forEach((f) => f.percent = p);
      updateProgerss(p + 1);
      //setUploadFiles([...uploadFiles]);
    }, 100)
  };

  const handleRemove = (f) => {
    setUploadFiles(uploadFiles.filter(x => x.file !== f));
  };

  console.log('uploadFiles',uploadFiles)

  const handleBankForms = () => {
    moveHandle(8);
    nextClick('documents');
    let bankForms = [];
    uploadFiles.map((item, index) => {
      bankForms.push({name:item.name, file:item.file.name});
    })
    const local_income = JSON.parse(localStorage.getItem('cases'));
    let local = local_income.map((item, index) => {
      if (item.client.email === email) {
        return {
          ...item,
          bank: bankForms
        }
      }
      return item
    })
    localStorage.setItem('cases', JSON.stringify(local))
  }

  return (
    <Box >
      <Typography variant='body2' sx={{
        p: '20px 0px',
        textAlign: 'left'
      }}>
        Upload the application form from the banks selected. Make sure the required forms have been filed in and signed by your client.
      </Typography>

      <Box sx={{
        boxShadow: '0px 0px 10px grey',
        borderRadius: `5px`,
        p: 2
      }} >

        {bankList.map((item, index) => 
          <div key={index} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
            <Button 
              sx={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'none',
                color: 'black'
              }}
            >
              <img 
                style={{width: '50px'}} 
                src={item.image}
              />
              <Typography 
                sx={{
                  textTransform: `uppercase`,
                  fontSize: `18px`,
                  fontWeight: 600
                }} 
              >
                {item.name}
              </Typography>
            </Button>
            {
              uploadFiles.map((f, i) => 
               item.name === f.name &&
                <FileTile key={index} file={f.file} onRemove={handleRemove} />
              )
            }
            </div>
            <DropZone files={uploadFiles} onDropFiles={(file) => handleDropFiles(item.name, file)} />
          </div>
        )}
        
      </Box>

      <Box 
        sx={{
          p: '30px 0px',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', ss: 'unset' }
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
        <Stack direction='row' spacing={5} style={{width:'400px'}}>
          <UploadButton startIcon={<FileUploadOutlinedIcon />}>
            Upload
          </UploadButton>
          <UploadButton 
            onClick={() => handleBankForms()}
          >
            Next step
          </UploadButton>
        </Stack>
      </Box>
    </Box>
  )
}

export default Bankforms