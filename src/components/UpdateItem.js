import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function UpdateItem(props) {
  const [product, setProduct] = useState(props.item);
  const [qty, setQty] = useState(props.item.qty);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    if (name === "qty") {
      setQty(value);
      setProduct({ ...product, [name]: parseInt(value) });
    }
  };  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    props.handleUpdate(product);
  };

  return (
    <Modal show={props.show} onHide={props.handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="product_name"
              value={product.product_name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              name="price"
              min="10000"
              value={product.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Quantity"
              name="qty"
              min="1"
              max="100"
              value={qty}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Product
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
