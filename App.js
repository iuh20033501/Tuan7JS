import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './demo/Screen1';
import Screen2 from './demo/Screen2';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen3 from './demo/Screen3';
import Screen4 from './demo/Screen4';
export default function App() {
   const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' options={{headerShown:false}}>
        <stack.Screen name = 'Screen1' component={Screen1}  options={{ headerShown: false }}/>
        <stack.Screen name = 'Screen2' component={Screen2}  options={{ headerShown: false }}/>
        <stack.Screen name = 'Screen3' component={Screen3}  options={{ headerShown: false }}/>
        <stack.Screen name = 'Screen4' component={Screen4}  options={{ headerShown: false }}/>
      </stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
