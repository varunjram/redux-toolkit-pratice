const redux = require("redux");

const produce = require("immer").produce;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const initialState = {
  name: "Varun",
  address: {
    street: "22 Main St",
    city: "Bengaluru",
    state: "MA",
  },
};

const STREET_UPDATE = "STREET_UPDATE";

function updateState(newData) {
  return {
    type: STREET_UPDATE,
    payload: newData,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STREET_UPDATE":
      //   return {
      //     ...state,
      //     address: {...state.address, street: action.payload},
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));

// console.log("initialStore", store.getState());

// const unSubscribe = store.subscribe(() => console.log("updated store", store.getState()));

store.dispatch(updateState("Awesome"));
