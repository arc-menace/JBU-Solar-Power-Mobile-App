const initialState = {
  energy_today: true
}


export default function todayReducer(state = initialState, action) {
  switch(action.type) {
    case "TOGGLE_TODAY":
      return {
        ...state,
        energy_today: action.payload
      };
    case "TOGGLE_LIFETIME":
      return {
        ...state,
        energy_today: action.payload
      };
    default:
      return state;
  }
}