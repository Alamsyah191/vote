import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Calon from './layouts/Calon'
import Dashboard from './layouts/Dashboard'
import LoginForm from './layouts/LoginForm'
import Pemilihan from './layouts/Pemilihan'
import RegisterForm from './layouts/RegisterForm'
import Intro from './pages/Intro'
import NotFoundPage from './pages/NotFoundPage'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Intro />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="hasil-pemilihan" element={<Pemilihan />} />
            <Route path="calon" element={<Calon />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
