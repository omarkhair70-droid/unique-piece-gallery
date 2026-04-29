export type GalleryItem = {
  title: string;
  subtitle: string;
  material: string;
  kind: string;
  tint: string;
  variant: "canvas" | "calligraphy" | "classic" | "craft" | "relief" | "water" | "mural";
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  { title: "دراسة لونية معاصرة", subtitle: "Contemporary Color Study", material: "قماش / أكريليك", kind: "لوحة معاصرة", tint: "#b08a5d", variant: "canvas", featured: true },
  { title: "دراسة حروفية", subtitle: "Calligraphic Study", material: "حبر / ورق", kind: "خط عربي", tint: "#8f6d46", variant: "calligraphy" },
  { title: "تصور لإطار كلاسيكي", subtitle: "Classic Frame Concept", material: "خشب / تذهيب", kind: "تابلوه كلاسيكي", tint: "#9a6f3f", variant: "classic" },
  { title: "أثر صناعة يدوية", subtitle: "Handcrafted Surface Study", material: "خشب / خامات مختارة", kind: "حرفة يدوية", tint: "#7f5c3a", variant: "craft" },
  { title: "دراسة جدارية بارزة", subtitle: "Bas-Relief Wall Study", material: "جبس / إسمنت", kind: "نحت بارز", tint: "#71543a", variant: "relief" },
  { title: "دراسة ماء وضوء", subtitle: "Water & Light Study", material: "حجر / ماء", kind: "عنصر مائي", tint: "#6d5748", variant: "water" },
  { title: "سطح جداري فني", subtitle: "Artistic Wall Surface", material: "أكريليك / جدار", kind: "جدارية", tint: "#9c7c58", variant: "mural" }
];
