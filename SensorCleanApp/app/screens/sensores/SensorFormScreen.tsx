import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Loader from "../../components/Loader";
import { createSensor, getSensor, updateSensor } from "../../services/api";

interface Sensor {
  id?: number;
  nome: string;
  status: string;
  localizacao: string;
}

interface Props {
  sensorId?: number | null;   // null para novo, número para editar
  onCancel: () => void;
  onSave: () => void;
  
}

export default function SensorFormScreen({ sensorId, onCancel, onSave }: Props) {
  const editing = !!sensorId;
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [loading, setLoading] = useState(false);

  // Se for edição, busca os dados do sensor
  useEffect(() => {
    if (editing && sensorId) {
      setLoading(true);
      getSensor(sensorId)
        .then(res => {
          setNome(res.data.nome || "");
          setStatus(res.data.status || "");
          setLocalizacao(res.data.localizacao || "");
        })
        .finally(() => setLoading(false));
    }
  }, [sensorId]);

  async function handleSave() {
    if (!nome || !status || !localizacao) {
      Alert.alert("Preencha todos os campos!");
      return;
    }
    setLoading(true);
    try {
      if (editing && sensorId) {
        await updateSensor(sensorId, { nome, status, localizacao });
      } else {
        await createSensor({ nome, status, localizacao });
      }
      onSave();
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
          marginBottom: 16,
        }}
        onPress={handleSave}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          {editing ? "Salvar Alterações" : "Cadastrar"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          alignItems: "center",
        }}
        onPress={onCancel}
      >
        <Text style={{ color: "#1D4ED8", fontWeight: "bold", fontSize: 16 }}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
