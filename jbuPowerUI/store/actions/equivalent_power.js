export const toggle_today = () => {
  return {
    type: "TOGGLE_TODAY",
    payload: true
  }
}

export const toggle_lifetime = () => {
  return {
    type: "TOGGLE_LIFETIME",
    payload: false
  }
}