export function fetchContacts() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CONTACTS'});
    return fetch('//localhost:3001/api/v1/contacts')
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
    console.log(formData)
    return fetch('//localhost:3001/api/v1/contacts', {
      method: 'POST',
      body: JSON.stringify({contact: {name: formData.name, phone_number: formData.phoneNumber}}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
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
    return fetch('//localhost:3001/api/v1/contacts/' + formData.id, {
      method: 'DELETE',
  }).then(response => {
        return dispatch({type: 'DELETE_CONTACT', payload: formData.id})
      })
  }
}
export default fetchContacts;
