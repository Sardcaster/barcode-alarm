import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import AlarmScreen from './screens/AlarmScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AlarmScreen />
    </SafeAreaView>
  );
}
