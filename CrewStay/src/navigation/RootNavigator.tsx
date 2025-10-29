import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  MainTabs: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function PlaceholderScreen({ label }: { label: string }): JSX.Element {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderText}>{label}</Text>
    </View>
  );
}

function MainTabs(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen
        name="Profile"
        children={() => <PlaceholderScreen label="Profile screen coming soon" />}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

export default function RootNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  placeholderText: {
    fontSize: 18,
    color: '#666666',
  },
});
