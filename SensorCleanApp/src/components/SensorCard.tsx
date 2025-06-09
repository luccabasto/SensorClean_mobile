import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function SensorCard({ sensor, onPress }) {
  return (
    <TouchableOpacity
      className="bg-white p-4 rounded-xl shadow mb-3"
      onPress={onPress}
    >
      <Text className="text-lg font-bold">{sensor.nome}</Text>
      <Text className="text-gray-500">{sensor.status}</Text>
    </TouchableOpacity>
  );
}
