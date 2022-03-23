import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const navigate = useNavigate()

  const [auth, setAuth] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState<null | string>()

  useEffect(() => {
    document.title = 'Login | E - Voting'
  })

  const handleLogin = async (email: string, password: string) => {
    const response = await fetch('https://vote.puskamil.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Allow-Origins': '*',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })

    if (response.ok) {
      const token = await response
        .json()
        .then((data) => data.content.access_token)

      window.localStorage.setItem('token', token)

      navigate('/dashboard', { state: { token: token } })
    } else {
      setError('Terjadi kesalahan')
    }
  }

  return (
    <Container m="auto" boxShadow="lg" p={5}>
      <VStack alignItems="stretch" spacing={3}>
        <Heading as="h4" fontSize="lg" mb="5" textAlign="center">
          Silahkan Anda masuk atau membuat akun terlebih dahulu jika belum ada
        </Heading>

        <FormControl>
          <FormLabel>Email Anda</FormLabel>
          <Input
            value={auth.email}
            onChange={(e) => {
              setAuth((state) => ({ ...state, email: e.target.value }))
            }}
            id="email"
            type="email"
            placeholder="nama.email@domain.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password Anda</FormLabel>
          <Input
            value={auth.password}
            onChange={(e) => {
              setAuth((state) => ({ ...state, password: e.target.value }))
            }}
            id="password"
            type="password"
            placeholder="********"
          />
        </FormControl>
        {error && (
          <Text fontSize="sm" textAlign="center" color="red.500">
            * {error}
          </Text>
        )}
        <Button
          onClick={() => handleLogin(auth.email, auth.password)}
          bgColor="blue.500"
          color="ButtonHighlight"
        >
          Masuk
        </Button>
        <Divider />
        <Text textAlign="right">
          Tidak punya akun?{' '}
          <Button
            variant="link"
            color="blue.500"
            onClick={() => navigate('/register')}
          >
            Buat akun
          </Button>
        </Text>
      </VStack>
    </Container>
  )
}
