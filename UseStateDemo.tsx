import React, {useState} from 'react';
import {Text, View} from 'react-native';

const UseStateDemo = () => {
  const addFuc = (initCount: number) => ++initCount;

  //useState 的初始值可以经过一个函数的计算，但是后续渲染时会被忽略
  const [count, setCount] = useState(() => {
    const initialState = addFuc(100);
    return initialState;
  });

  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};

export default UseStateDemo;
