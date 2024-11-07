import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Aqarat from '@/pages/Aqarat.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="aqarat"
          element={<Aqarat />}
        />
      </Routes>
    </BrowserRouter>
  )
}
