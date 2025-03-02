import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import * as Notifications from "expo-notifications";

export default function AlarmScreen() {
  const [alarms, setAlarms] = useState([]);
  const [alarmText, setAlarmText] = useState("");
  const [alarmDate, setAlarmDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState("");

  const handleOpenModal = (infoText) => {
    setSelectedInfo(infoText);
    setModalVisible(true);
  };

  const handleAddAlarm = async () => {
    if (!alarmDate.trim()) {
      Alert.alert("Hata", "Lütfen tarih ve saat girin!");
      return;
    }

    const newAlarm = {
      id: Date.now().toString(),
      text: selectedInfo,
      date: alarmDate,
    };
    setAlarms((prev) => [...prev, newAlarm]);

   
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hatırlatma",
        body: selectedInfo,
      },
      trigger: { date: new Date(alarmDate) },
    });

    setModalVisible(false);
    setAlarmDate("");
    Alert.alert("Başarılı", "Alarm kuruldu!");
  };

  const vaccinationInfo = [
    { id: "1", text: "Doğum: Hepatit B aşısı" },
    { id: "2", text: "1. Ay: Hepatit B ikinci doz" },
    { id: "3", text: "2. Ay: BCG, KPA, 5'li karma aşı" },
    { id: "4", text: "4. Ay: 5'li karma ve KPA aşısı" },
    { id: "5", text: "6. Ay: Hepatit B, 5'li karma ve KPA aşısı" },
    { id: "6", text: "12. Ay: KPA, KKK ve suçiçeği aşıları" },
    { id: "7", text: "18. Ay: 5'li karma, çocuk felci ve Hepatit A" },
    { id: "8", text: "24. Ay: Hepatit A tekrarı" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bebek Aşı Takvimi</Text>

      {vaccinationInfo.map((item) => (
        <View key={item.id} style={styles.infoContainer}>
          <Text style={styles.infoText}>{item.text}</Text>
          <TouchableOpacity
            style={styles.alarmButton}
            onPress={() => handleOpenModal(item.text)}
          >
            <Text style={styles.alarmButtonText}>Alarm Kur</Text>
          </TouchableOpacity>
        </View>
      ))}

      {}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Alarm Kur</Text>
            <Text style={styles.modalInfo}>{selectedInfo}</Text>

            <TextInput
              style={styles.input}
              placeholder="Tarih ve Saat (YYYY-MM-DDTHH:MM)"
              value={alarmDate}
              onChangeText={setAlarmDate}
            />

            <TouchableOpacity style={styles.button} onPress={handleAddAlarm}>
              <Text style={styles.buttonText}>Alarm Kaydet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>İptal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.subtitle}>Kurulan Alarmlar:</Text>
      <FlatList
        data={alarms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alarmItem}>
            <Text style={styles.alarmText}>{item.text}</Text>
            <Text style={styles.alarmDate}>{item.date}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#FFDDE5",
    borderRadius: 8,
  },
  infoText: { fontSize: 14 },
  alarmButton: {
    backgroundColor: "#FF6F61",
    padding: 8,
    borderRadius: 5,
  },
  alarmButtonText: { color: "#FFF", fontWeight: "bold" },
  subtitle: { fontSize: 18, marginTop: 20, marginBottom: 10 },
  alarmItem: {
    backgroundColor: "#FFE4E9",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  alarmText: { fontWeight: "bold" },
  alarmDate: { color: "#555" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  modalInfo: { fontSize: 14, marginBottom: 10 },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#F9F9F9",
  },
  button: { backgroundColor: "#FF6F61", padding: 10, borderRadius: 8 },
  buttonText: { color: "#FFF", fontWeight: "bold" },
  cancelButton: { marginTop: 10 },
  cancelButtonText: { color: "#FF6F61", fontWeight: "bold" },
});
