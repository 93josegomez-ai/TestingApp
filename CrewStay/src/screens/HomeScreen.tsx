import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAppStore } from '../store/useAppStore';

export default function HomeScreen(): JSX.Element {
  const title = useAppStore((state) => state.appTitle);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>CrewStay App running</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#333333',
  },
});
