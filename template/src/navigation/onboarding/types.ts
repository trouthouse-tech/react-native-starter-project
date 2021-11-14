import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/// We use enums to prevent the use of strings across the application - i.e, write once
export const enum ONBOARDING_ROUTES {
  MAIN = 'MAIN',
  LANDING = 'LANDING',
  SIGNUP = 'SIGNUP',
  LOGIN = 'LOGIN',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  PASSWORD_EMAIL_CONFIRMATION = 'PASSWORD_EMAIL_CONFIRMATION',
}

/// Specify which screens are available in the stack and what props they expect
export type OnboardingStackParamList = {
  [ONBOARDING_ROUTES.LANDING]: undefined;
};

/// This is used by components so that they can access navigation functions
export type OnboardingNavigationProp = NativeStackNavigationProp<
  OnboardingStackParamList,
  ONBOARDING_ROUTES.LANDING
>;
