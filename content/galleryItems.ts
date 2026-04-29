export type GalleryItem = {
  src: string;
  title: string;
  subtitle: string;
  material: string;
  kind: string;
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1577083552431-6e5fd75fc537?auto=format&fit=crop&w=1800&q=80",
    title: "نسيج قماشي ولوحة معاصرة",
    subtitle: "Canvas Texture",
    material: "قماش / ألياف",
    kind: "تفصيل تجريدي",
    featured: true
  },
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1100&q=80",
    title: "تفصيل خط عربي",
    subtitle: "Arabic Calligraphy Detail",
    material: "حبر / ورق",
    kind: "حروفية"
  },
  {
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1100&q=80",
    title: "إطار ذهبي كلاسيك",
    subtitle: "Framed Art Mockup",
    material: "خشب / طلاء",
    kind: "تركيب"
  },
  {
    src: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1100&q=80",
    title: "تفاصيل صناعة يدوية",
    subtitle: "Handmade Craft Texture",
    material: "خشب / معدن",
    kind: "حرفة"
  },
  {
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1100&q=80",
    title: "سطح جداري بارز",
    subtitle: "Bas-Relief Wall Texture",
    material: "جبس / إسمنت",
    kind: "نحت بارز"
  },
  {
    src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1100&q=80",
    title: "عنصر مائي ضوئي",
    subtitle: "Water / Fountain Detail",
    material: "حجر / ماء",
    kind: "شلالات ونوافير"
  },
  {
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1100&q=80",
    title: "سطح جداري لوني",
    subtitle: "Mural Texture",
    material: "أكريليك / جدار",
    kind: "جدارية"
  }
];
