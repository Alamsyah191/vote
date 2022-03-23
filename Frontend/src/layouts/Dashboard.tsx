import { Button, Container, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { token } = state as { token: string }

  useEffect(() => {
    document.title = 'Dashboard | E - Voting'
  })
  return (
    <Container m="auto">
      <Text>{token}</Text>
      <Button
        onClick={() => {
          window.localStorage.removeItem('token')
          navigate('/')
        }}
      >
        Keluar
      </Button>
    </Container>
  )
}
