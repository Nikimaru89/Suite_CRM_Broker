import {
  Box,
  Typography,
  Grid,
  styled,
  Paper,
  Button
} from '@mui/material';
import CustomButton from '../CustButton'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Row = styled('div')(({theme}) => ({
  display:'flex',
  marginLeft:'20%'
}))

const Title = styled(Typography)(({theme}) => ({
  color:'black',
}))

const Review = () => {
  const client = JSON.parse(localStorage.getItem('client'));
  console.log('client', client)
  const income = JSON.parse(localStorage.getItem('income'));
  console.log('income', income)
  const bankForms = JSON.parse(localStorage.getItem('bankForms'));
  console.log('bankForms', bankForms)
  // return (
  //   <Box>
  //     <Typography variant='body2' sx={{
  //       p: '20px 0px',
  //       textAlign: 'left'
  //     }}>
  //       Check your review.
  //     </Typography>
  //     <Box 
  //       sx={{
  //         boxShadow: '0px 0px 10px grey',
  //         borderRadius: `5px`,
  //         p: 2
  //       }} 
  //     >
  //       <Grid container direction='row' spacing={2}>
  //         <Grid item lg={4} md={4} sm={12}>
  //           <Item>
  //             <Typography variant="h4" style={{marginTop:'20px'}}>Client</Typography>
  //             <Typography variant="h5">Main Applicant</Typography>
  //             <Row>
  //               <Title variant="body1">First Name:</Title>
  //               <Typography variant="body1">{client?.firstName}</Typography>
  //             </Row>
  //             <Row>
  //               <Typography variant="body1" sx={{color:'black'}}>Last Name:</Typography>
  //               <Typography variant="body1">{client?.lastName}</Typography>
  //             </Row>
  //             <Row>
  //             <Title variant="body1">Email:</Title>
  //             <Typography variant="body1">{client?.email}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Phone Number:</Title>
  //               <Typography variant="body1">{client?.phoneNumber}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Date of Birth:</Title>
  //               <Typography variant="body1">{client?.birthDate}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Nationality:</Title>
  //               <Typography variant="body1">{client?.nationality}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Employment Status:</Title>
  //               <Typography variant="body1">{client?.employment}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Residency Status:</Title>
  //               <Typography variant="body1">{client?.residency}</Typography>
  //             </Row>
  //             {
  //               client?.applicant_firstName.length > 0 ? 
  //                 client?.applicant_firstName.map((item, index) => {
  //                   return (
  //                     <div key={item} style={{marginTop:'20px'}}>
  //                       <Typography variant="h5">Co-Applicant {index + 1}</Typography>
  //                       <Row>
  //                         <Title variant="body1">First Name:</Title>
  //                         <Typography variant="body1">{client?.applicant_firstName[index]}</Typography>
  //                       </Row>
  //                       <Row>
  //                         <Title variant="body1">Last Name: </Title>
  //                         <Typography variant="body1">{client?.applicant_lastName[index]}</Typography>
  //                       </Row>
  //                       <Row>
  //                         <Title variant="body1">Email:</Title>
  //                         <Typography variant="body1">{client?.applicant_email[index]}</Typography>
  //                       </Row>
  //                       <Row>
  //                         <Title variant="body1">Phone Number:</Title>
  //                         <Typography variant="body1">{client?.applicant_phoneNumber[index]}</Typography>
  //                       </Row>
  //                       <Row>
  //                         <Title variant="body1">Residency Status:</Title>
  //                         <Typography variant="body1">{client?.applicant_residency[index]}</Typography>
  //                       </Row>
  //                       <Row>
  //                         <Title variant="body1">Relationship:</Title>
  //                         <Typography variant="body1">{client?.applicant_relationship[index]}</Typography>
  //                       </Row>
  //                     </div>
  //                   )
  //                 })
  //                 :
  //                 <div style={{marginTop:'20px'}}></div>
  //             }
  //             {
  //               client?.borrower_firstName.length > 0 ? 
  //                 client?.borrower_firstName.map((item, index) => {
  //                   return (
  //                     <div key={item} style={{marginTop:'20px'}}>
  //                       <Typography variant="h5">Co-Borrower {index + 1}</Typography>
  //                       <Row>
  //                         <Title variant="body1">First Name:</Title>
  //                         <Typography variant="body1">{client?.borrower_firstName[index]}</Typography>
  //                       </Row>
  //                       <Row>
  //                         <Title variant="body1">Last Name:</Title>
  //                         <Typography variant="body1">{client?.borrower_lastName[index]}</Typography>
  //                       </Row>
  //                       <Row>
  //                         <Title variant="body1">Email:</Title>
  //                         <Typography variant="body1">{client?.borrower_email[index]}</Typography>
  //                       </Row>
  //                       <Row>
  //                         <Title variant="body1">Phone Number:</Title>
  //                         <Typography variant="body1">{client?.borrower_phoneNumber[index]}</Typography>
  //                       </Row>
  //                       <Row>
  //                         <Title variant="body1">Residency Status:</Title>
  //                         <Typography variant="body1">{client?.borrower_residency[index]}</Typography>
  //                       </Row>
  //                       <Row>
  //                         <Title variant="body1">Relationship:</Title>
  //                         <Typography variant="body1">{client?.borrower_relationship[index]}</Typography>
  //                       </Row>
  //                     </div>
  //                   )
  //                 })
  //                 :
  //                 <div style={{marginTop:'20px'}}></div>
  //             }
  //           </Item>
  //         </Grid>
  //         <Grid item lg={4} md={4} sm={12}>
  //           <Item>
  //             <Typography variant="h4" style={{marginTop:'20px'}}>Income & Mortgage</Typography>
  //             <Typography variant="h5">Income Details</Typography>
  //             <Row>
  //               <Title variant="body1">Fixed Monthly Salary:</Title>
  //               <Typography variant="body1">{income?.monthlySalary}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Additional Income:</Title>
  //               <Typography variant="body1">{income?.addIncome}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Additional income type:</Title>
  //               <Typography variant="body1">{income?.addIncomeType}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Total credit card limit:</Title>
  //               <Typography variant="body1">{income?.creditCard}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Monthly fixed installments:</Title>
  //               <Typography variant="body1">{income?.monthlyInstallments}</Typography>
  //             </Row>
  //             <Typography variant="h5" style={{marginTop:'20px'}}>Mortgage Details</Typography>
  //             <Row>
  //               <Title variant="body1">Which Emirate?:</Title>
  //               <Typography variant="body1">{income?.emirate}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Loan amount:</Title>
  //               <Typography variant="body1">{income?.loanAmount}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Property status:</Title>
  //               <Typography variant="body1">{income?.propertyStatus}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">roperty value:</Title>
  //               <Typography variant="body1">{income?.propertyValue}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Downpayment(%):</Title>
  //               <Typography variant="body1">{income?.downPayment}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Mortgage type:</Title>
  //               <Typography variant="body1">{income?.mortgageType}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Mortgage length(years):</Title>
  //               <Typography variant="body1">{income?.mortgageLength}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Add Residual Assoclate fee?:</Title>
  //               <Typography variant="body1">{income?.residualFee}</Typography>
  //             </Row>
  //             <Row>
  //               <Title variant="body1">Transaction type:</Title>
  //               <Typography variant="body1">{income?.transactionType}</Typography>
  //             </Row>
  //           </Item>
  //         </Grid>
  //         <Grid item lg={4} md={4} sm={12}>
  //           <Item>
  //             <Typography variant="h4" style={{marginTop:'20px'}}>Bank Documents</Typography>
  //             <Typography variant="h5">Bank Forms</Typography>
  //             {bankForms?.map((item, index) => {
  //               return (
  //                 <div style={{display:'flex'}}>
  //                   <Title variant="body1">{item.name}: </Title>
  //                   <Typography variant="body1">{item.file}</Typography>
  //                 </div>
  //               )
  //             })}
  //           </Item>
  //         </Grid>
  //       </Grid>
  //     </Box>
  //     <Box 
  //       sx={{
  //         p: '30px 0px',
  //         display: 'flex',
  //         justifyContent: 'flex-end'
  //       }}>
  //       <CustomButton
  //          mw={150} 
  //       >
  //         Submit
  //       </CustomButton>
  //     </Box>
  //   </Box>
  // )
}

export default Review