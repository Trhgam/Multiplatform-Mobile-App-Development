export interface Perfume {
  id: string;
  perfumeName: string;
  price: number;
  perfumeDescription: string;
  gender: boolean;
  image: string;
  company: string;
}

export const PERFUMES_DATA: Perfume[] = [
  // ================= BVLGARI (2 sản phẩm) =================
  {
    id: "1",
    perfumeName: "Ladies Omnia Crystalline EDT Spray Fragrances",
    price: 105,
    perfumeDescription:
      "Fresh and sparkling fragrance with notes of bamboo and lotus flower.",
    gender: false,
    image:
      "https://ldgroup.vn/wp-content/uploads/2025/10/Artboard-1-9-scaled.png",
    company: "Bvlgari",
  },
  {
    id: "2",
    perfumeName: "Omnia Crystalline EDT Spray",
    price: 72,
    perfumeDescription: "Delicate and airy floral woody fragrance for women.",
    gender: false,
    image:
      "https://www.bathandbodyworks.vn/dw/image/v2/BLFZ_PRD/on/demandware.static/-/Sites-bbw-master-catalog/default/dwa17d4945/hires/28005129.jpg?sw=2000&sh=2000&sm=fit",
    company: "Bvlgari",
  },

  // ================= GUCCI (2 sản phẩm) =================
  {
    id: "3",
    perfumeName: "Guilty Black by EDT Spray",
    price: 95,
    perfumeDescription:
      "Intense oriental floral fragrance that opens with luscious red fruits.",
    gender: true, //  true để hiện nhãn đỏ "Gender" ở góc như hình mẫu
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhSAhiG3RBH0K5Q44lsgdWwhS4Vn6SZDnPyYa8RMd5q61rJdckUvpKiA&s=10",
    company: "Gucci",
  },
  {
    id: "4",
    perfumeName: "Bloom EDP Spray 3.3",
    price: 80,
    perfumeDescription:
      "Neodymium magnets and 40 millimeter drivers for powerful, detailed sound. Closed ear design provides comfort and outstanding reduction of external noises.",
    gender: false,
    image:
      "https://product.hstatic.net/200000691333/product/les-frivolites-100ml-2_7ff41ca7099b48e0998f160804a1adec_master.png",
    company: "Gucci",
  },

  // ================= MONTBLANC (2 sản phẩm) =================
  {
    id: "5",
    perfumeName: "Legend Spirit EDT Spray",
    price: 65,
    perfumeDescription:
      "Fresh, woody and aromatic fragrance for the adventurous man.",
    gender: true,
    image:
      "https://www.bathandbodyworks.vn/dw/image/v2/BLFZ_PRD/on/demandware.static/-/Sites-bbw-master-catalog/default/dw7b904f7f/hires/28021413.jpg?sw=700&sh=1200&sm=fit",
    company: "Montblanc",
  },
];
