import React, {createContext, useReducer} from 'react';

const initialState = 0;
const store = createContext(initialState);
const { Provider } = store;

const CounterProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'ADD_ONE':
        const newCount = state+1
        return newCount;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>
};

export { store, CounterProvider }