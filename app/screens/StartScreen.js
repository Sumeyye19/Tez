import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Ana Başlık */}
      <Text style={styles.mainTitle}>Uygulamadan Ne Bekliyoruz?</Text>

      {/* Bilgilendirici Metin */}
      <ScrollView style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Gebelik sürecinizi takip etmek için rehberlik sunar.</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Trimester dönemleri hakkında detaylı bilgiler içerir.</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Hem anne hem baba adayına özel sağlık önerileri sunar.</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Sağlıklı beslenme ve yapılması gerekenler hakkında rehberlik eder.</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Riskli durumlar ve doktor kontrolleri hakkında bilgilendirir.</Text>
        </View>
      </ScrollView>

      {/* Başla Butonu */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.buttonText}>BAŞLA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFDDE5',
    paddingVertical: 90,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  infoContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Kutuları Şeffaf Yapma
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0.5, // Hafif sınır
    borderColor: '#ddd',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'left',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#28A745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
