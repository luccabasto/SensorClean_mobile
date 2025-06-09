import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type SensorCardProps = {
  sensor: {
    nome: string;
    status: string;
  };
  onPress: () => void;
};

export default function SensorCard({ sensor, onPress }: SensorCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Text style={styles.title}>{sensor.nome}</Text>
      <Text style={styles.status}>{sensor.status}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 12,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    color: "#6b7280",
  },
});
