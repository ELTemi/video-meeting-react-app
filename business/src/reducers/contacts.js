export default function contactsReducer(state = {loading: false, contacts: []}, action) {
  switch (action.type) {

    case 'FETCH_CONTACTS':
      return {loading: false, contacts: action.payload}

    default:
      return state;
  }
};
