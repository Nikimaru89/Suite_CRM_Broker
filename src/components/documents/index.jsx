import { useState } from 'react'

// ** MUI Imports
import {
  Box,
  Typography,
  styled,
  Button
}  from '@mui/material'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useSelector } from 'react-redux';
// ** Third Party Imports

import CustButton from '../CustButton'
import DropZone from './dropzone'
import FileTile from './fileTile'
import './index.css'
// Styled component for the heading inside the dropzone area

const UploadButton = styled(Button)((props)=>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#6E4EE7',
  padding: '10px 0px',
  maxWidth: '140px',
  maxHeight: '50px',
  width: '100%',
  textTransform: 'none',
  color: 'white',
  '&:hover': {
    boxShadow: '0px 0px 10px black',
    color: 'black'
  }
}))

const Documents = ({ moveHandle, nextClick }) => {
  
  const firstName = useSelector(state => state.client.currentUser.firstName);
  const lastName = useSelector(state => state.client.currentUser.lastName);
  const email = useSelector(state => state.client.currentUser.email)
  const [uploadFiles, setUploadFiles] = useState([]);
  console.log('uploadFiles',uploadFiles)
  const handleFile = async (file, id) => {
    const { name, size, type, lastModified } = file;
    const percent = 100;
    setUploadFiles([...uploadFiles,
    {
      name, size, type,
      lastModified,
      percent
    }])
  };

  const handleDropFiles = (files) => {
    files.forEach((f, i) => handleFile(f, `${new Date().getTime()}-${i}`))
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
    setUploadFiles(uploadFiles.filter(x => x.name !== f.name));
  };

  const handleUploadBtn = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    handleUploadFiles(chosenFiles);
  }

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
      }
    })
    if (!limitExceeded) setUploadFiles(uploaded)

  }

  const handleDocument = () => {
    const local_bank = JSON.parse(localStorage.getItem('cases'));
    let local = local_bank.map((item, index) => {
      if (item.client.email === email) {
        return {
          ...item,
          // bank: bankForms
        }
      }
      return item
    })
    localStorage.setItem('cases', JSON.stringify(local))
  }

  // const handleData = async () => {
  //   try {
  //     let data = new FormData();
  //     data.append('method', 'set_entries');
  //     data.append('input_type','JSON');
  //     data.append('response_type','JSON');
  //     data.append(
  //       'rest_data',
  //       JSON.stringify({
  //         "session":"rgd1egekelooo5hk5b64juope8",
  //         "module_name":"BL1_brokerleads",
  //         "name_value_list":[
  //           {"salutation":"Mr",
  //           "first_name":"Ravindra",
  //           "last_name":"Babbar",
  //           "email_c":"babbar@gmail.com",
  //           "date_of_birth_c":"10\/10\/1988",
  //           "phone_mobile":"9876543210",
  //           "nationality_c":"India",
  //           "resident_type_c":"Non Resident",
  //           "marrital_c":"Single",
  //           "bower_firstname_c":"Broj",
  //           "bower_lastname_c":"lastest",
  //           "bower_email_c":"emall@email.com",
  //           "bower_phone_c":"65434",
  //           "bower_relationship_c":"Dksj",
  //           "bower_regidency_status_c":"ajdajsdha",
  //           "applicant_firstname_c":"ahdush",
  //           "applicant_lastname_c":"last",
  //           "applicant_email_c":"gs@gmail.com",
  //           "applicant_phone_c":"34567",
  //           "applicant_relationship_c":"adhaskjdad",
  //           "applicant_resident_status_c":"kldjkadasd",
  //           "job_title_c":"Developer",
  //           "date_of_joining_c":"10\/10\/2010",
  //           "company_name_c":"Webcyst",
  //           "industry_c":"Tech",
  //           "fixed_salary_c":"987654",
  //           "monthly_amount_c":"987654",
  //           "type_c":"Comission",
  //           "bank_c":"Alahabad Bank",
  //           "credit_card_limits_c":"987654321",
  //           "loan_type_c":"Personal Loan",
  //           "outstanding_amount_c":"998765",
  //           "approximate_property_price_c":"998765",
  //           "property_type_c":"Off Plan",
  //           "what_kind_of_mortgage_do_you_c":"Buy A Property",
  //           "lending_type_c":"Conventional",
  //           "subject_c":"Example Subject",
  //           "meeting_status_c":"Held",
  //           "start_date_c":"10\/10\/2022",
  //           "end_date_c":"10\/10\/2022",
  //           "location_c":"Mumbai",
  //           "duration_c":"15 Minutes",
  //           "description":"This is a description for Meeting.",
  //           "call_subject_c":"Call Subject Sample",
  //           "call_status_c":"Out Bound",
  //           "call_start_date_c":"10\/10\/2022",
  //           "call_duration_c":"15 Minutes",
  //           "call_description_c":"This is description for call.",
  //           "contacts_c":"Lorem ipsum dolor sit aksdo saod.",
  //           "note_subject_c":"Notes Subject Here",
  //           "note_attachment_c_file":"File for Notes",
  //           "note_c":"This is note.",
  //           "task_subject_c":"Task Subject",
  //           "task_status_c":"Not Started",
  //           "task_start_date_c":"11\/10\/2022",
  //           "task_due_date_c":"11\/10\/2022",
  //           "task_priority_c":"High",
  //           "task_description_c":"This is description for task.",
  //           "passport_copy_c_file":"Passport Copy",
  //           "visa_copy_c_file":"Visa Copy",
  //           "eid_copy_c_file":"EID Copy",
  //           "status_c":"Not Submitted"}
  //       ]
          
  //       })
  //     )
  //     const response = await axios.post('http://3.232.194.218/service/v4_1/rest.php', data)
  //     console.log('res', response.data)
  //     if(response.status === 200) {
  //       dispatch(sidebar_check('profile'));
  //     }
  //   }
  //   catch (errors) {
  //     console.log('errors', errors)
  //   }
  // }

  return (
    <Box>
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

        <Box sx={{
          display: 'flex',
          justifyContent: `space-between`,
          alignItems: `center`
        }}
        >
          <Box>
            <Typography sx={{
              fontSize: `18px`,
              fontWeight: 600
            }} > {`${firstName} ${lastName}`}</Typography>
            <Typography sx={{
              fontSize: `16px`,
              fontWeight: 400
            }} >Main Applicant</Typography>
          </Box>
          <UploadButton startIcon={<FileUploadOutlinedIcon/>}>
            Upload
          </UploadButton>
        </Box>

        <DropZone files={uploadFiles} onDropFiles={handleDropFiles} />
        {
          uploadFiles.map((f, i) =>
            <FileTile key={i} file={f} onRemove={handleRemove} />
          )
        }
      </Box>

      <Box sx={{
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
        <UploadButton 
          mw={150} 
          mh={50} 
          onClick={() => {
            moveHandle(10);
            nextClick('review');
            handleDocument();
            localStorage.removeItem('cases')
          }}>
          Next step
        </UploadButton>
      </Box>
    </Box>
  )
}

export default Documents