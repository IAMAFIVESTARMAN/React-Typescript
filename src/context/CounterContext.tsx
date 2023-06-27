import {
  useReducer,
  ChangeEvent,
  createContext,
  ReactElement,
  useCallback,
} from "react";

type StateType = {
  count: number;
  text: string;
};

export const initialState: StateType = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

function reducer(state: StateType, action: ReducerAction): StateType {
  if (action.type === REDUCER_ACTION_TYPE.INCREMENT) {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === REDUCER_ACTION_TYPE.DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === REDUCER_ACTION_TYPE.NEW_INPUT) {
    // console.log(action.payload);
    return { ...state, text: action.payload ?? "" };
  }
  return state;
}

const UseCounterContext = (initialState: StateType) => {
  const [state, dispatchFn] = useReducer(reducer, initialState);

  const increment = useCallback(
    () => dispatchFn({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );
  const decrement = useCallback(
    () => dispatchFn({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );

  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log(e.target.value);
    dispatchFn({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  }, []);

  return { state, increment, decrement, handleTextInput };
};

type UseCounterContextType = ReturnType<typeof UseCounterContext>;

const initialContextState: UseCounterContextType = {
  state: initialState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initialContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const CounterProvider = ({
  children,
  ...initialState
}: StateType & ChildrenType): ReactElement => {
  return (
    <CounterContext.Provider value={UseCounterContext(initialState)}>
      {children}
    </CounterContext.Provider>
  );
};
