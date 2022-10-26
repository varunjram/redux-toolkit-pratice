const redux = require("redux");

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reducLogger = require("redux-logger");
const logger = reducLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function reStockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}
function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}
function reStockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// const initialState = {
//   numOfCakes: 12,
//   numOfIceCream: 20,
// };

const cakeInitialState = {
  numOfCakes: 20,
};
const iceCreamInitialState = {
  numOfIceCream: 12,
};
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case "CAKE_RESTOCKED":
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreameReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case "ICECREAM_ORDERED":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.payload,
      };
    case "ICECREAM_RESTOCKED":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreameReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

// console.log("Initial state", store.getState());

const unSubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(reStockCake(3));
const actions = bindActionCreators({orderCake, reStockCake, orderIceCream, reStockIceCream}, store.dispatch);

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.reStockCake(3);

actions.orderIceCream(5);
actions.reStockIceCream(6);

unSubscribe();
