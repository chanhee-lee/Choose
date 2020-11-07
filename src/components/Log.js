import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Button } from 'react-native';
import Word from './Word';

const Log = (props) => {
  let fList;

  const renderItem = ({item}) => {
    return (
      <Word label={item.label} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={props.data}
        renderItem={renderItem}
        ref={flatList => { fList = flatList; }}
        onContentSizeChange={() => {
          fList.scrollToEnd();
      }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "70%",
    width: "100%",
    backgroundColor: "grey"
  }
})

export default Log;