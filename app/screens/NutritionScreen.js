import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

export default function NutritionScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* YouTube Videosu */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: "https://www.youtube.com/embed/dwemC6M9G3c" }}
          style={styles.webview}
          allowsFullscreenVideo={true}
        />
      </View>

      {/* Başlık */}
      <Text style={styles.title}>Hamilelikte Beslenme Nasıl Olmalıdır?</Text>

      {/* İçerik */}
      <Text style={styles.infoText}>
        Sağlıklı beslenme, vücudun ihtiyaç duyduğu besinlerin yeterli ve dengeli bir biçimde tüketilmesidir.
        Vücuda besinler aracılığı ile enerji, karbonhidrat, protein, yağ, vitamin, mineral ve diğer bileşenler alınır.{"\n\n"}
        Hamilelikte beslenme, normal beslenme programına göre daha fazla enerji ve besin öğelerine ihtiyaç duyulabilen bir süreç olabilir.{"\n\n"}
        <Text style={styles.subHeader}>Beslenme Önerileri</Text>
        {"\n\n"}
        • Bol bol meyve ve sebze tüketin.{"\n"}
        • Protein kaynaklarına yönelin (et, tavuk, balık, yumurta).{"\n"}
        • Bol su içmeyi ihmal etmeyin.{"\n"}
        • İşlenmiş gıdalardan uzak durun.{"\n"}
        • Kalsiyum ve demir takviyeleri alın.{"\n\n"}

        <Text style={styles.subHeader}>Hamilelik Evrelerine Göre Beslenme</Text>
        {"\n\n"}
        <Text style={styles.boldText}>Hamileliğin İlk Evresi:</Text> Demir, folik asit, kalsiyum, kolin gibi besin öğeleri önemlidir.{"\n"}
        <Text style={styles.boldText}>Hamileliğin İkinci Evresi:</Text> Yeterli ve dengeli beslenmeyi sürdürmelisiniz.{"\n"}
        <Text style={styles.boldText}>Hamileliğin Üçüncü Evresi:</Text> Artan protein, enerji ve kalsiyum ihtiyacını karşılamaya odaklanın.{"\n\n"}
        
        <Text style={styles.boldText}>Protein:</Text> Bebeğin büyüme ve gelişimi için protein içeriği yüksek kırmızı et, tavuk, balık, yumurta, süt ve süt ürünleri gibi hayvansal kaynaklı protein içeren besinler ile kuru baklagiller, tahıllar, ceviz, fındık, badem gibi kabuklu kuruyemişleri beslenme programına dahil edebilirsiniz{"\n"}
        <Text style={styles.boldText}>Kalsiyum ve D Vitamini:</Text> Kalsiyum ve D Vitamini normal kemiklerin korunmasına katkıda bulunur. Anne adayı yeterli ve dengeli beslenemediğinde bebek, gelişimi için ihtiyaç duyduğu bileşenleri annenin kaynaklarından çeker. Kalsiyum ve D vitamininden zengin süt ürünleri, balık ile yeşil yapraklı sebzeleri beslenme programına eklemesi önemlidir.{"\n"}
        <Text style={styles.boldText}>Folik Asit, Kolin gibi B Vitaminleri:</Text> Takviye folik asit alımı, anne adayının folat düzeyini artırır. Düşük folat düzeyi fetüsün gelişiminde noral tüp kusurları için bir risk faktörüdür. Hamilelik dönemindeki faydalı etki için, gebelikten en az 1 ay öncesi ve 3 ay sonrasına kadar takviye olarak günlük 400 μg folik asit alınmalıdır. Noral tüp kusurlarının çoklu risk faktörleri vardır ve bu risk faktörlerinden birini değiştirmenin yararlı bir etkisi olabilir.{"\n"}
        <Text style={styles.boldText}>Demir:</Text> Demir kırmızı kan hücrelerinin ve hemoglobinin normal oluşumuna katkıda bulunur. Gebelik döneminde kırmızı et, tavuk, kuru baklagiller ve yeşil yapraklı sebzeler gibi demir açısından zengin gıdalar tüketmeye özen göstermelisiniz.{"\n\n"}

        <Text style={styles.subHeader}>Sıvı Tüketimi ve Öğün Sayısı</Text>
        {"\n"}
        Anne adaylarının günde en az 8-10 bardak su tüketmesi önerilir. Ayrıca, günlük 3 ana ve 3 ara öğün şeklinde beslenerek enerji ihtiyacınızı karşılayabilirsiniz.{"\n\n"}
      </Text>

      

    </ScrollView>
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
