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
    fetch(
      `https://react-redux-management.herokuapp.com/orders?email=${users.email}`
    )
      .then((res) => res.json())
      .then((data) => dispatch(setSingleOrders(data)));
  }, [allorders]);

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
                <button disable>Paid</button>
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
