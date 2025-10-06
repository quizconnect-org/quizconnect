import React from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 bg-primary items-center justify-center px-5">
      <Text className="text-4xl font-bold text-white mb-3 text-center">
        Welcome to QuizConnect!
      </Text>
      <Text className="text-xl text-white/90 text-center">
        Interactive Quiz App with Video Reactions
      </Text>
    </View>
  );
}

