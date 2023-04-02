import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItem from './components/AddItemForm';

function App() {
  const [products, setProducts] = useState([]);

  const updateProduct = (product) => {
    const updatedProducts = products.map((item) => {
      if (item.id === product.id) {
        return product;
      }
      return item;
    });
    setProducts(updatedProducts);
  };

  // const deleteProduct = (id) => {
  //   setProducts(products.filter((product) => product.id !== id));
  // }
  return (
    <div className='container'>
      <h1>Inventory System</h1>
<div>
<AddItem products={products} setProducts={setProducts} updateProduct={updateProduct} />
{/* <InventoryList products={products} deleteProduct={deleteProduct} /> */}
    </div>
    </div>
  );
}

export default App;
