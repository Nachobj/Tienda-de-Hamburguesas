import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-router-dom';


const Item = ({id, nombre, stock, categoria, img}) => {
  return (
    <div>
        <div key={id}>
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre}</Heading>
      <Text>
        Categoria: {categoria}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {stock}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </div>
    </div>
  )
};

export default Item