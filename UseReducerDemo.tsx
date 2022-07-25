import React, {createContext, FC, useContext, useReducer} from 'react';
import {Text, TouchableOpacity} from 'react-native';

const PublicContext = createContext({});

type ActionType = {type: 'reset' | 'increment' | 'decrement'; payload?: any};
type ButtonMakerParamsType = {
  buttonTitle: string;
  action: ActionType;
};

const UseReducerDemo = () => {
  //init
  const initialState = {count: 0};

  //reducer 纯函数
  const reducer = (state: {count: number}, action: {type: any}) => {
    switch (action.type) {
      case 'increment':
        return {...state, count: state.count + 1};
      case 'decrement':
        return {...state, count: state.count - 1};
      case 'reset':
        return {...state, count: 0};
      default:
        throw new Error();
    }
  };

  const ButtonMaker: FC<ButtonMakerParamsType> = ({action}) => {
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
        <ButtonMaker buttonTitle={'increment'} action={{type: 'increment'}} />
        <ButtonMaker buttonTitle={'decrement'} action={{type: 'decrement'}} />
        <ButtonMaker buttonTitle={'reset'} action={{type: 'reset'}} />
      </PublicContext.Provider>
    );
  };

  return <Counter />;
};
export default UseReducerDemo;
