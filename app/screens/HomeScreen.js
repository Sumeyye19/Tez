import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from "react-native";

export default function HomeScreen({ navigation }) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("../../assets/images/anne.png")}
            style={styles.logo}
          />
          <Text style={styles.headerText}>AnneRehber</Text>
        </View>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Ana Görsel */}
      <Image
        source={require("../../assets/images/surec.png")}
        style={styles.mainImage}
      />

      {/* Trimester Butonları */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FirstTrimesterScreen")}
      >
        <Text style={styles.buttonText}>Birinci Trimester (0-13 hafta)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SecondTrimesterScreen")}
      >
        <Text style={styles.buttonText}>İkinci Trimester (14-26 hafta)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ThirdTrimesterScreen")}
      >
        <Text style={styles.buttonText}>Üçüncü Trimester (27. hafta-doğum)</Text>
      </TouchableOpacity>

      {/* Alt Footer Menü */}
      <View style={styles.footerMenu}>
        {/* Robot */}
        <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}
        >
          <Text style={styles.footerIcon}>🤖</Text>
        </TouchableOpacity>

        {/* Alarm */}
        <TouchableOpacity onPress={() => navigation.navigate("AlarmScreen")}>
  <Text style={styles.footerIcon}>⏰</Text> {/* Alarm ikonu */}
</TouchableOpacity>


        {/* Profil */}
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}
        >
          <Image
            source={require("../../assets/images/profil.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal visible={isMenuVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("PregnancySymptomsScreen");
              }}
            >
              <Text style={styles.menuText}>Hamilelik Belirtisi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("NutritionScreen");
              }}
            >
              <Text style={styles.menuText}>Beslenme</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("ExerciseScreen");
              }}
            >
              <Text style={styles.menuText}>Spor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("BabyDevelopmentScreen");
              }}
            >
              <Text style={styles.menuText}>Bebek Gelişimi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("MedicationsScreen");
              }}
            >
              <Text style={styles.menuText}>İlaç ve Takviyeler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  menuIcon: {
    fontSize: 30,
    color: "#333",
  },
  mainImage: {
    width: "95%",
    height: 250,
    marginTop: 20,
    marginBottom: 30,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#FF6F61",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerMenu: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  footerIcon: {
    fontSize: 30,
    color: "#FF6F61",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  menuContainer: {
    backgroundColor: "#E57373",
    width: "80%",
    height: "100%",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  menuItem: {
    backgroundColor: "#FFF",
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 20,
  },
  closeText: {
    fontSize: 24,
    color: "#FFF",
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FF6F61",
  },
});
