export type GalleryItem = {
  title: string;
  subtitle: string;
  material: string;
  kind: string;
  tint: string;
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  { title: "نسيج قماشي ولوحة معاصرة", subtitle: "Canvas Atmosphere I", material: "قماش / ألياف", kind: "تفصيل تجريدي", tint: "#b08a5d", featured: true },
  { title: "تفصيل خط عربي", subtitle: "Calligraphic Veil", material: "حبر / ورق", kind: "حروفية", tint: "#8f6d46" },
  { title: "إطار ذهبي كلاسيك", subtitle: "Framed Silence", material: "خشب / طلاء", kind: "تركيب", tint: "#9a6f3f" },
  { title: "تفاصيل صناعة يدوية", subtitle: "Atelier Gesture", material: "خشب / معدن", kind: "حرفة", tint: "#7f5c3a" },
  { title: "سطح جداري بارز", subtitle: "Relief Surface Study", material: "جبس / إسمنت", kind: "نحت بارز", tint: "#71543a" },
  { title: "عنصر مائي ضوئي", subtitle: "Luminous Flow", material: "حجر / ماء", kind: "شلالات ونوافير", tint: "#6d5748" },
  { title: "سطح جداري لوني", subtitle: "Museum Wall Tone", material: "أكريليك / جدار", kind: "جدارية", tint: "#9c7c58" }
];
