export function fetchContacts() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CONTACTS'});
    return fetch('//localhost:3001/contacts')
      .then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'FETCH_CONTACTS', payload: responseJSON})
      })
  }
}

export default fetchContacts;
