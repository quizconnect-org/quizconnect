import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';
import './sentry.config';
import './lib/i18n';
import analytics from './lib/analytics';

export default function App() {
  useEffect(() => {
    // Initialize analytics once on app start
    analytics.init();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary" testID="app-container">
      <Text className="text-3xl font-bold text-white">Welcome to QuizConnect!</Text>
      <Text className="text-lg text-white/80 mt-2">Interactive Quiz with Video Reactions</Text>
      <StatusBar style="light" />
    </View>
  );
}
