import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Button } from 'react-native';
import Word from './Word';
import {Color} from '../constants';

const Log = ({data, font}) => {
  let fList;

  const renderItem = ({item}) => {
    return (
      <Word label={item.label} font={font}/>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        ref={flatList => { fList = flatList; }}
        onContentSizeChange={() => {
          fList.scrollToEnd();
      }}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "70%",
    width: "100%",
    backgroundColor: Color.primary,
    paddingVertical: 10,
    paddingHorizontal: 20
  }
});

export default Log;