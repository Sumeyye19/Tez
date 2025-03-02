import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

export default function SecondTrimesterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {}
        <Image
          source={require("../../assets/images/2trimester.png")} 
          style={styles.headerImage}
        />

        {}
        <Text style={styles.title}>İkinci Trimester (14-26 Hafta)</Text>

        {}
        <Text style={styles.sectionTitle}>
          Gebelikte İkinci Trimesterde Beklenenler - İkinci Üç Aylık Dönemde Neler Oluyor?
        </Text>
        <Text style={styles.infoText}>
          Gebelikte ikinci trimester dönemi, ilk 3 ayın bitiminin ardından ikinci üç ayı kapsar. Hamilelik yaklaşık 40 hafta
          sürer. Haftalar üç trimester halinde gruplandırılmıştır. İkinci üç aylık dönem, gebeliğin 13. ila 27. haftalarıdır.
        </Text>

        <Text style={styles.sectionTitle}>Vücudunuzda Neler Olur?</Text>
        <Text style={styles.infoText}>
          İkinci trimester döneminde, mide bulantısı ve yorgunluk azalır. Enerji seviyesi artar ve aşağıdaki değişiklikler
          görülebilir:{"\n\n"}
          • Rahim genişler{"\n"}
          • Daha büyük bir karın{"\n"}
          • Bebeğin hareketlerini hissetmek{"\n"}
          • İştah artışı{"\n"}
          • Ciltte koyulaşma ve çatlaklar{"\n"}
          • Ayak bileği veya ellerde şişlik{"\n"}
        </Text>

        <Text style={styles.sectionTitle}>Fetüse Ne Olur?</Text>
        <Text style={styles.infoText}>
          Bebeğin organları ikinci trimesterde tamamen gelişir. Ayrıca bebek duymaya ve yutmaya başlar.{"\n\n"}
          • Küçük tüyler ortaya çıkar.{"\n"}
          • Bebek hareket eder ve uyku/uyanıklık döngüleri geliştirir.{"\n"}
          • Dönemin sonunda bebek yaklaşık 35 cm ve 0.91 kg olur.{"\n"}
        </Text>

        <Text style={styles.sectionTitle}>Doktordan Neler Beklemeli?</Text>
        <Text style={styles.infoText}>
          Bu dönemde doktorunuz iki ila dört haftada bir kontroller yapacaktır.{"\n"}
          • Kan basıncı ölçümü{"\n"}
          • Kilo kontrolü{"\n"}
          • Ultrason{"\n"}
          • Diyabet taraması{"\n"}
          • Doğum kusuru taramaları{"\n"}
          • Cinsiyet belirleme ultrasonu{"\n"}
        </Text>

        <Text style={styles.sectionTitle}>Sağlıklı Kalmak İçin Öneriler</Text>
        <Text style={styles.infoText}>
          • Doğum öncesi vitaminlerini almaya devam edin.{"\n"}
          • Düzenli egzersiz yapın.{"\n"}
          • Bol su için ve sağlıklı beslenin.{"\n"}
          • Diş hijyeninize dikkat edin.{"\n"}
          • Kegel egzersizleri yaparak pelvik tabanınızı güçlendirin.{"\n"}
        </Text>

        <Text style={styles.sectionTitle}>Kaçınılması Gerekenler</Text>
        <Text style={styles.infoText}>
          • Yorucu egzersizler ve ağır antrenman{"\n"}
          • Alkol, sigara ve fazla kafein{"\n"}
          • Çiğ balık ve yüksek cıvalı deniz ürünleri{"\n"}
          • Pastörize edilmemiş süt ürünleri{"\n"}
          • Şarküteri etleri veya sosisli sandviçler{"\n"}
          • Kedi kumundan uzak durun{"\n"}
        </Text>

        {/* Geri Butonu */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Geri</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  headerImage: {
    width: "60%",
    height: 150,
    resizeMode: "contain",
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 25,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    textAlign: "justify",
    lineHeight: 24,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FF6F61",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
