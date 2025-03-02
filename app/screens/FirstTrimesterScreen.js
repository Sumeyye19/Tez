import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

export default function FirstTrimesterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {}
        <Image
          source={require("../../assets/images/1trimester.png")} 
          style={styles.headerImage}
        />
        {}
        <Text style={styles.title}>Birinci Trimester (0-13 Hafta)</Text>
          {}
          <Text style={styles.sectionTitle}>Gebelikte İlk Trimesterde Beklenenler  İlk 3 Aylık Süreçte Ne Oluyor?</Text>
        <Text style={styles.infoText}>
          Gebelikte ilk trimester bebeğin hızla oluştuğu dönemdir. Hamilelik yaklaşık 40 hafta sürer. Haftalar üç trimester
          halinde gruplandırılmıştır. İlk üç aylık dönem, yumurtanın sperm tarafından döllenmesi (gebe kalma) ile gebeliğin
          12. haftası arasındaki zamandır. Diğer bir ifadeyle bu dönem, son adetinizin ilk gününde başlar.{"\n\n"}
          Bu üç aylık dönemde bebeğiniz diğer zamanlardan daha hızlı büyür. 6 haftaya kadar genellikle kalp atışı duyulabilir
          ve 12. haftanın sonunda bebeğinizin kemikleri, kasları ve vücudun tüm organları oluşur. Bu süreçte bebeğiniz küçük
          bir insana benzemeye başlar ve artık fetüs olarak adlandırılır. Hatta yutma pratiği bile yapar.{"\n\n"}
          Bir kadının vücudu, hamileliğin ilk 12 haftasında birçok değişikliğe uğrar. Hafta hafta hamileliği anlamak, bilinçli
          kararlar vermenize ve önünüzdeki büyük değişikliklere hazırlanmanıza yardımcı olabilir.
        </Text>

        {}
        <Text style={styles.sectionTitle}>İlk Üç Aylık Dönemde Bir Kadının Vücuduna Ne Olur?</Text>
        <Text style={styles.infoText}>
          Gebelikte ilk trimester döneminde kadınların vücudunda çeşitli değişiklikler oluşur. Bu dönemde, vücuttaki hemen
          hemen her organı etkileyen hormonlar salgılanır. Hamile olabileceğin ilk işaret, adet görmemektir. İlk birkaç hafta
          geçtikçe bazı kadınlar şunları yaşar:{"\n\n"}
          • Yorgunluk{"\n"}
          • Mide bulantısı{"\n"}
          • Kusmak{"\n"}
          • Ruh hali değişimleri{"\n"}
          • Göğüslerde hassasiyet{"\n"}
          • Göğüste ağrılı yanma hissi{"\n"}
          • Kilo almak{"\n"}
          • Baş ağrısı{"\n"}
          • Belirli yiyeceklere karşı istek (aşermek){"\n"}
          • Belirli yiyeceklerden tiksinme{"\n"}
          • Kabızlık{"\n\n"}
          Bu süre zarfında daha fazla dinlenmeniz veya daha küçük öğünler yemeniz gerekebilir. Ancak bazı kadınlar bu
          semptomların hiçbirini hissetmez.
        </Text>

        {}
        <Text style={styles.sectionTitle}>Gebelikte İlk Trimesterde Fetüse Ne Olur?</Text>
        <Text style={styles.infoText}>
          Hamileliğinizin ilk günü aynı zamanda son adet döneminizin de ilk günüdür. Yaklaşık 10 ila 14 gün sonra bir yumurta
          salınır, spermle birleşir ve gebelik gerçekleşir. Bebek ilk üç aylık dönemde hızla gelişir. Fetüs beyin ve omurilik
          geliştirmeye başlar ve organlar oluşmaya başlar. Bebeğin kalbi de ilk üç aylık dönemde atmaya başlayacaktır.
        </Text>

        {}
        <Text style={styles.sectionTitle}>Gebelikte İlk Trimesterde Fetüse Ne Olur?</Text>
        <Text style={styles.infoText}>
          Hamileliğinizin ilk günü aynı zamanda son adet döneminizin de ilk günüdür. Yaklaşık 10 ila 14 gün sonra bir yumurta
          salınır, spermle birleşir ve gebelik gerçekleşir. Bebek ilk üç aylık dönemde hızla gelişir. Fetüs beyin ve omurilik
          geliştirmeye başlar ve organlar oluşmaya başlar. Bebeğin kalbi de ilk üç aylık dönemde atmaya başlayacaktır.{"\n\n"}
          İlk haftalarda kollar ve bacaklar tomurcuklanmaya, sekiz haftanın sonunda el ve ayak parmakları oluşmaya başlar.
          Gebeliğin ilk trimester döneminin sonunda bebeğin cinsel organları oluşmuştur. Çeşitli bilimsel verilere göre bebek
          artık yaklaşık 7,62 santimetre uzunluğunda ve neredeyse 30 gram ağırlığındadır.
        </Text>

        {}
        <Text style={styles.sectionTitle}>Bu Dönemde Doktordan Ne Beklenebilir?</Text>
        <Text style={styles.infoText}>
          Hamile olduğunuzu ilk öğrendiğinizde doktorunuzdan randevu alın. Henüz doğum öncesi vitaminleri almadıysanız, hemen
          başlayın. İlk ziyaretiniz sırasında doktorunuz;{"\n"}
          • Hamileliği doğrulamak için ultrason muayenesi{"\n"}
          • Pap testi{"\n"}
          • Tansiyon ölçümü{"\n"}
          • Cinsel yolla bulaşan enfeksiyonlar testi{"\n"}
          • Risk faktörleri için taramalar{"\n\n"}
          Ayrıca bebeğin ense kalınlığı ölçümü (NT taraması) ile genetik bozukluk olasılığı belirlenebilir.
        </Text>

        {}
        <Text style={styles.sectionTitle}>İlk Üç Aylık Dönemde Nasıl Sağlıklı Kalabilirim?</Text>
        <Text style={styles.infoText}>
          Bir kadının hamileyken ne yapması gerektiği önemlidir:{"\n"}
          • Doğum öncesi vitaminleri almak{"\n"}
          • Düzenli egzersiz yapmak{"\n"}
          • Meyve, sebze ve lifli besinler tüketmek{"\n"}
          • Bol su içmek{"\n"}
          • Yeterli kalori almak (günde 300 kalori ekstra)
        </Text>

        {}
        <Text style={styles.sectionTitle}>İlk Trimesterde Kaçınılması Gerekenler</Text>
        <Text style={styles.infoText}>
          • Yorucu egzersiz ve ağır antrenman{"\n"}
          • Alkol, sigara ve fazla kafein{"\n"}
          • Çiğ balık, yüksek cıvalı deniz ürünleri{"\n"}
          • Pastörize edilmemiş süt ürünleri{"\n"}
          • Şarküteri etleri ve sosisli sandviçler{"\n"}
          • Toksoplazma riski olan kedi kumu{"\n"}
          • Uyuşturucu ve zararlı maddeler
        </Text>

        {}
        <Text style={styles.sectionTitle}>Yüksek Riskli Hamilelik</Text>
        <Text style={styles.infoText}>
          Hamileliğinizi yüksek riskli hale getirebilecek faktörler şunlardır:{"\n"}
          • Çok genç veya 35 yaş üzerinde olmak{"\n"}
          • Aşırı kilolu veya zayıf olmak{"\n"}
          • Diyabet, hipertansiyon gibi hastalıklar{"\n"}
          • Çoğul gebelik{"\n\n"}
          Yüksek riskli hamilelikler ekstra takip ve doktor kontrolleri gerektirir.
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
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
