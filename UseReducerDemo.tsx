import React, {createContext, FC, useContext, useReducer} from 'react';
import {Text, TouchableOpacity} from 'react-native';

const PublicContext = createContext({});

const UseReducerDemo = () => {
  //init
  const initialState = {count: 0};

  //reducer 纯函数
  // action: { type:'string', payload:any}
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'reset':
        return {count: 0};
      default:
        throw new Error();
    }
  };
  type ButtonMakerParams = {
    buttonTitle: string;
    action: {type: 'reset' | 'increment' | 'decrement'; payload: any};
  };
  // const ButtonMaker: FC<ButtonMakerParams> = ({buttonTitle, action}) => {
  //   const {dispatch} = useContext(PublicContext);
  //   return (
  //     <TouchableOpacity onPress={() => {dispatch({type: 'reset'})}}>
  //       <Text>{buttonTitle}</Text>
  //     </TouchableOpacity>
  //   );
  // };

  const Counter = (initialCount: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <PublicContext.Provider value={{dispatch}}>
        <Text>Count:::{state.count}</Text>
        {/* <ButtonMaker
          buttonTitle={'reset'}
          action={{
            type: 'reset',
            payload: initialCount,
          }}
        /> */}
        <TouchableOpacity onPress={() => dispatch({type: 'increment'})}>
          <Text>Test</Text>
        </TouchableOpacity>
      </PublicContext.Provider>
    );
  };

  return <Counter initialCount={0} />;
};
export default UseReducerDemo;
