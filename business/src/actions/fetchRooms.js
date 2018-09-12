export function fetchRooms() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ROOMS'});
    return fetch('//localhost:3001/rooms')
      .then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'FETCH_ROOMS', payload: responseJSON})
      })
  }
}

export default fetchRooms;
