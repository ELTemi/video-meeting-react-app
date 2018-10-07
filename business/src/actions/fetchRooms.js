export function fetchRooms() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ROOMS'});
    return fetch('//dry-garden-17503.herokuapp.com/rooms')
      .then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'FETCH_ROOMS', payload: responseJSON})
      })
  }
}

export default fetchRooms;
