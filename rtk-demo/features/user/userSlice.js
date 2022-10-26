const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");
// const creatAsyncThunk = require("@reduxjs/toolkit").creatAsyncThunk;

const initialState = {
  loading: false,
  users: [],
  error: "",
};
//generates Pending,Fulfilled and rejected action so try catch block not required
const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/uses");
  return response.data.map((user) => user.id);
});

const userslice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

module.exports = userslice.reducer;
module.exports.fetchUsers = fetchUsers;
