import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {Transaction, CryptoDetail} from './screens'
import Tabs from './navigation/tabs'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Home'}
        >
          <Stack.Screen 
              name="Home"
              component={Tabs}
          />
          <Stack.Screen 
              name="CryptoDetail"
              component={CryptoDetail}
          />
          <Stack.Screen 
              name="Transaction"
              component={Transaction}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


