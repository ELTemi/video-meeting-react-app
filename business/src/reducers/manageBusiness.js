export default function manageBusiness(state = {
  businesses: [],
}, action) {
  switch (action.type) {
    case 'ADD_BUSINESS':
      return { ...state, businesses: [...state.businesses, action.business] }
    default:
      return state;
  }
};
