import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Icon from "react-native-vector-icons/MaterialIcons"; 

export default function ProfileScreen({ navigation }) {
  const [profileData, setProfileData] = useState({
    fullName: "",
    age: "",
    pregnancyWeek: "",
    bloodType: "",
    fatherName: "",
    fatherAge: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setProfileData({
              fullName: data.pregnancyInfo?.fullName || "",
              age: data.pregnancyInfo?.age || "",
              pregnancyWeek: data.pregnancyInfo?.pregnancyWeek || "",
              bloodType: data.pregnancyInfo?.bloodType || "",
              fatherName: data.fatherInfo?.fullName || "",
              fatherAge: data.fatherInfo?.age || "",
            });
          }
        }
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchProfileData();

   
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout} style={{ marginRight: 10 }}>
          <Icon name="logout" size={24} color="#FF6F61" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Alert.alert("Başarılı", "Çıkış yapıldı.");
      navigation.navigate("LoginScreen");
    } catch (error) {
      Alert.alert("Hata", "Çıkış yapılırken bir hata oluştu.");
    }
  };

  const handleSave = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, {
          "pregnancyInfo.fullName": profileData.fullName,
          "pregnancyInfo.age": profileData.age,
          "pregnancyInfo.pregnancyWeek": profileData.pregnancyWeek,
          "pregnancyInfo.bloodType": profileData.bloodType,
          "fatherInfo.fullName": profileData.fatherName,
          "fatherInfo.age": profileData.fatherAge,
        });
        Alert.alert("Başarılı", "Bilgileriniz güncellendi.");
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Güncelleme hatası:", error);
      Alert.alert("Hata", "Bilgiler güncellenirken bir hata oluştu.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("../../assets/images/profil.png")} style={styles.logo} />

      <Text style={styles.sectionTitle}>Profil Bilgilerim</Text>

      <Text style={styles.label}>Ad Soyad</Text>
      <TextInput
        style={styles.input}
        value={profileData.fullName}
        editable={isEditing}
        onChangeText={(text) => setProfileData({ ...profileData, fullName: text })}
      />

      <Text style={styles.label}>Yaş</Text>
      <TextInput
        style={styles.input}
        value={profileData.age}
        editable={isEditing}
        keyboardType="numeric"
        onChangeText={(text) => setProfileData({ ...profileData, age: text })}
      />

      <Text style={styles.label}>Gebelik Haftası</Text>
      <TextInput
        style={styles.input}
        value={profileData.pregnancyWeek}
        editable={isEditing}
        keyboardType="numeric"
        onChangeText={(text) => setProfileData({ ...profileData, pregnancyWeek: text })}
      />

      <Text style={styles.label}>Kan Grubu</Text>
      <TextInput
        style={styles.input}
        value={profileData.bloodType}
        editable={isEditing}
        onChangeText={(text) => setProfileData({ ...profileData, bloodType: text })}
      />

      <Text style={styles.sectionTitle}>Baba Bilgileri</Text>

      <Text style={styles.label}>Ad Soyad</Text>
      <TextInput
        style={styles.input}
        value={profileData.fatherName}
        editable={isEditing}
        onChangeText={(text) => setProfileData({ ...profileData, fatherName: text })}
      />

      <Text style={styles.label}>Yaş</Text>
      <TextInput
        style={styles.input}
        value={profileData.fatherAge}
        editable={isEditing}
        keyboardType="numeric"
        onChangeText={(text) => setProfileData({ ...profileData, fatherAge: text })}
      />

      {/* Düzenle ve Kaydet Butonları */}
      {isEditing ? (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
          <Text style={styles.buttonText}>Düzenle</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#F9F9F9",
  },
  editButton: {
    backgroundColor: "#FF9E80",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
