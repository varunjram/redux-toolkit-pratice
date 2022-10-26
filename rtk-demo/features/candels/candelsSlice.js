const createCandleSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCandles: 2,
};

const candleSlice = createCandleSlice({
  name: "candle",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCandles--;
    },
    restocked: (state, action) => {
      state.numOfCandles++;
    },
  },
});

module.exports = candleSlice.reducer;
module.exports.candleAction = candleSlice.actions;
