import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppText from './assets/components/AppText';
import AppColors from './assets/config/AppColors';

export default function App() {
  return (
    <View style={styles.container}>
      <AppText style={styles.text} color={AppColors.rouge}>Cactus!?!?</AppText>
      <StatusBar style="auto" />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: AppColors.rouge,
    fontWeight: 'bold',
  }
});
