import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersLists from '../screens/usersList';
import UserProfile from '../screens/userProfile';
const Stack = createNativeStackNavigator();

import { SafeAreaView } from 'react-native-safe-area-context'


export default function  StackNavigation (){
  return(
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer >
            <Stack.Navigator>
            <Stack.Screen name="UsersLists" options={{ headerShown: false }} component={UsersLists}/>
            <Stack.Screen name="UserProfile" options={{ headerShown: false }} component={UserProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}


