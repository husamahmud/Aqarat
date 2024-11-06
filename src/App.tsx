import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Mzadat from '@/pages/Mzadat.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="mzadat"
               element={<Mzadat />} />
      </Routes>
    </BrowserRouter>
  )
}
