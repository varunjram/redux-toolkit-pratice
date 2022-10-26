const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
function reStockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty,
  };
}

const initialState = {
  numOfCakes: 12,
  anotherproperty: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case "CAKE_RESTOCKED":
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial state", store.getState());

const unSubscribe = store.subscribe(() => console.log("updated store", store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(reStockCake(3));

unSubscribe();
