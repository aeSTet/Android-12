import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';


const Stack = createNativeStackNavigator();

export default class AppNavigator extends React.Component {

  render() {
    return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
            name="Registration"
            component={Register} />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
            name="Welcome"
            component={Welcome}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}