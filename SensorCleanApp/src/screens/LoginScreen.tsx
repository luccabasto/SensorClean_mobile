import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    // Simulação: login com qualquer email/senha
    if (email && senha) {
      navigation.replace("Home");
    } else {
      Alert.alert("Erro", "Preencha e-mail e senha!");
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold mb-8 text-blue-700">SensorClean</Text>
      <TextInput
        className="w-full border-b border-gray-300 mb-4 py-2"
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        className="w-full border-b border-gray-300 mb-6 py-2"
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity
        className="bg-blue-700 w-full py-3 rounded-xl items-center"
        onPress={handleLogin}
      >
        <Text className="text-white font-bold text-lg">Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
