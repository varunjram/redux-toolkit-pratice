const {configureStore} = require("@reduxjs/toolkit");
const logger = require("redux-logger").createLogger();
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/icecreamSlice");
const candleReducer = require("../features/candels/candelsSlice");
const userReducer = require("../features/user/userSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    candle: candleReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
