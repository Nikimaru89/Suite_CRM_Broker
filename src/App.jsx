import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Amplify } from 'aws-amplify';
import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'
import { SignIn, SignUp, Overview, CasesCreate, Confirmation, MainCase } from "./pages";
import { CreatePassword, ResetPassword } from './pages/password'
import { ProtectedRoute } from './helpers'
import { Header } from "./layout";
import { awsConfig } from "./configs/aws-exports";
import './App.css'

Amplify.configure(awsConfig);
const configuration = {
  region: 'eu-west-2',
  secretAccessKey: 'tuTvlkXB5aXNnfQyqs+YOQ0lnjL5Qnuhz2DnhNpd',
  accessKeyId: 'AKIAWPEJKNXDD472SWMI'
}
AWS.config.update(configuration);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />}/>
          <Route path="/overview" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path='create_password' element={<CreatePassword />} />
          <Route path='reset_password' element={<ResetPassword />} />
          <Route path="/cases/create" element={<ProtectedRoute><CasesCreate /></ProtectedRoute>} />
          <Route path="/cases" element={<ProtectedRoute><MainCase /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

