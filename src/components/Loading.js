import React from 'react';
import {View, ActivityIndicator,StyleSheet} from 'react-native';



export const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
        <ActivityIndicator style={{backgroundColor:'transparent'}} size="large" color={'#9000cb'} />
    </View>
  );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      },
      loading: {
        height: 30,
        width: 30,
      },
});