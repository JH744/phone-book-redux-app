let initialState = {
  contactList: [],
};

function reducer(state = initialState, action) {
  console.log("sss");
  //   const { type, payload } = action;
  console.log(state.payload.name);
  switch (state.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: state.payload.name,
            phoneNumber: state.payload.phoneNumber,
          },
        ],
      };
    default:
      return { ...state };
  }
}

export default reducer;
