import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 

export default function SignupScreen({ navigation }) {
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!fullName.trim()) {
      Alert.alert("Hata", "İsim Soyisim zorunludur.");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      Alert.alert("Hata", "E-posta '@gmail.com' ile bitmelidir.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Hata", "Şifre en az 6 karakter olmalıdır.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      Alert.alert("Başarılı", `Hoşgeldin, ${fullName}! Kayıt tamamlandı.`);
      navigation.navigate("LoginScreen");
    } catch (error) {
      Alert.alert("Hata", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      {/* İsim Soyisim */}
      <Text style={styles.label}>İsim Soyisim</Text>
      <TextInput
        placeholder=""
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />

      {/* E-posta */}
      <Text style={styles.label}>E-posta</Text>
      <TextInput
        placeholder="E-posta (@gmail.com)"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Şifre */}
      <Text style={styles.label}>Şifre</Text>
      <TextInput
        placeholder="Şifre (En az 6 karakter)"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Kayıt Ol Butonu */}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC0CB",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,

  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,

  },
  label: {
    alignSelf: "flex-start",
    width: "60%",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#FF1493",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
