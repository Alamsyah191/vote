import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Card from '../components/Card'

export default function Calon() {
  const data = Array.from({ length: 20 }).map((_data, index) => ({
    noUrut: index,
    totalSuara: Math.floor(Math.random() * 100),
    image: 'https://picsum.photos/200',
    name: `Nama Calon ${index}`,
    visiAndMisi:
      'Kami tidak pernah meragukan tamu meskipun permintaannya aneh-aneh',
  }))

  useEffect(() => {
    document.title = 'Daftar Calon | E - Voting'
  })

  return (
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(2,1fr)" gap={5}>
        <GridItem colSpan={2} my={5}>
          <HStack alignItems="flex-start" justifyContent="space-between">
            <Box>
              <Heading>Daftar Paslon</Heading>
              <Text>Berisi visi dan misi serta no urut masing-masing</Text>
            </Box>
            <Box>
              <Text>Jumlah Paslon : {data.length}</Text>
            </Box>
          </HStack>
        </GridItem>
        {data.map((paslon) => (
          <GridItem key={paslon.noUrut}>
            <Card
              image={paslon.image}
              name={paslon.name}
              visiAndMisi={paslon.visiAndMisi}
              noUrut={paslon.noUrut}
              totalSuara={paslon.totalSuara}
            >
              <Button
                isFullWidth
                variant="ghost"
                rightIcon={<Icon as={FaArrowRight} />}
              >
                Profil Paslon
              </Button>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}
