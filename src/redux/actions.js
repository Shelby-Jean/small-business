export const logIn = () => {
  return {
    type: "LOG_IN"
  }
}

export const logOut = () => {
  return {
    type: "LOG_OUT"
  }
}

export const setUser = (user) => {
  return {
    type: "SET_USER",
    value: user
  }
}

export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: listing
  }
}

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index
  }
}