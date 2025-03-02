import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

export default function ThirdTrimesterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {}
        <Image
          source={require("../../assets/images/3trimester.png")} 
          style={styles.headerImage}
        />

        {}
        <Text style={styles.title}>Üçüncü Trimester (27. Hafta-Doğum)</Text>

        {}
        <Text style={styles.sectionTitle}>Gebelikte Üçüncü Trimester Döneminde Neler Olur?</Text>
        <Text style={styles.infoText}>
          Üçüncü trimester, gebeliğin 28 ila 40. haftalarını kapsar ve doğumu da içine alan son 3 aydır.{"\n\n"}
          Bebeğin 37. haftanın sonunda dünyaya gelmesi beklenir. Bu dönemde hem fiziksel hem de duygusal olarak zorlayıcı bir
          süreç yaşanabilir. Bebeğinizin doğumu artık an meselesidir.
        </Text>

        <Text style={styles.sectionTitle}>Kadın Vücudunda Neler Olur?</Text>
        <Text style={styles.infoText}>
          Üçüncü trimester döneminde aşağıdaki durumlar sıkça görülebilir:{"\n\n"}
          • Bebeğin iyice hareketlenmesi{"\n"}
          • Braxton-Hicks kasılmaları{"\n"}
          • Göğüs hassasiyeti ve süt sızması{"\n"}
          • Tuvalete daha sık gitme{"\n"}
          • Şişmiş ayak bilekleri ve yüz{"\n"}
          • Uyku problemleri{"\n"}
          • Hemoroid{"\n"}
        </Text>

        <Text style={styles.sectionTitle}>Fetüs Gelişimi</Text>
        <Text style={styles.infoText}>
          Bebek bu dönemde hızla büyümeye devam eder.{"\n\n"}
          • 32. haftada bebeğin kemikleri tamamen şekillenir.{"\n"}
          • 36. haftada baş aşağı pozisyon alır.{"\n"}
          • 37. haftadan itibaren doğum an meselesidir.{"\n"}
          • Bebek yaklaşık 48-53 cm uzunluğa ve 2.72-4 kg ağırlığa ulaşır.{"\n"}
        </Text>

        <Text style={styles.sectionTitle}>Doktordan Beklentiler</Text>
        <Text style={styles.infoText}>
          Doktor kontrolleri daha sık olacaktır. Yapılabilecek testler:{"\n\n"}
          • Grup B streptokok testi{"\n"}
          • Rahim ağzı açıklığının kontrolü{"\n"}
          • Ultrason ve ilerleme değerlendirmeleri{"\n"}
        </Text>

        <Text style={styles.sectionTitle}>Sağlıklı Kalmanın Yolları</Text>
        <Text style={styles.infoText}>
          • Doğum öncesi vitaminleri almaya devam edin.{"\n"}
          • Bol bol dinlenin ve yürüyüş yapın.{"\n"}
          • Sağlıklı beslenin, bol su için.{"\n"}
          • Kegel egzersizleri ile pelvik tabanı güçlendirin.{"\n"}
          • Diş sağlığınıza dikkat edin.{"\n"}
        </Text>

        <Text style={styles.sectionTitle}>Kaçınılması Gerekenler</Text>
        <Text style={styles.infoText}>
          • Yorucu egzersiz ve ağır kaldırma{"\n"}
          • Alkol, sigara ve fazla kafein{"\n"}
          • Çiğ balık ve yüksek cıvalı deniz ürünleri{"\n"}
          • Uzun yolculuklar ve stres{"\n"}
        </Text>

        <Text style={styles.sectionTitle}>Doğuma Hazırlık</Text>
        <Text style={styles.infoText}>
          • Doğum çantası hazırlayın.{"\n"}
          • Hastane rotanızı belirleyin.{"\n"}
          • Doğum planınızı doktorunuzla konuşun.{"\n"}
          • Bebek eşyalarını tamamlayın ve güvenli olduğundan emin olun.{"\n"}
        </Text>

        {}
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
