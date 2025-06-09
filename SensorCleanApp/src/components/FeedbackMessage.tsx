import React from "react";
import { Text, View } from "react-native";

type FeedbackMessageProps = {
  message: string;
  type: "error" | "success";
};

export default function FeedbackMessage({ message, type }: FeedbackMessageProps) {
  const color = type === "error" ? "text-red-600" : "text-green-600";
  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={[{ fontSize: 16, fontWeight: "600" }, color === "text-red-600" ? { color: "#dc2626" } : { color: "#16a34a" }]}>{message}</Text>
    </View>
  );
}
