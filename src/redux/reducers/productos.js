function productos(state=[], action) {
  switch (action.type) {
    case "LIST_PRODUCTS":
        return action.productos;
    default:
        return state;
  }
};

export default productos;
