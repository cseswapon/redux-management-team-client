import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSingleOrders } from "../../../../../action/index.action";
import useFirebase from "../../../../../hooks/useFirebase";
const OrderList = () => {
  const { users } = useFirebase();
  const dispatch = useDispatch();
  const allorders = useSelector((state) => state.allOrders);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${users.email}`, {
      headers: {
        authorization: `Barer ${localStorage.getItem("id_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(setSingleOrders(data)));
  }, [dispatch, users.email]);

  return (
    <div>
      <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allorders.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.title}</td>
              <td>{user.email}</td>
              <td>${user.payment}</td>
              <td>
                <button disabled>Paid</button>
              </td>
              {/* <td>
                <Button variant="danger" onClick={() => handelClick(user._id)}>
                  Delete
                </Button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
