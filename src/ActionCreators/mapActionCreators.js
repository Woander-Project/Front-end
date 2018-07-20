export const ADD_POINT = "ADD_POINT";
export const REMOVE_POINT = "REMOVE_POINT";

export function addPoint(point) {
  return {
    type: ADD_POINT,
    point
  };
}

export function removePoint(id) {
  return {
    type: REMOVE_POINT,
    id
  };
}
