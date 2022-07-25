import React, {createContext, FC, useContext, useReducer} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const PublicContext = createContext(() => {});

type ActionType = {
  type: 'reset' | 'increase' | 'decrease';
  payload?: any;
};

type StateType = {
  count: number;
};

type ButtonParams = {
  action: ActionType;
};

const UseReducerDemo = () => {
  const initialState = {
    count: 0,
  };
  const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case 'decrease':
        return {...state, count: state.count - 1};
      case 'increase':
        return {...state, count: state.count + 1};
      case 'reset':
        return {...state, count: 0};
      default:
        throw new Error();
    }
  };

  const Button: FC<ButtonParams> = ({action}) => {
    const dispatch = useContext(PublicContext);
    return (
      <TouchableOpacity onPress={() => dispatch({type: action.type})}>
        <Text>{action.type}</Text>
      </TouchableOpacity>
    );
  };

  const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <PublicContext.Provider value={dispatch}>
        <Text>Count:::{state.count}</Text>
        <Button action={{type: 'increase'}} />
        <Button action={{type: 'decrease'}} />
        <Button action={{type: 'reset'}} />
      </PublicContext.Provider>
    );
  };
  return <Counter />;
};

export default UseReducerDemo;
