import { Form, Button } from "react-bootstrap";
import { useState, createRef } from "react";
import InventoryList from "./InventoryList";

export default function AddItem(props) {
  // typeOfData [stateData,stateUpdateFunction] = useState(initialData)
  let initialValue = [];
  const [products, setProduct] = useState(initialValue);
  const formData = createRef(); // Ref is used to access the submitted data from form.

  //addproduct handler method
  const add = (event) => {
    event.preventDefault();
    const newProduct = {
      product_name: formData.current.product_name.value,
      price: formData.current.price.value,
      qty: Number(formData.current.qty.value),
    };
    const addProduct = (product) => {
      props.setProducts([...props.products, product]);
    };
    // Call the addProduct function to add the new product
    addProduct(newProduct);

    const deleteProduct = (id) => {
      const filteredProducts = props.products.filter((product) => product.id !== id);
      props.setProducts(filteredProducts);
    };

  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Form onSubmit={add} ref={formData} className="row">
            <Form.Group className="col-md-4 col-lg-3 col-sm-6 mb-3" controlId="formBasicProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="product_name"
              />
            </Form.Group>

            <Form.Group className="col-md-4 col-lg-3 col-sm-6 mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                name="price"
                min="10000"
              />
            </Form.Group>

            <Form.Group className="col-md-4 col-lg-3 col-sm-6 mb-3" controlId="formBasicQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantity"
                name="qty"
                min="1"
                max="100"
              />
            </Form.Group>
<div className="col-md-4 col-lg-3 col-sm-6 mt-sm-4 pt-sm-2">
<Button variant="primary" type="submit">Add to Inventory</Button> 
</div>
          </Form>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
        <InventoryList products={props.products} updateProduct={props.updateProduct} deleteProduct={deleteProduct} />
                </div>
      </div>
    </>
  );
}
