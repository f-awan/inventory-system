import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import UpdateItem from "./UpdateItem";

function InventoryList(props) {
  const [showUpdate, setShowUpdate] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (item) => {
    setSelectedProduct(item);
    setShowUpdate(true);
  };

  const handleUpdate = (product) => {
    props.updateProduct(product);
    setShowUpdate(false);
  };

  const handleCancel = () => {
    setShowUpdate(false);
  };

  const handleDeleteProduct = (id) => {
    props.deleteProduct(id);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>
                  <Button variant="outline-primary me-1" onClick={() => handleEdit(item)}>
                    Edit
                  </Button>
                 <Button variant="outline-danger ms-1"  onClick={() => handleDeleteProduct(item.index)}>
                Delete
              </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {selectedProduct && (
        <UpdateItem
          show={showUpdate}
          item={selectedProduct}
          handleUpdate={handleUpdate}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
}

export default InventoryList;
