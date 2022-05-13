import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { FaVoteYea } from 'react-icons/fa'
import Card from '../components/Card'

export default function Pemilihan() {
  const data = Array.from({ length: 20 }).map((_data, index) => ({
    noUrut: index,
    totalSuara: Math.floor(Math.random() * 100),
    image: 'https://picsum.photos/200',
    name: `Nama Calon ${index}`,
    visiAndMisi:
      'Kami tidak pernah meragukan tamu meskipun permintaannya aneh-aneh',
  }))

  useEffect(() => {
    document.title = 'Profil Paslon | E - Voting'
  })

  return (
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(2,1fr)" gap={5}>
        <GridItem colSpan={2} my={5}>
          <HStack alignItems="flex-start" justifyContent="space-between">
            <Box>
              <Heading>Hasil Pemilihan</Heading>
              <Text>
                Untuk pemilihan saat ini masih bersifat sementara hingga waktu
                yang ditentukan
              </Text>
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
              <Icon boxSize={8} as={FaVoteYea} />
              <Text>{paslon.totalSuara} total suara</Text>
              <Spacer />
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}
