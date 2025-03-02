import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";


export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: "1", sender: "bot", text: "Merhaba! Size nasıl yardımcı olabilirim?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);


  const sendMessageToChatGPT = async (message) => {
    const API_KEY = Constants.expoConfig.extra.apiKey; 
    const API_URL = "https://api.openai.com/v1/chat/completions";

    try {
      setLoading(true);
      const response = await axios.post(
        API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.choices[0]?.message?.content.trim();
    } catch (error) {
      console.error("API Hatası:", error.response?.data || error.message);
      Alert.alert(
        "Hata",
        "Üzgünüm, şu anda bir sorun oluştu. Lütfen daha sonra tekrar deneyin."
      );
      return "Üzgünüm, bir sorun oluştu.";
    } finally {
      setLoading(false);
    }
  };

  
  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

   
    const botReply = await sendMessageToChatGPT(input);

    const botMessage = {
      id: Date.now().toString(),
      sender: "bot",
      text: botReply || "Üzgünüm, bir sorun oluştu.",
    };

    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      {}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.sender === "user" ? styles.userBubble : styles.botBubble,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      {/* Mesaj Giriş Alanı */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Bir soru yazın..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity
          style={[styles.button, loading && styles.disabledButton]}
          onPress={handleSendMessage}
          disabled={loading}
        >
          <Text style={styles.buttonText}>{loading ? "Gönderiliyor..." : "Gönder"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F7F7", padding: 10 },
  messageBubble: { padding: 10, marginVertical: 5, borderRadius: 8, maxWidth: "70%" },
  userBubble: { backgroundColor: "#FF6F61", alignSelf: "flex-end" },
  botBubble: { backgroundColor: "#D3D3D3", alignSelf: "flex-start" },
  messageText: { color: "#000" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#CCC",
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    backgroundColor: "#FF6F61",
    borderRadius: 8,
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  disabledButton: {
    backgroundColor: "#CCC",
  },
  buttonText: { color: "#FFF", fontWeight: "bold" },
});
