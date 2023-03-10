import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const {hamburguesas, setHamburguesas} = useState([]);
  const {categorias} = useParams();
  console.log(categorias);

  useEffect(() => {
    const hb = getFirestore();
    const combosHamburguesas = colllection(hb, "hamburguesas");
    getDocs(combosHamburguesas).then((querySnapshot) => {
      const hamburguesas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setHamburguesas(hamburguesas);
    });
  }, []);

  const filtros = hamburguesas.filter((hamburguesas) => hamburguesas.categorias === categorias);


  return (
    <div>
      {categorias ? <ItemList hamburguesas={filtros}/> : <ItemList hamburguesas={hamburguesas}/>}
    </div>
  )
};

export default ItemListContainer;