export const addBusiness = (business) => {
  return {
    type: "ADD_BUSINESS",
    value: business
  }
}

export const removeBusiness = (index) => {
  return {
    type: "REMOVE_BUSINESS",
    value: index
  }
}