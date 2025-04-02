import { configureStore, createSlice ,createAsyncThunk} from "@reduxjs/toolkit";


// 🔹 Counter Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

// 🔹 Theme Slice
const themeSlice = createSlice({
  name: "theme",
  initialState: { darkMode: false },
  reducers: {
    toggleTheme: (state) => { state.darkMode = !state.darkMode; },
  },
});


const userSlice = createSlice({
  name: "users",
  initialState: { users: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // Save data to state
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json(); // Auto-sends data as `fulfilled` action
  } catch (error: any) {
    return rejectWithValue(error.message || "Something went wrong");
  }
});



// 🔹 Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { toggleTheme } = themeSlice.actions;

// 🔹 Create and export store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
    users: userSlice.reducer,
  },
});
