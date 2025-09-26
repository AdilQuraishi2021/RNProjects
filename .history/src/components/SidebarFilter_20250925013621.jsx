import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for nice checkboxes

export default function SidebarFilter({ onApply }) {
  // ----- Filter Options -----
  const typeOptions = ["Sliding", "Casement"];
  const materialOptions = ["Aluminium", "Wood", "Vinyl"];
  const sizeOptions = ["Standard", "Custom"];

  // ----- State -----
  const [selected, setSelected] = useState({
    type: [],
    material: [],
    size: [],
  });

  // Toggle logic
  const toggleOption = (category, value) => {
    setSelected((prev) => {
      const current = prev[category];
      return {
        ...prev,
        [category]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const applyFilters = () => {
    if (onApply) onApply(selected);
  };

  return (
    <ScrollView style={styles.sidebar} contentContainerStyle={styles.container}>
      <Text style={styles.sidebarTitle}>Filter by</Text>

      {/* TYPE */}
      <Text style={styles.filterSection}>Type</Text>
      {typeOptions.map((item) => (
        <FilterItem
          key={item}
          label={item}
          checked={selected.type.includes(item)}
          onPress={() => toggleOption("type", item)}
        />
      ))}

      {/* MATERIAL */}
      <Text style={styles.filterSection}>Material</Text>
      {materialOptions.map((item) => (
        <FilterItem
          key={item}
          label={item}
          checked={selected.material.includes(item)}
          onPress={() => toggleOption("material", item)}
        />
      ))}

      {/* SIZE */}
      <Text style={styles.filterSection}>Size</Text>
      {sizeOptions.map((item) => (
        <FilterItem
          key={item}
          label={item}
          checked={selected.size.includes(item)}
          onPress={() => toggleOption("size", item)}
        />
      ))}

      {/* APPLY BUTTON */}
      <TouchableOpacity style={styles.viewBtn} onPress={applyFilters}>
        <Text style={styles.viewBtnText}>View Results</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Individual Checkbox Row
function FilterItem({ label, checked, onPress }) {
  return (
    <TouchableOpacity style={styles.filterItem} onPress={onPress}>
      <Ionicons
        name={checked ? "checkbox" : "square-outline"}
        size={22}
        color={checked ? "#0A657E" : "#888"}
        style={{ marginRight: 10 }}
      />
      <Text style={styles.filterLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 240,
    backgroundColor: "#f9fafb",
    borderRightWidth: 1,
    borderColor: "#e0e0e0",
  },
  container: {
    padding: 16,
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 18,
    color: "#0A657E",
  },
  filterSection: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
    color: "#333",
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderRadius: 6,
    ...(Platform.OS === "web" && {
      cursor: "pointer",
    }),
  },
  filterLabel: {
    fontSize: 15,
    color: "#444",
  },
  viewBtn: {
    marginTop: 24,
    backgroundColor: "#0A657E",
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: "center",
  },
  viewBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
