import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function PregnancyInfoScreen({ navigation }) {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    dueDate: "",
    pregnancyWeek: "",
    previousPregnancies: "",
    multiplePregnancy: "",
    chronicDiseases: "",
    allergies: "",
    medications: "",
    smokingOrAlcohol: "",
    bloodType: "",
  });

  const [errors, setErrors] = useState({}); 
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const checkPregnancyInfo = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists() && userDoc.data().pregnancyInfo) {
            
            navigation.navigate("PregnancyInfoScreen");

          }
        }
      } catch (error) {
        console.error("Veri kontrolü hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    checkPregnancyInfo();
  }, []);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null }); 
    }
  };

  const handleValidation = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        newErrors[key] = "Bu alan zorunludur!";
      }
    });
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = handleValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Alert.alert("Hata", "Lütfen eksik alanları doldurun.");
      return;
    }

    try {
      const user = auth.currentUser;
      await setDoc(doc(db, "users", user.uid), {
        pregnancyInfo: formData, 
      });
      Alert.alert("Başarılı", "Gebelik bilgileri kaydedildi!");
      navigation.navigate("FatherInfoScreen");
    } catch (error) {
      console.error("Kayıt hatası:", error);
      Alert.alert("Hata", "Bilgiler kaydedilirken bir sorun oluştu.");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }

  const formFields = [
    { name: "fullName", placeholder: "Ad Soyad" },
    { name: "age", placeholder: "Yaş", keyboardType: "numeric" },
    { name: "dueDate", placeholder: "Beklenen Doğum Tarihi (YYYY-AA-GG)" },
    { name: "pregnancyWeek", placeholder: "Gebelik Haftası (Örn: 20)", keyboardType: "numeric" },
    { name: "previousPregnancies", placeholder: "Daha Önce Gebelik (Evet/Hayır)" },
    { name: "multiplePregnancy", placeholder: "İkiz veya Çoğul Gebelik (Evet/Hayır)" },
    { name: "chronicDiseases", placeholder: "Kronik Hastalıklar" },
    { name: "allergies", placeholder: "Alerjiler" },
    { name: "medications", placeholder: "Kullanılan İlaçlar" },
    { name: "smokingOrAlcohol", placeholder: "Sigara veya Alkol Kullanımı (Evet/Hayır)" },
    { name: "bloodType", placeholder: "Kan Grubu (Örn: A Rh(+))" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Gebelik Bilgilerinizi Bizimle Paylaşın</Text>
      {formFields.map((field) => (
        <View key={field.name} style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={field.placeholder}
            keyboardType={field.keyboardType || "default"}
            value={formData[field.name]}
            onChangeText={(value) => handleChange(field.name, value)}
          />
          {errors[field.name] && (
            <Text style={styles.errorText}>{errors[field.name]}</Text>
          )}
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Kaydet ve Devam Et</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFE4E9", padding: 20 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { fontSize: 18, fontWeight: "bold" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
  inputContainer: { marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#FFF",
  },
  errorText: { color: "red", fontSize: 12, marginTop: 5 },
  button: {
    backgroundColor: "#FF6F61",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
