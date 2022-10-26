const store = require("./app/store");
// const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamAction = require("./features/icecream/icecreamSlice").iceCreamAction;
const candleAction = require("./features/candels/candelsSlice").candleAction;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initial State", store.getState());

const unSubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered());
store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(10));

// unSubscribe();
