import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/anne.png')} 
          style={styles.image}
        />
      </View>

      {}
      <Text style={styles.title}>AnneRehber</Text>

      {}
      <Text style={styles.welcomeText}>HOŞGELDİNİZ</Text>

      {}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StartScreen')}
        >
          <Text style={styles.buttonText}>DEVAM ET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDDE5',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingTop: 20,
  },
  imageContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute', 
    bottom: 50, 
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#28A745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
