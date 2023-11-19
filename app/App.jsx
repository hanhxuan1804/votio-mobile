import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../services/i18n';
import {useDispatch, useSelector} from 'react-redux';
import {settingsActions, selectors} from '../store';
import {
  LoginScreen,
  OnboardingScreen,
  RegisterScreen,
} from '../components/auth';
import {AppState} from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  const settings = useSelector(selectors.settings);
  const dispatch = useDispatch();
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    AsyncStorage.getItem('setings').then(res => {
      if (res) {
        if (JSON.parse(res).language) {
          i18n.changeLanguage(JSON.parse(res).language);
          dispatch(settingsActions.setLanguage(JSON.parse(res).language));
        }
      } else {
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        nextAppState.match(/inactive|background/) &&
        appState.current === 'active'
      ) {
        AsyncStorage.setItem('setings', JSON.stringify(settings));
      }
      appState.current = nextAppState;
    });
    return () => subscription.remove();
  }, [settings]);
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
