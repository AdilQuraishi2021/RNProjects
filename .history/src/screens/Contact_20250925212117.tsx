// screens/Contact.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";
import Header from "../components/Header";
import { Colors } from "../Style/Theme";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      Alert.alert("Validation", "Please fill all fields.");
      return;
    }
    // basic email regex
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      Alert.alert("Validation", "Please enter a valid email address.");
      return;
    }

    // Mock submit:
    Alert.alert("Thanks", "Your message has been sent. We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Contact Us" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={form.name} onChangeText={(t) => setForm((s) => ({ ...s, name: t }))} />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={form.email}
          onChangeText={(t) => setForm((s) => ({ ...s, email: t }))}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, { height: 120 }]}
          value={form.message}
          onChangeText={(t) => setForm((s) => ({ ...s, message: t }))}
          multiline
        />

        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontWeight: "700", marginBottom: 6, color: Colors.text },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  btn: { backgroundColor: Colors.primary, padding: 12, borderRadius: 8, alignItems: "center", marginTop: 8 },
  btnText: { color: "#fff", fontWeight: "700" },
});
