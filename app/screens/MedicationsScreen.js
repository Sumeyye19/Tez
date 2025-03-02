import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

export default function MedicationsScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Video */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: "https://www.youtube.com/embed/Bqi2yb8gUdo" }}
          style={styles.webview}
        />
      </View>

      {/* Başlık */}
      <Text style={styles.title}>İlaç ve Takviyeler</Text>

      {/* Bilgiler */}
      <Text style={styles.infoText}>
        Hamilelik döneminde diyetle almanız gereken vitamin ve mineral miktarları aşağıda belirtildiği gibidir.{"\n\n"}

        1,5 mg Thiamine (B1 Vitamini){"\n"}
        1,5 mg Riboflavin (B2 Vitamini){"\n"}
        18 mg Niasin (B3 Vitamini){"\n"}
        400 mcg Folik Asit (B9 Vitamini){"\n"}
        2,6 mcg Vitamin B12{"\n"}
        80-85 mg C Vitamini{"\n"}
        600 IU D Vitamini{"\n"}
        1000 mg Kalsiyum{"\n"}
        15 mg E Vitamini{"\n"}
        12 mg Çinko{"\n"}
        30 mg Demir{"\n"}
        220 mcg İyot{"\n"}
        60 mcg Selenyum{"\n\n"}

        Belirtilen dozlardan fazla vitamin ve mineral alınması tehlikeli olabilir.{"\n\n"}

        **Özellikle dikkat edilmesi gereken vitamin ve mineraller:**{"\n"}
        A, B6, C, D vitaminleri ve Demir, Çinko, Selenyum gibi mineraller.{"\n\n"}

        **Temel alınması gereken vitamin ve mineraller:**{"\n"}
        • Folik Asit: 400-800 mcg{"\n"}
        • D Vitamini: 600 IU{"\n"}
        • Demir: 30 mg{"\n"}
        • İyot: 220 mcg{"\n\n"}

        **Eksikliklerin oluşturabileceği riskler:**{"\n"}
        • Folik Asit eksikliği: Nöral tüp defekti (sinir sistemi sorunları){"\n"}
        • D Vitamini eksikliği: Erken doğum ve gebelik zehirlenmesi{"\n"}
        • Demir eksikliği: Bebekte gelişim geriliği ve erken doğum riski{"\n"}
        • İyot eksikliği: Tiroid hormon eksikliği ve beyin gelişiminde sorunlar{"\n\n"}

        **Demir takviyesi ne zaman alınmalı?**{"\n"}
        • Demir desteğine gebeliğin 14. haftasında başlanmalıdır.{"\n\n"}

        **B12 Vitamininin önemi:**{"\n"}
        • B12 eksikliğinde bebeğinizde nöral tüp defekti riski 5 kat artabilir.{"\n"}
        • Vegan veya vejetaryen kadınların mutlaka B12 takviyesi alması gerekir.{"\n\n"}

        **D Vitamininin önemi:**{"\n"}
        • Günlük 600 IU D vitamini alınması gerekir. Eksikliği kemik gelişiminde sorunlara ve gebelik zehirlenmesine neden olabilir.{"\n\n\n"}
      </Text>

      <Text style={styles.footer}>
                Daha fazla bilgi ve sağlıklı gebelik süreci için doktorunuza danışmayı unutmayın.{"\n\n\n"}
              </Text>
              
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E5F5",
    padding: 10,
  },
  videoContainer: {
    height: 200,
    marginBottom: 20,
  },
  webview: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginTop: 10,
    textAlign: "justify",
  },
});
