export function fetchRooms() {
  var uri = process.env.NODE_ENV === 'production' ? '//dry-garden-17503.herokuapp.com/rooms' : '//localhost:3001/rooms'
  return (dispatch) => {
    dispatch({type: 'LOADING_ROOMS'});
    console.log(process.env.NODE_ENV)
    return fetch('//dry-garden-17503.herokuapp.com/rooms')
      .then(response => {
        return response.json()
      }).then(responseJSON => {
        return dispatch({type: 'FETCH_ROOMS', payload: responseJSON})
      })
  }
}

export default fetchRooms;
