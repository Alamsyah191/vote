import { Button, Heading, Icon, VStack } from '@chakra-ui/react'
import { MdWest } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <VStack height="full">
      <Heading as="h4" fontSize="xl" m="auto">
        Halaman yang Anda cari tidak ditemukan
        <br />
        <Button
          isFullWidth
          leftIcon={<Icon as={MdWest} />}
          variant="link"
          mt={3}
          onClick={() => navigate(-1)}
        >
          Kembali
        </Button>
      </Heading>
    </VStack>
  )
}
