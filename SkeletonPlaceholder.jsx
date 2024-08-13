import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';

const SkeletonPlaceholder = () => {
  return (
    <View style={styles.container}>
      <SkeletonContent
        containerStyle={styles.skeletonContainer}
        isLoading={true}
        layout={[
          { width: 300, height: 20, marginBottom: 10 },
          { width: 250, height: 20, marginBottom: 10 },
          { width: 200, height: 20, marginBottom: 10 },
          { width: 350, height: 20, marginBottom: 10 },
          { width: 150, height: 20, marginBottom: 10 },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skeletonContainer: {
    width: 300,
  },
});

export default SkeletonPlaceholder;
