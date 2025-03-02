import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";


export default function BabyDevelopmentScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}></Text>

    {/* YouTube Videosu */}
    <View style={styles.videoContainer}>
      <WebView
        source={{ uri: "https://www.youtube.com/embed/Jh8Lcehrt3c" }} // Buraya video linkini koyun
        allowsFullscreenVideo
        style={styles.webview}
      />
    </View>
      {/* Bebek Gelişim Bilgileri */}
      <Text style={styles.title}>Bebek Gelişimi</Text>
      <Text style={styles.infoText}>
        <Text style={styles.subtitle}>1.Ay – Embriyo Mükemmel Başlangıç</Text>{"\n"}
        Embriyo fallop tüplerinden rahme ilerler. Bebeğin boyu 1-2 mm olup plasenta oluşmaya başlar.{"\n\n"}

        <Text style={styles.subtitle}>2.Ay – Organlar Hızla Gelişmekte</Text>{"\n"}
        Beyin, kalp, sindirim sistemi ve organların yerleri belirir. Kollar, bacaklar şekil alır.{"\n\n"}

        <Text style={styles.subtitle}>3.Ay – Fetüs Dönemi</Text>{"\n"}
        Organlar gelişir, safra kesesi, pankreas oluşur. Diş tomurcukları ve parmaklar şekillenir.{"\n\n"}

        <Text style={styles.subtitle}>4.Ay – Cinsiyeti Görülebilir</Text>{"\n"}
        Cinsiyet ultrasonla görülebilir. Fetüs parmak emme ve hareketlenme aktivitelerini başlatır.{"\n\n"}

        <Text style={styles.subtitle}>5.Ay – Yoğun Kemik Gelişimi</Text>{"\n"}
        Kemikler güçlenir, saçlar oluşur, sesleri duymaya başlar.{"\n\n"}

        <Text style={styles.subtitle}>6.Ay – Tat Alma Duyusu</Text>{"\n"}
        Tat tomurcukları gelişir, kemik iliği kan üretmeye başlar.{"\n\n"}

        <Text style={styles.subtitle}>7.Ay – Kapalı Gözlerin Açılışı</Text>{"\n"}
        Beyin gelişimini sürdürür, gözler açılır ve düzenli uyuma alışkanlığı kazanır.{"\n\n"}

        <Text style={styles.subtitle}>8.Ay – Dış Dünyaya Son Hazırlık</Text>{"\n"}
        Duyu organları gelişir, hareketlilik azalır, kilo alımı hızlanır.{"\n\n"}

        <Text style={styles.subtitle}>9.Ay – Doğuma Hazır</Text>{"\n"}
        Bebek doğuma hazır hale gelir. Boyu 50 cm, kilosu 3000 gram civarındadır.{"\n\n"}

        <Text style={styles.footer}>
          Daha fazla bilgi ve sağlıklı gebelik süreci için doktorunuza danışmayı unutmayın.{"\n\n\n"}
        </Text>
      </Text>
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