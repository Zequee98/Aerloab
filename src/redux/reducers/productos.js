function productos(state=[], action) {
  switch (action.type) {
    case "LIST_PRODUCTS":
        return action.products;
    case "CHANGE_LIST":
        return action.products;
    default:
        return state;
  }
};

export default productos;
