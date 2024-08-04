import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';

export type RootStackParamList = {
  Registration: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Registration" 
          component={RegistrationScreen}
          options={{ headerTitle: 'DIGINET' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerTitle: 'DIGINET' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
