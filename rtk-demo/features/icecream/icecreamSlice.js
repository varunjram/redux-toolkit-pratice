const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;

const initialState = {
  numOfIceCreams: 15,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      action.payload ? (state.numOfIceCreams += action.payload) : state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      action.payload ? (state.numOfIceCreams += action.payload) : (state.numOfIceCreams = 100);
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIceCreams--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamAction = iceCreamSlice.actions;
