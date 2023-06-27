import { ReactElement, useContext } from "react";
import { CounterContext } from "./context/CounterContext";
// import { ChangeEvent } from "react";

// const initialState = { count: 0, text: "" };

// const enum REDUCER_ACTION_TYPE {
//   INCREMENT,
//   DECREMENT,
//   NEW_INPUT,
// }

// type ReducerAction = {
//   type: REDUCER_ACTION_TYPE;
//   payload?: string;
// };

// function reducer(
//   state: typeof initialState,
//   action: ReducerAction
// ): typeof initialState {
//   if (action.type === REDUCER_ACTION_TYPE.INCREMENT) {
//     return { ...state, count: state.count + 1 };
//   }
//   if (action.type === REDUCER_ACTION_TYPE.DECREMENT) {
//     return { ...state, count: state.count - 1 };
//   }
//   if (action.type === REDUCER_ACTION_TYPE.NEW_INPUT) {
//     // console.log(action.payload);
//     return { ...state, text: action.payload ?? "" };
//   }
//   return state;
// }

// type ChildrenType = {
//   children: ReactElement[] | ReactElement | undefined;
// };

function Counter() {
  // const [state, dispatchFn] = useReducer(reducer, initialState);

  // const increment = () => dispatchFn({ type: REDUCER_ACTION_TYPE.INCREMENT });
  // const decrement = () => dispatchFn({ type: REDUCER_ACTION_TYPE.DECREMENT });

  // function handleTextInput(e: ChangeEvent<HTMLInputElement>) {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   dispatchFn({
  //     type: REDUCER_ACTION_TYPE.NEW_INPUT,
  //     payload: e.target.value,
  //   });
  // }

  const ctx = useContext(CounterContext);

  // console.log(ctx);
  return (
    <>
      <h1>{ctx.state.count}</h1>
      <div>
        <button onClick={ctx.increment}>+</button>
        <button onClick={ctx.decrement}>-</button>
      </div>
      <input type="text" onChange={ctx.handleTextInput} />
      <h2>{ctx.state.text}</h2>
    </>
  );
}

export default Counter;
