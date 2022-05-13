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
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RegisterForm() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Register | E - Voting'
  })

  return (
    <Container alignSelf="center" m="auto" boxShadow="lg" p={5}>
      <VStack alignItems="stretch" spacing={3}>
        <Heading as="h4" fontSize="lg" mb="5" textAlign="center">
          Silahkan Buat Akun Anda
        </Heading>

        <FormControl>
          <FormLabel>Email Anda</FormLabel>
          <Input id="email" type="email" placeholder="nama.email@domain.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Password Anda</FormLabel>
          <Input id="password" type="password" placeholder="********" />
        </FormControl>
        <FormControl>
          <FormLabel>Konfirmasi Password Anda</FormLabel>
          <Input
            id="confirmation-password"
            type="password"
            placeholder="********"
          />
        </FormControl>
        <Button bgColor="blue.500" color="ButtonHighlight">
          Buat Akun
        </Button>
        <Divider />
        <Text textAlign="right">
          Sudah punya akun?{' '}
          <Button
            variant="link"
            color="blue.500"
            onClick={() => navigate('/login')}
          >
            Masuk
          </Button>
        </Text>
      </VStack>
    </Container>
  )
}
