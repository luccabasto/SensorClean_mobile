import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  onVerSensores: () => void;
  onLogout: () => void;
}

export default function HomeScreen({ onVerSensores, onLogout }: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold mb-6 text-blue-700">Bem-vindo ao SensorClean!</Text>
      <TouchableOpacity
        className="bg-blue-700 w-full py-3 rounded-xl items-center mb-4"
        onPress={onVerSensores}
      >
        <Text className="text-white font-bold text-lg">Ver Sensores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="w-full py-3 rounded-xl items-center border border-blue-700"
        onPress={onLogout}
      >
        <Text className="text-blue-700 font-bold text-lg">Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
