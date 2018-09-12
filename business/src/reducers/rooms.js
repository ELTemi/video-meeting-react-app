export default function roomsReducer(state = {loading: false, rooms: []}, action) {
  switch (action.type) {

    case 'FETCH_ROOMS':
      return {loading: false, rooms: action.payload.rooms}

    default:
      return state;
  }
};
