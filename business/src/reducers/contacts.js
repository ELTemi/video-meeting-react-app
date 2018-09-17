export default function contactsReducer(state = {loading: false, contacts: []}, action) {
  switch (action.type) {

    case 'FETCH_CONTACTS':
      return {loading: false, contacts: action.payload};
    case 'ADD_CONTACT':
      return { contacts: state.contacts.concat(action.payload) }
    case 'DELETE_CONTACT':
      const contacts = state.contacts.filter(contact => contact.id !== action.payload);
      return { contacts };
    default:
      return state;
  }
};
