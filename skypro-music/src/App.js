// import * as React from "react";
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/routes/routes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
