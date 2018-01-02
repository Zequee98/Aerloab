function user(state={}, action) {
  switch (action.type) {
    case 'REQ_USER':
        return action.user;
    case 'RESTAR_PUNTOS':
        return [
          ...state,
          {points: state.points - action.price}
        ]
    case 'ADD_HISTORY':
        return {
          ...state,
          {redeemHistory: action.itemBuy}
        }
    default:
      return state;
  }
};

export default user;
