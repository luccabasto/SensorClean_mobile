import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Loader from "../components/Loader";
import { createSensor, updateSensor } from "../services/api";


type RootStackParamList = {
  SensorFormScreen: { sensor?: { id: string; nome: string; status: string; localizacao: string } };
};

type Props = {
  route: {
    params?: {
      sensor?: {
        id: string;
        nome: string;
        status: string;
        localizacao: string;
      };
    };
  };
  navigation: {
    goBack: () => void;
  };
};

export default function SensorFormScreen({ route, navigation }: Props) {
  const editing = !!route.params?.sensor;
  const [nome, setNome] = useState(route.params?.sensor?.nome || "");
  const [status, setStatus] = useState(route.params?.sensor?.status || "");
  const [localizacao, setLocalizacao] = useState(route.params?.sensor?.localizacao || "");
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    if (!nome || !status || !localizacao) {
      Alert.alert("Preencha todos os campos!");
      return;
    }
    setLoading(true);
    try {
      if (editing) {
        if (route.params?.sensor?.id === undefined) {
          throw new Error("Sensor ID is undefined.");
        }
        await updateSensor(Number(route.params.sensor.id), { nome, status });
      } else {
        await createSensor({ nome, status, localizacao });
      }
      navigation.goBack();
    } catch (e) {
      Alert.alert("Erro ao salvar.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loader />;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
        {editing ? "Editar Sensor" : "Novo Sensor"}
      </Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#D1D5DB",
          marginBottom: 24,
          paddingVertical: 8,
        }}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#D1D5DB",
          marginBottom: 24,
          paddingVertical: 8,
        }}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#D1D5DB",
          marginBottom: 32,
          paddingVertical: 8,
        }}
        placeholder="Localização"
        value={localizacao}
        onChangeText={setLocalizacao}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#1D4ED8",
          paddingVertical: 12,
          borderRadius: 16,
          alignItems: "center",
        }}
        onPress={handleSave}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          {editing ? "Salvar Alterações" : "Cadastrar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
