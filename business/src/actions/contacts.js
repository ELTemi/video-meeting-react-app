var uri = process.env.NODE_ENV === 'production' ? '//dry-garden-17503.herokuapp.com/api/v1/contacts' : '//localhost:3001/api/v1/contacts'

export function fetchContacts() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CONTACTS'});
    return fetch(uri)
      .then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'FETCH_CONTACTS', payload: responseJSON})
      })
  }
}

export function addContacts(formData) {
  return(dispatch) => {
    dispatch({type: 'POSTING_CONTACTS'});
    return fetch(uri, {
      method: 'POST',
      body: JSON.stringify({contact: {name: formData.name, phone_number: formData.phoneNumber}}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'ADD_CONTACT', payload: responseJSON});
      })
  }
}

export function deleteContact(formData) {
  return(dispatch) => {
    dispatch({type: 'DELETING_CONTACT'});
    return fetch(uri + '/' + formData.id, {
      method: 'DELETE',
  }).then(response => {
        return dispatch({type: 'DELETE_CONTACT', payload: formData.id})
      })
  }
}
export default fetchContacts;
