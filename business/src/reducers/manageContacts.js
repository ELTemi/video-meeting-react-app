export default function manageContacts(state = {
  contacts: [],
}, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return { ...state, contacts: [...state.contacts, action.contact] }
    default:
      return state;
  }
};
