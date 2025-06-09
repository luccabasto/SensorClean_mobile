import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Loader from "../../components/Loader";
import { deleteSensor, getSensor } from "../../services/api";

interface Props {
  sensorId: number;
  onBack: () => void;
  onEdit: (id: number) => void;
}

export default function SensorDetailScreen({ sensorId, onBack, onEdit }: Props) {
  const [sensor, setSensor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function loadSensor() {
    try {
      setLoading(true);
      const res = await getSensor(sensorId);
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
            await deleteSensor(sensorId);
            onBack();
          },
        },
      ]
    );
  }

  useEffect(() => {
    loadSensor();
  }, [sensorId]);

  if (loading) return <Loader />;
  if (!sensor) return <Text>Sensor não encontrado</Text>;

  return (
    <View className="flex-1 bg-gray-50 p-6">
      <Text className="text-2xl font-bold mb-4">{sensor.nome}</Text>
      <Text className="mb-2">Status: {sensor.status}</Text>
      <Text className="mb-2">Localização: {sensor.localizacao}</Text>
      <TouchableOpacity
        className="bg-blue-700 py-3 rounded-xl my-4 items-center"
        onPress={() => onEdit(sensorId)}
      >
        <Text className="text-white font-bold text-lg">Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-red-600 py-3 rounded-xl items-center"
        onPress={handleDelete}
      >
        <Text className="text-white font-bold text-lg">Excluir</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-8 py-3 items-center"
        onPress={onBack}
      >
        <Text className="text-blue-700 font-bold text-lg">Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
