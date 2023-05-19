import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../Pages/HomePage'
import { PulbicarPublicacion } from '../Pages/PulbicarPublicacion'

const Stack = createNativeStackNavigator()

const Redirects = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
            name = 'HomePage'
            component={ HomePage }
        />

        <Stack.Screen
            name = "Publicar"
            component={ PulbicarPublicacion }
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Redirects