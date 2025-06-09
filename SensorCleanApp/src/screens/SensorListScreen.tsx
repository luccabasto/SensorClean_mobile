import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Loader from "../components/Loader";
import SensorCard from "../components/SensorCard";
import { getSensores } from "../services/api";

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SensorForm: undefined;
  Detalhes: { id: number };
};
type SensorListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SensorForm'>;
type Props = {
  navigation: SensorListScreenNavigationProp;
  route: RouteProp<RootStackParamList, 'SensorForm'>;
};
type Sensor = {
  id: number;
  nome: string;
  status: string;
};

export default function SensorListScreen({ navigation }: Props) {
  const [sensores, setSensores] = useState<Sensor[]>([]);
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

  if (loading) return <Loader />;

  return (
    <View style={{ flex: 1, backgroundColor: "#F9FAFB", padding: 16 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#1D4ED8",
          paddingVertical: 12,
          borderRadius: 16,
          marginBottom: 16,
          alignItems: "center"
        }}
        onPress={() => navigation.navigate("SensorForm")}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Novo Sensor</Text>
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
        ListEmptyComponent={<Text style={{ color: "#9CA3AF", marginTop: 32 }}>Nenhum sensor cadastrado.</Text>}
      />
    </View>
  );
}
