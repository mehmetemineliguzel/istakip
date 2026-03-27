const DEFAULT = {
  gorevler: [
    {id:1,baslik:"Web sitesi tasarımı revize",oncelik:"yüksek",kisi:"Ali",tarih:"2026-03-28",durum:"doing"},
    {id:2,baslik:"Teklif hazırla",oncelik:"yüksek",kisi:"Berk",tarih:"2026-03-29",durum:"todo"},
    {id:3,baslik:"Fatura gönder",oncelik:"orta",kisi:"Ceren",tarih:"2026-03-30",durum:"todo"},
    {id:4,baslik:"Sosyal medya içerikleri",oncelik:"orta",kisi:"Defne",tarih:"2026-04-01",durum:"doing"},
    {id:5,baslik:"Müşteri görüşmesi notları",oncelik:"orta",kisi:"Berk",tarih:"2026-03-25",durum:"done"}
  ],
  projeler: [
    {id:1,ad:"E-ticaret Sitesi",musteri:"Yıldız A.Ş.",ilerleme:65,bitis:"2026-04-15"},
    {id:2,ad:"Marka Kimliği",musteri:"Kaya Ltd.",ilerleme:30,bitis:"2026-05-01"},
    {id:3,ad:"Mobil Uygulama",musteri:"TeknoGroup",ilerleme:80,bitis:"2026-03-31"}
  ],
  musteriler: [
    {id:1,ad:"Yıldız A.Ş.",siparis:"Web site revizyonu",tutar:"12.500",durum:"aktif"},
    {id:2,ad:"Kaya Ltd.",siparis:"Logo & marka",tutar:"8.000",durum:"aktif"},
    {id:3,ad:"TeknoGroup",siparis:"Mobil uygulama",tutar:"35.000",durum:"aktif"},
    {id:4,ad:"Güneş Market",siparis:"SEO paketi",tutar:"4.500",durum:"bekliyor"},
    {id:5,ad:"Nova Tekstil",siparis:"Katalog tasarımı",tutar:"6.800",durum:"aktif"}
  ]
};

let store = null;

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method === "GET") {
    return res.status(200).json(store || DEFAULT);
  }

  if (req.method === "POST") {
    try {
      store = req.body;
      return res.status(200).json({ ok: true });
    } catch (e) {
      return res.status(400).json({ error: "Invalid JSON" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
