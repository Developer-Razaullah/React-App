import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView 
      headerBackgroundColor={{ light: '#fff', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/laptop.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>Laptop Information Web Page</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Laptop</ThemedText>
        <ThemedText>Laptops are designed to be portable computers. They are smaller and lighter than desktops. The name connotes the user's ability to put the computer in their lap while they use it. Laptops have rechargeable batteries that can be used for a set period away from a power source.</ThemedText>
        <ThemedText type="subtitle">Different types of laptops</ThemedText>
        <ThemedText>1. General purpose or everyday laptops</ThemedText>
        <ThemedText>2. Ultrabooks</ThemedText>
        <ThemedText>3. Gaming laptops</ThemedText>
        <ThemedText>4. Workstation or creator laptops</ThemedText>
        <ThemedText>5. 2-in-1s and convertibles</ThemedText>
        <ThemedText>6. Chromebooks</ThemedText>
        <ThemedText>7. Foldable laptops</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: 'green',
    flex: 1,
    textAlign: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 600,
    bottom: 0,
    left: 400,
    position: 'absolute',
  },
});
