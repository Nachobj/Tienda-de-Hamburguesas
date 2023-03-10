import { Container } from '@chakra-ui/react'
import Item from './Item';

const ItemList = ({ hamburguesas }) => {
  return (
    <>
      <Container className='categorias'>
        {hamburguesas?.map((hamburguesa) => (
          <Item
            key={hamburguesa.key}
            id={hamburguesa.id}
            nombre={hamburguesa.nombre}
            detalle={hamburguesa.detalle}
            precio={hamburguesa.precio}
            stock={hamburguesa.stock}
            categoria={hamburguesa.categoria}
            img={hamburguesa.img}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;