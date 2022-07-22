import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Themes = {
  light: {
    background: 'pink',
  },
  dark: {
    background: 'green',
  },
  default: {
    background: 'red',
  },
};

const CountContext = createContext(0);

const UseContextDemoScreen = () => {
  const [count, setCount] = useState<number>(0);

  const Count = () => {
    return (
      // <Text style={{backgroundColor: 'red'}}>子组件的点击数：{childCount}</Text>
      <CountContext.Consumer>
        {acount => (
          <>
            <Text
              style={{
                backgroundColor:
                  acount % 2 == 0
                    ? Themes.dark.background
                    : Themes.light.background,
              }}>
              子组件的点击数：{acount}
            </Text>
          </>
        )}
      </CountContext.Consumer>
    );
  };

  return (
    <View>
      <Text>父组件的点击数量:{count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>点击 + 1111: {count}</Text>
      </TouchableOpacity>
      <CountContext.Provider value={count}>
        <Count />
      </CountContext.Provider>
    </View>
  );
};

export default UseContextDemoScreen;
