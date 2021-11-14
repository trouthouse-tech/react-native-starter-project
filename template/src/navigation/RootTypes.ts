import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/// We use enums to prevent the use of strings across the application - i.e, write once
export const enum ROOT_ROUTES {
  ONBOARDING = 'ONBOARDING',
  MAIN = 'MAIN',
}

/// Specify which screens are available in the stack and what props they expect
export type RootStackParamList = {
  [ROOT_ROUTES.ONBOARDING]: undefined;
  [ROOT_ROUTES.MAIN]: undefined;
};

/// This is used by components so that they can access navigation functions
export type RootNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ROOT_ROUTES.ONBOARDING
>;
