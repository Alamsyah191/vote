import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    console.log(window.localStorage.getItem('token'))

    // Check if token is exist
    if (window.localStorage.getItem('token') !== null) {
      navigate('/dashboard', {
        state: {
          token: window.localStorage.getItem('token'),
        },
      })
    }
  }, [window.localStorage.getItem('token')])

  return (
    <Box h="100vh">
      <Navbar />
      <Outlet />
    </Box>
  )
}
