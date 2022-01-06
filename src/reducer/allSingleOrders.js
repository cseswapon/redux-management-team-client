const allOrders = (state = [], action) => {
  switch (action.type) {
    case "SINGLEORDER":
      return (state = action.data);
    default:
      return state;
  }
};
export default allOrders;
