import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const menus = ['Calon', 'Hasil Pemilihan']

  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'E - Voting'
  })

  return (
    <Box bgColor="blue.500">
      <Container p={3} maxW="container.xl">
        <VStack spacing={2} alignItems="stretch">
          <Button
            alignSelf="flex-end"
            as="h3"
            variant="link"
            fontSize="3xl"
            textAlign="right"
            color="HighlightText"
            onClick={() => navigate('/')}
          >
            E Voting
          </Button>
          <Divider />
          <HStack>
            {menus.map((menu) => (
              <Button key={menu}>{menu}</Button>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
