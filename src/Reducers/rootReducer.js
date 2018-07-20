import { ADD_POINT, REMOVE_POINT } from "../ActionCreators/mapActionCreators";

const initialState = {
  points: [],
  id: 0
};

export default function rootReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case ADD_POINT:
      newState.id++;
      return {
        ...newState,
        points: [...newState.points, { point: action.point, id: newState.id }]
      };
    case REMOVE_POINT:
      let points = newState.points.filter(point => point.id !== action.id);
      return {
        ...newState,
        points
      };
    default:
      return newState;
  }
}
