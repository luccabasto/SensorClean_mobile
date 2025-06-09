import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SensorDetailScreen from "./screens/sensores/SensorDetailScreen";
import SensorFormScreen from "./screens/sensores/SensorFormScreen";
import SensorListScreen from "./screens/sensores/SensorListScreen";

type Page = "login" | "home" | "list" | "form" | "detail";

export default function MainPages() {
  const [page, setPage] = useState<Page>("login");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Navegação entre telas
  function goToLogin() { setPage("login"); }
  function goToHome() { setPage("home"); }
  function goToList() { setPage("list"); setSelectedId(null); }
  function goToForm(id?: number) { setPage("form"); setSelectedId(id ?? null); }
  function goToDetail(id: number) { setPage("detail"); setSelectedId(id); }

  // Renderização condicional das telas
  if (page === "login") {
    return <LoginScreen onLogin={goToHome} />;
  }
  if (page === "home") {
    return (
      <HomeScreen
        onVerSensores={goToList}
        onLogout={goToLogin}
      />
    );
  }
  if (page === "list") {
    return (
      <SensorListScreen
        onCreate={() => goToForm()}
        onDetail={goToDetail}
      />
    );
  }
  if (page === "form") {
    return (
      <SensorFormScreen
        sensorId={selectedId}
        onCancel={goToList}
        onSave={goToList}
      />
    );
  }
  if (page === "detail" && selectedId != null) {
    return (
      <SensorDetailScreen
        sensorId={selectedId}
        onBack={goToList}
        onEdit={() => goToForm(selectedId)}
      />
    );
  }
  // Fallback para lista caso dê algum erro inesperado
  return <SensorListScreen onCreate={goToForm} onDetail={goToDetail} />;
}
