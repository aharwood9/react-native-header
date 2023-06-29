import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';
import {
  FlashListUsageScreen,
  FlatListUsageScreen,
  HomeScreen,
  ProfileScreen,
  SectionListUsageScreen,
  SimpleUsageScreen,
  SurfaceComponentUsageScreen,
  TwitterProfileScreen,
  AbsoluteHeaderBlurSurface,
} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false, orientation: 'all' }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ presentation: 'modal', gestureEnabled: false }}
    />
    <Stack.Screen name="SimpleUsageScreen" component={SimpleUsageScreen} />
    <Stack.Screen name="FlatListUsageScreen" component={FlatListUsageScreen} />
    <Stack.Screen name="FlashListUsageScreen" component={FlashListUsageScreen} />
    <Stack.Screen name="SectionListUsageScreen" component={SectionListUsageScreen} />
    <Stack.Screen
      name="HeaderSurfaceComponentUsageScreen"
      component={SurfaceComponentUsageScreen}
    />
    <Stack.Screen name="TwitterProfileScreen" component={TwitterProfileScreen} />
    <Stack.Screen
      name="AbsoluteHeaderBlurSurfaceUsageScreen"
      component={AbsoluteHeaderBlurSurface}
    />
  </Stack.Navigator>
);
