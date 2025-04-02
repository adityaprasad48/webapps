import Comments from '@/comp/Comments';
import '../App.css'
import { useSelector, useDispatch } from "react-redux";
import { Button } from '@/components/ui/button';
import UsersList from '@/Users';
import { decrement, increment, incrementByAmount, toggleTheme } from '@/store';


// 1️⃣ Define State & Actions → createSlice()
// 2️⃣ Create Redux Store → configureStore()
// 3️⃣ Provide Store to App → <Provider store={store}>
// 4️⃣ Read Data from Store → useSelector()
// 5️⃣ Update State → useDispatch() & Actions

// Why Use Redux Toolkit?
// ✅ Less Boilerplate (No need for switch cases in reducers)
// ✅ Simplified State Updates (createSlice auto-mutates state)
// ✅ Built-in Middleware (Good for handling async operations like API calls)

// In Redux Toolkit, dispatch is a function used to send actions to the Redux store. 
// actions are instructions that tell Redux how to update the state.

// In Redux Toolkit, an action is an instruction that tells Redux what to do with the state.

// Think of an action as a command that triggers a state change.

// An action is just a JavaScript object that describes what change should happen.

// Every action must have a type property (which tells Redux what kind of change to make).

// Actions can also have data (payload) if needed.

// createSlice() automatically creates action objects for each reducer:

// increment → { type: "counter/increment" }

// decrement → { type: "counter/decrement" }

// incrementByAmount(5) → { type: "counter/incrementByAmount", payload: 5 }

// Actions are instructions that tell Redux what to do.

// Every action must have a type property.

// Redux Toolkit auto-generates actions when using createSlice().

// Dispatching an action updates the Redux state.




function Home() {
  const count = useSelector((state:any) => state.counter.value);
  const darkMode = useSelector((state:any) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      // background: darkMode ? "#222" : "#fff",
      // color: darkMode ? "#fff" : "#000",
      minHeight: "100vh",
      padding: "20px",
      gap: "10px"
    }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button  onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>➕➕ Add 5</button>

      <hr />

      <h2>Theme: {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
      <Button variant="destructive">Hello</Button>
      <UsersList />
      <Comments/>
     
    </div>
  )
}

export default Home
