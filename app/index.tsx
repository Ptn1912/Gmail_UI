import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabLayout from './(tabs)/_layout';

const App = () => {
  return (
    <NavigationContainer independent={true} >
      <TabLayout />
    </NavigationContainer>
  );
};

export default App;
