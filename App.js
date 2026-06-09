import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import ExamSelectionScreen from './src/screens/ExamSelectionScreen';
import TrackSelectionScreen from './src/screens/TrackSelectionScreen';
import HomeScreen from './src/screens/HomeScreen';
import LearnScreen from './src/screens/LearnScreen';
import RevisionScreen from './src/screens/RevisionScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BatchesScreen from './src/screens/BatchesScreen';
import BatchDetailsScreen from './src/screens/BatchDetailsScreen';
import GeneticsChapterScreen from './src/screens/GeneticsChapterScreen';
import DiagnosticQuizScreen from './src/screens/DiagnosticQuizScreen';
import QuizResultScreen from './src/screens/QuizResultScreen';
import AIAnalysisScreen from './src/screens/AIAnalysisScreen';
import PersonalizedRevisionPlanScreen from './src/screens/PersonalizedRevisionPlanScreen';
import RevisionVideoPlaylistScreen from './src/screens/RevisionVideoPlaylistScreen';
import RetestScreen from './src/screens/RetestScreen';
import ProgressImprovementScreen from './src/screens/ProgressImprovementScreen';
import IgnitePointsScreen from './src/screens/IgnitePointsScreen';

import { useThemeStore } from './src/store/themeStore';
import { useAuthStore } from './src/store/authStore';
import TabNavigation from './src/navigation/TabNavigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const isAppInitialized = useAuthStore((state) => state.isAppInitialized);
  const isOnboardingComplete = useAuthStore((state) => state.isOnboardingComplete);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: true,
          }}
        >
          {!isAppInitialized ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : !isOnboardingComplete ? (
            <>
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="ExamSelection" component={ExamSelectionScreen} />
              <Stack.Screen name="TrackSelection" component={TrackSelectionScreen} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="MainApp"
                component={TabNavigation}
                options={{ animationEnabled: false }}
              />
              <Stack.Screen name="Batches" component={BatchesScreen} />
              <Stack.Screen name="BatchDetails" component={BatchDetailsScreen} />
              <Stack.Screen name="GeneticsChapter" component={GeneticsChapterScreen} />
              <Stack.Screen name="DiagnosticQuiz" component={DiagnosticQuizScreen} />
              <Stack.Screen name="QuizResult" component={QuizResultScreen} />
              <Stack.Screen name="AIAnalysis" component={AIAnalysisScreen} />
              <Stack.Screen name="PersonalizedRevisionPlan" component={PersonalizedRevisionPlanScreen} />
              <Stack.Screen name="RevisionVideoPlaylist" component={RevisionVideoPlaylistScreen} />
              <Stack.Screen name="Retest" component={RetestScreen} />
              <Stack.Screen name="ProgressImprovement" component={ProgressImprovementScreen} />
              <Stack.Screen name="IgnitePoints" component={IgnitePointsScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
