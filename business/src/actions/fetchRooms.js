export function fetchRooms() {
  var uri = process.env.NODE_ENV === 'production' ? '//dry-garden-17503.herokuapp.com/rooms' : '//localhost:3001/rooms'
  return (dispatch) => {
    dispatch({type: 'LOADING_ROOMS'});
    return fetch(uri)
      .then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'FETCH_ROOMS', payload: responseJSON})
      })
  }
}

export function addMeetingName(formData) {
  var uri = process.env.NODE_ENV === 'production' ? '//dry-garden-17503.herokuapp.com/api/v1/meetings' : '//localhost:3001/api/v1/meetings'

  return(dispatch) => {
    dispatch({type: 'POSTING_MEETING_NAME'});
    return fetch(uri, {
      method: 'POST',
      body: JSON.stringify({meeting: {name: formData.roomName}}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        return dispatch({type: 'ADD_MEETING_NAME', payload: responseJSON});
      })
  }
}

export default fetchRooms;
