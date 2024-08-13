import React, { useEffect } from 'react';
import { LogBox, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationBar from 'expo-navigation-bar';
import { FontAwesome5 } from '@expo/vector-icons';

import Home from './Home';
import Dashboard from './Dashboard';
import Store from './Store';
import CustomTabBarButton from './CustomTabBarButton';

LogBox.ignoreLogs([
  'Warning: ...', // Add specific warning messages here
]);

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    // Change the navigation bar color
    NavigationBar.setBackgroundColorAsync('white');
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'red'}
        barStyle="dark-content"
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100} // Adjust this offset based on your navbar height
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'shopping-cart' : 'shopping-cart';
              } else if (route.name === 'Store') {
                iconName = focused ? 'store' : 'store';
              }

              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: true, // Show labels
            tabBarStyle: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 60,
              paddingBottom: 0, // Ensure no extra padding
            },
            tabBarLabelStyle: {
              fontWeight: 'bold',
              fontSize: 13,
            }
          })}
        >
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Settings"
            component={Dashboard}
            options={{
              tabBarButton: (props) => (
                <CustomTabBarButton {...props}>
                  <FontAwesome5 name="shopping-cart" size={30} color="white" />
                </CustomTabBarButton>
              ),
              headerShown: false
            }}
          />
          <Tab.Screen 
            name="Store" 
            component={Store} 
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
