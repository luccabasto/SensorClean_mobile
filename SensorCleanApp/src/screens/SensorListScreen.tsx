import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Loader from "../components/Loader";
import SensorCard from "../components/SensorCard";
import { getSensores } from "../services/api";

export default function SensorListScreen({ navigation }) {
  const [sensores, setSensores] = useState([]);
  const [loading, setLoading] = useState(true);

  async function carregarSensores() {
    try {
      setLoading(true);
      const res = await getSensores();
      setSensores(res.data);
    } catch {
      setSensores([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const focus = navigation.addListener("focus", carregarSensores);
    return focus;
  }, [navigation]);

  if (loading) return <Loader />;

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <TouchableOpacity
        className="bg-blue-700 py-3 rounded-xl mb-4 items-center"
        onPress={() => navigation.navigate("SensorForm")}
      >
        <Text className="text-white font-bold text-lg">Novo Sensor</Text>
      </TouchableOpacity>
      <FlatList
        data={sensores}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <SensorCard
            sensor={item}
            onPress={() => navigation.navigate("Detalhes", { id: item.id })}
          />
        )}
        ListEmptyComponent={<Text className="text-gray-400 mt-8">Nenhum sensor cadastrado.</Text>}
      />
    </View>
  );
}
