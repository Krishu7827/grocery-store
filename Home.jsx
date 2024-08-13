import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar,KeyboardAvoidingView,Keyboard} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import SearchComponent from './Components/Search';
const Home = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    
    <SafeAreaView style={styles.container}>
      <SearchComponent/>
      {[1, 2, 3].map((_, index) => (
        <View key={index} style={styles.placeholderContainer}>
          <ShimmerPlaceholder style={styles.circlePlaceholder} />
          <ShimmerPlaceholder style={styles.rectPlaceholder} />
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // padding: 16,
   marginTop:-44,
    paddingTop:StatusBar.currentHeight
  },
  placeholderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft:8
  },
  circlePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  rectPlaceholder: {
    width: '80%',
    height: 50,
  },
});

export default Home;
