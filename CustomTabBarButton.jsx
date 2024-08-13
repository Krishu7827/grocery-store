import React from 'react';
import { TouchableOpacity, View, StyleSheet,Text } from 'react-native';

const CustomTabBarButton = ({routeName, children, onPress, style }) => {
    console.log(routeName)
    
  return (
    <TouchableOpacity
      style={[{
        justifyContent: 'center',
        alignItems: 'center',
        
        ...styles.shadow,
      }, style]}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: 'tomato',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </View>
      <Text style={{fontWeight:'bold'}}>
     Shop
  </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default CustomTabBarButton;
