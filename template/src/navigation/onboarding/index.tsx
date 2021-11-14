import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OnboardingStackParamList} from './types';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name={ONBOARDING_ROUTES.LANDING} component={Landing} /> */}
    </Stack.Navigator>
  );
};

export default OnboardingStack;
