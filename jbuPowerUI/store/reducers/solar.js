import {SOLAR} from "../../data/dummy-solar-data";

const initialState = {
  allSolar: SOLAR
}


export default function solarReducer(state = initialState, action) {
  switch(action.type) {
    case "FETCH_SOLAR":
      return {
        ...state,
        allSolar: action.payload
      };
    default:
      return state;
  }
}