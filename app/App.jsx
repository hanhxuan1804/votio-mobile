import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import {
  LoginScreen,
  OnboardingScreen,
  RegisterScreen,
} from '../components/auth';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="onboarding"
          options={{headerShown: false}}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
