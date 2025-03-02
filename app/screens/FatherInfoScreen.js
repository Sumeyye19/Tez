import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from "react-native";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

export default function FatherInfoScreen({ navigation }) {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    chronicDiseases: "",
    bloodType: "",
    smokingOrAlcohol: "",
    knowledgeLevel: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    
    for (const key in formData) {
      if (formData[key].trim() === "") {
        Alert.alert("Eksik Bilgi", "Lütfen tüm alanları doldurun.");
        return;
      }
    }

    try {
      const user = auth.currentUser;
      if (user) {
        await addDoc(collection(db, "FatherInfo"), {
          ...formData,
          userId: user.uid,
        });
        Alert.alert("Başarılı", "Bilgiler Kaydedildi!");
        navigation.navigate("HomeScreen"); 
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Hata", "Bilgiler kaydedilirken bir hata oluştu.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Baba Olmaya Hazır mısınız? Bilgilerinizi Bizimle Paylaşın</Text>
      <TextInput placeholder="Ad ve Soyad" style={styles.input} onChangeText={(value) => handleChange("fullName", value)} />
      <TextInput placeholder="Yaş" style={styles.input} keyboardType="numeric" onChangeText={(value) => handleChange("age", value)} />
      <TextInput placeholder="Kronik Hastalıklar" style={styles.input} onChangeText={(value) => handleChange("chronicDiseases", value)} />
      <TextInput placeholder="Kan Grubu" style={styles.input} onChangeText={(value) => handleChange("bloodType", value)} />
      <TextInput placeholder="Sigara veya Alkol Kullanımı" style={styles.input} onChangeText={(value) => handleChange("smokingOrAlcohol", value)} />
      <TextInput placeholder="Doğum ve Gebelikle İlgili Bilgi Düzeyi" style={styles.input} onChangeText={(value) => handleChange("knowledgeLevel", value)} />
      <Button title="Kaydet ve Ana Sayfaya Git" color="#F08080" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#CBEFFF", padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginVertical: 5 },
});
