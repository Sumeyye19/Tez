import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function PregnancySymptomsScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Başlık */}
      <Text style={styles.title}>Hamilelik Belirtileri</Text>

      {/* Görsel */}
      <Image
        source={require("../../assets/images/siralama.jpg")}
        style={styles.image}
      />

      {/* Bilgilendirme */}
      <Text style={styles.infoText}>
        Hamilelik belirtileri kişiden kişiye değişebilir ancak yaygın olan
        belirtiler şunlardır:{"\n\n"}
        • Adet gecikmesi{"\n"}
        • Mide bulantısı ve kusma{"\n"}
        • Göğüslerde hassasiyet{"\n"}
        • Yorgunluk ve halsizlik{"\n"}
        • Sık idrara çıkma{"\n"}
        • Baş dönmesi ve baş ağrısı{"\n"}
        • Ruh hali değişimleri{"\n"}
        • Aşerme ve yiyeceklerden tiksinme{"\n\n"}
      </Text>

      <Text style={styles.subHeader}>Hamilelik (Gebelik) belirtileri ne zaman başlar?</Text>
      <Text style={styles.detailsText}>
        Genellikle gebeliğin ilk dört haftası, adet döneminin beklenmesi nedeniyle fark edilmeyebilir.
        {"\n\n"}
        Hamilelik belirtileri, gebeliğin ilk üç ayının başındaki 1-2 hafta içerisinde başlayabilir.
        {"\n\n"}
        Gebeliğin 4-6’ncı haftaları arasında, memede değişiklikler başlar ve meme boyutlarında artış olabilir. 
        İlerleyen dönemde meme ucunda (areolada) koyulaşma, renk değişikliği gözlenebilir.
      </Text>

      <Text style={styles.subHeader}>Hamilelik (Gebelik) testi ne zaman yapılmalıdır?</Text>
      <Text style={styles.detailsText}>
        Evde yapılabilen gebelik testi, genellikle adet gecikmesinden bir hafta sonra pozitif olur. Ancak bu testlerin,
        idrarda gebelik hormonu (Beta-HCG) bakılarak değerlendirilmesi nedeniyle sonucun pozitifleşmesi için değerin 
        kan tahliline göre daha fazla yükselmesi gerekir.{"\n\n"}
        Kan tahlili ile Beta-HCG bakılması kesin sonuç verir. Kanda gebelik hormonunun pozitifleşmesi en erken, 
        ilişkiden 9-12 gün sonra görülür.
      </Text>

      <Text style={styles.subHeader}>Gebelik hesaplaması nasıl yapılır?</Text>
      <Text style={styles.detailsText}>
        Gebelik haftası ve doğum zamanı, kadının son adet tarihine göre hesaplanır. Gebeliği hesaplamak için anne 
        adayının, son adet tarihini net olarak bilmesi gerekir. Tahmini doğum zamanı bu tarihin üzerine 280 gün 
        eklenerek verilir.{"\n\n"}
        İlk trimester: 1-14. haftaları arası{"\n"}
        İkinci trimester: 14-28. haftaları arası{"\n"}
        Üçüncü trimester: 28-42. haftaları arası{"\n\n"}
        Bebeğin hareketleri, anne karnında ilk kez yaklaşık 18 ila 20’nci gebelik haftaları arası hissedilir.
      </Text>

      <Text style={styles.subHeader}>Gebelik hesaplaması nasıl yapılır?</Text>
      <Text style={styles.detailsText}>
        Gebelik haftası ve doğum zamanı, kadının son adet tarihine göre hesaplanır. Gebeliği hesaplamak için anne 
        adayının, son adet tarihini net olarak bilmesi gerekir. Tahmini doğum zamanı bu tarihin üzerine 280 gün 
        eklenerek verilir.{"\n\n"}
        İlk trimester: 1-14. haftaları arası{"\n"}
        İkinci trimester: 14-28. haftaları arası{"\n"}
        Üçüncü trimester: 28-42. haftaları arası{"\n\n"}
        Bebeğin hareketleri, anne karnında ilk kez yaklaşık 18 ila 20’nci gebelik haftaları arası hissedilir.
      </Text>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDDE5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    textAlign: "left",
    lineHeight: 24,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 16,
    color: "#555",
    textAlign: "justify",
    lineHeight: 24,
    marginBottom: 15,
  },
});
