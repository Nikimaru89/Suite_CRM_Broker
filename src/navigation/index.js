import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage, Overview, CasesCreate } from "../pages";

const Navigation = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/cases" element={<CasesCreate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation