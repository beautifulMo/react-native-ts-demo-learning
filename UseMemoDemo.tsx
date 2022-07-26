import React, {useMemo, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const UseMemoDemo = () => {
  // let [count, setCount] = useState(0);
  const [count, setCount] = useState(0);
  const addFunc = (initCount: number) => ++initCount;

  const memorizedValue = useMemo(() => addFunc(count), [count]);

  return (
    <SafeAreaView>
      {/* <TouchableOpacity onPress={() => setCount(++count)}> 这个是改变自身的值的写法，这样要用let来声明变量*/}
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>+1</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 20}}>memorizedValue :: {memorizedValue}</Text>
    </SafeAreaView>
  );
};

export default UseMemoDemo;
