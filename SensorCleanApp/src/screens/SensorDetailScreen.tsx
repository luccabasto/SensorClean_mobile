import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Loader from "../components/Loader";
import { deleteSensor, getSensor } from "../services/api";

export default function SensorDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [sensor, setSensor] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadSensor() {
    try {
      setLoading(true);
      const res = await getSensor(id);
      setSensor(res.data);
    } catch {
      setSensor(null);
    } finally {
      setLoading(false);
    }
  }

  function handleDelete() {
    Alert.alert(
      "Excluir",
      "Tem certeza que deseja excluir este sensor?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            await deleteSensor(id);
            navigation.goBack();
          },
        },
      ]
    );
  }

  useEffect(() => {
    loadSensor();
  }, [id]);

  if (loading) return <Loader />;
  if (!sensor) return <Text>Sensor não encontrado</Text>;

  return (
    <View className="flex-1 bg-gray-50 p-6">
      <Text className="text-2xl font-bold mb-4">{sensor.nome}</Text>
      <Text className="mb-2">Status: {sensor.status}</Text>
      <Text className="mb-2">Localização: {sensor.localizacao}</Text>
      <TouchableOpacity
        className="bg-blue-700 py-3 rounded-xl my-4 items-center"
        onPress={() => navigation.navigate("SensorForm", { sensor })}
      >
        <Text className="text-white font-bold text-lg">Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-red-600 py-3 rounded-xl items-center"
        onPress={handleDelete}
      >
        <Text className="text-white font-bold text-lg">Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}
