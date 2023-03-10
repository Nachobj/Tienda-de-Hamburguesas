import React from 'react';
import {useState, useEffect} from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1);

  return (
    <>
      <h2>{cantidad}</h2>
      <button onClick={() => setCantidad(cantidad + 1)}>Agregar Producto</button>
      <button onClick={() => setCantidad(cantidad - 1)}>Eliminar Producto</button>
      <button onClick={() => setCantidad(cantidad - cantidad)}>Vaciar Carrito</button>
    </>
  );
}

export default ItemCount;