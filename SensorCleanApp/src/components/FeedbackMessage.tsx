import React from "react";
import { Text, View } from "react-native";

export default function FeedbackMessage({ message, type }) {
  const color = type === "error" ? "text-red-600" : "text-green-600";
  return (
    <View className="my-2">
      <Text className={`text-base font-semibold ${color}`}>{message}</Text>
    </View>
  );
}
