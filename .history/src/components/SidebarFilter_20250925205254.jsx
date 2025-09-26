import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";

export default function SidebarFilter({ onApply }) {
  const typeOptions = ["Sliding", "Casement"];
  const materialOptions = ["Aluminium", "Wood", "Vinyl"];
  const sizeOptions = ["Standard", "Custom"];

  const [selected, setSelected] = useState({
    type: [],
    material: [],
    size: [],
  });

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
      <View style={styles.columnsContainer}>
        {/* -------- FILTER BY COLUMN -------- */}
        <View></View>
        <View style={styles.column}>
          <Text style={styles.sidebarTitle}>Filter By</Text>

          <FilterCategory
            title="Type"
            options={typeOptions}
            selected={selected.type}
            onToggle={(val) => toggleOption("type", val)}
          />
          <FilterCategory
            title="Material"
            options={materialOptions}
            selected={selected.material}
            onToggle={(val) => toggleOption("material", val)}
          />
          <FilterCategory
            title="Size"
            options={sizeOptions}
            selected={selected.size}
            onToggle={(val) => toggleOption("size", val)}
          />

          <TouchableOpacity style={styles.applyBtn} onPress={applyFilters}>
            <Text style={styles.applyBtnText}>View Results</Text>
          </TouchableOpacity>
        </View>

        {/* -------- BEST RESULT COLUMN -------- */}
        <View style={styles.column}>
          <View style={styles.bestResultCard}>
            <Text style={styles.bestResultTitle}>Best Result</Text>
            <Text style={styles.bestResultPlaceholder}>
              This section will show best results based on filters. Implementation coming soon.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// ---- Filter Category Card ----
function FilterCategory({ title, options, selected, onToggle }) {
  return (
    <View style={styles.filterCard}>
      <Text style={styles.filterCardTitle}>{title}</Text>
      <View style={styles.chipContainer}>
        {options.map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.chip, selected.includes(opt) ? styles.chipSelected : null]}
            onPress={() => onToggle(opt)}
          >
            <Text style={[styles.chipText, selected.includes(opt) ? styles.chipTextSelected : null]}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// ---- Styles ----
const styles = StyleSheet.create({
  sidebar: {
    width: Dimensions.get("window").width > 900 ? 540 : "100%",
    backgroundColor: "#fefefe",
    borderRightWidth: 1,
    borderColor: "#e0e0e0",
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  columnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    marginRight: 8,
  },
  sidebarTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#0A657E",
  },
  filterCard: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
      android: { elevation: 3 },
      web: { boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
    }),
  },
  filterCardTitle: { fontSize: 16, fontWeight: "700", marginBottom: 12, color: "#333" },
  chipContainer: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 8,
    backgroundColor: "#f8f8f8",
  },
  chipSelected: { backgroundColor: "#0A657E", borderColor: "#0A657E" },
  chipText: { fontSize: 14, color: "#444", fontWeight: "500" },
  chipTextSelected: { color: "#fff" },
  applyBtn: {
    width: 200,
    backgroundColor: "#0A657E",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    shadowColor: "#0A657E",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: "center"
  },
  applyBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },

  bestResultCard: {
    padding: 16,
    backgroundColor: "#eef6f9",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#c8e0eb",
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.02, shadowRadius: 6, shadowOffset: { width: 0, height: 2 } },
      android: { elevation: 1 },
      web: { boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
    }),
  },
  bestResultTitle: { fontSize: 18, fontWeight: "700", color: "#0A657E", marginBottom: 8 },
  bestResultPlaceholder: { fontSize: 14, color: "#666", lineHeight: 20 },
});
