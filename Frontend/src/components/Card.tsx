import {
  Container,
  Divider,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'

type CardType = {
  noUrut: number
  totalSuara: number
  image: string
  name: string
  visiAndMisi: string
  children?: JSX.Element | JSX.Element[]
}
export default function Card(props: CardType) {
  const { noUrut, image, name, visiAndMisi, children } = props

  return (
    <Container maxW="full" boxShadow="lg">
      <SimpleGrid columns={2}>
        <Container>
          <Image src={image} boxSize="xs" />
        </Container>
        <Container>
          <VStack h="full" p={2} alignItems="flex-start">
            <Text alignSelf="flex-end" fontSize="sm">
              No Urut. {noUrut}
            </Text>
            <Text fontSize="2xl" fontWeight="bold" letterSpacing="wider">
              {name}
            </Text>
            <Divider />
            <Text fontStyle="italic" letterSpacing="wider">
              {'"'}
              {visiAndMisi}
              {'"'}
            </Text>
            <Spacer />
            <HStack w="full">{children}</HStack>
          </VStack>
        </Container>
      </SimpleGrid>
    </Container>
  )
}
