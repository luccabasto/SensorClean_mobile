import React, { useState } from "react";
import SensorDetailScreen from "./SensorDetailScreen";
import SensorFormScreen from "./SensorFormScreen";
import SensorListScreen from "./SensorListScreen";

type Page = "list" | "form" | "detail";

export default function SensorPages() {
  const [page, setPage] = useState<Page>("list");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Funções para navegação simples entre as "páginas"
  function goToList() {
    setPage("list");
    setSelectedId(null);
  }
  function goToForm(id?: number) {
    setPage("form");
    setSelectedId(id ?? null);
  }
  function goToDetail(id: number) {
    setPage("detail");
    setSelectedId(id);
  }

  // Renderização condicional das telas
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
  // fallback para lista
  return <SensorListScreen onCreate={goToForm} onDetail={goToDetail} />;
}
