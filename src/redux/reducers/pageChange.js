const INITIAL_STATE = false;

function pageChange(state= INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_STATE':
      return action.newState;
    default:
      return state;
  }
};

export default pageChange;
