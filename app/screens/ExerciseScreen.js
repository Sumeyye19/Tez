import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";


export default function ExerciseScreen() {
  return (
    <View style={styles.container}>
      {/* YouTube Videosu */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: "https://www.youtube.com/embed/Qnoj0CLzfwg" }}
          style={styles.video}
        />
      </View>

      {/* Bilgi Metni */}
      <ScrollView style={styles.textContainer}>
        <Text style={styles.title}>Gebelikte Egzersiz Yapmanın Faydaları</Text>
        <Text style={styles.infoText}>
          Hayatın her aşamasında fiziksel aktivitenin kalp damar sağlığımızı
          koruduğunu, obezite ve buna bağlı gelişen hastalıkların riskini
          azalttığını ve yaşam süremizi uzattığını hepimiz biliyoruz. Aynı
          şekilde gebelik döneminde de yapılan egzersizlerin bir çok faydası
          bulunmaktadır.
          {"\n\n"}
          Hamilelik sırasında yapacağınız düzenli fiziksel aktivite ve
          egzersizler:
          {"\n\n"}• Fiziksel kondisyonunuzu geliştirecek{"\n"}• Kilo
          yönetiminize yardımcı olacak{"\n"}• Gebelik şekeri hastalık riskinizi
          azaltacak{"\n"}• Normal doğum şansınızı arttıracak{"\n"}• Sırt ve bel
          ağrısı gibi şikayetlerinizi azaltacak{"\n"}• Kendinizi daha zinde ve
          dinç hissetmenizi sağlayacaktır.
          {"\n\n"}
          <Text style={styles.subtitle}>
            Hamilelik döneminde hangi egzersizler yapılabilir?
          </Text>
          {"\n\n"}• Yürüyüş{"\n"}• Yüzme{"\n"}• Sabit bisiklet{"\n"}• Düşük
          dereceli aerobik{"\n"}• Gebelik yogası{"\n"}• Gebelik pilatesi{"\n"}•
          Koşu ve raket sporları (Dikkat edilmesi gerekenler için aşağıya bakın)
          {"\n\n"}
          <Text style={styles.subtitle}>Hangi Egzersizlerden Kaçınılmalı?</Text>
          {"\n\n"}• Düşme riski taşıyan sporlar: kayak, sörf, jimnastik{"\n"}•
          Birebir sporlar: futbol, basketbol, buz hokeyi{"\n"}• Dalış{"\n"}•
          Ağır yoga ya da ağır pilates
          {"\n\n"}
          Daha fazla bilgi ve detaylar için doktorunuza danışmayı ihmal
          etmeyin!{"\n\n\n"}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE4E1",
    padding: 10,
  },
  videoContainer: {
    width: "100%",
    height: Dimensions.get("window").width * 0.5625, // 16:9 oranında video
    marginBottom: 20,
  },
  webview: {
    flex: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
    color: "#555",
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    color: "#333",
  },
});