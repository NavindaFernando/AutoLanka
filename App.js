import { View, Text } from 'react-native'
import Splash from './screens/Splash'
import Login from './screens/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  options={{headerShown: false}} name="Splash" component={Splash} />
      <Stack.Screen  options={{headerShown: false}} name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}