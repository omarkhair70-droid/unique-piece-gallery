"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { galleryItems } from "@/content/galleryItems";
import { siteContent } from "@/content/siteContent";

type FormState = {
  name: string;
  phone: string;
  workType: string;
  size: string;
  material: string;
  description: string;
  budget: string;
};

const initialForm: FormState = { name: "", phone: "", workType: "", size: "", material: "", description: "", budget: "" };

const serviceDescriptions: Record<string, string> = {
  "لوحات فنية": "تكوينات أصلية تُبنى على اللون والذاكرة والمكان.",
  "لوحات مائية": "طبقات شفافة بنَفَس هادئ ولمسة دقيقة.",
  "أشغال يدوية": "تفاصيل تُنفّذ باليد قطعةً قطعة دون تكرار.",
  "جداريات نحت بارز": "أسطح جدارية ذات عمق بصري وحضور معماري.",
  "أعمال فنية للجامعات والمدارس": "مشاريع فنية تعليمية تصنع هوية المكان.",
  "تعليم الخط العربي": "تمرين حي على الحرف من الأساس إلى اللوحة.",
  "شلالات ونوافير": "عناصر مائية فنية توازن بين الحركة والسكينة.",
  "تابلوهات مودرن": "صياغات حديثة بلغة لونية جريئة ومدروسة.",
  "تابلوهات كلاسيك": "روح تراثية بتفاصيل أصيلة وزخرفة متزنة."
};

export default function Home() {
  const [form, setForm] = useState<FormState>(initialForm);

  const featured = useMemo(() => galleryItems.find((item) => item.featured), []);
  const rest = useMemo(() => galleryItems.filter((item) => !item.featured), []);

  const submitWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.phone || !form.workType || !form.size || !form.material || !form.description) return;
    const text = `طلب قطعة فنية مخصوصة\nالاسم: ${form.name}\nرقم الهاتف: ${form.phone}\nنوع العمل: ${form.workType}\nالمقاس: ${form.size}\nالخامة: ${form.material}\nالوصف: ${form.description}\nالميزانية التقريبية: ${form.budget || "غير محددة"}`;
    window.open(`https://wa.me/${siteContent.whatsappPhone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="gallery-page grain">
      <section className="opening-stage">
        <Image src="https://images.unsplash.com/photo-1577083552431-6e5fd75fc537?auto=format&fit=crop&w=1800&q=80" alt="خلفية معرض فني" fill className="opening-art" priority />
        <div className="opening-overlay" />
        <div className="spotlight" />
        <div className="calligraphy-texture" aria-hidden>الفريدة</div>
        <div className="section-wrap opening-content fade-in">
          <p className="micro-label">01 / ENTRY</p>
          <p className="hero-en">The Unique Piece Art Gallery</p>
          <h1>القطعة الفريدة</h1>
          <p className="opening-tagline">ليست مجرد قطعة… إنها أثر يد وحكاية مكان.</p>
          <p className="opening-copy">ندخل الفن كما يُدخل المتحف: بصمتٍ أولًا، ثم بدهشة لا تنطفئ.</p>
          <div className="hero-actions">
            <a href="#gallery" className="btn btn-gold">ابدأ الجولة</a>
            <a href="#order" className="btn btn-outline">ابدأ قطعة تحمل اسمك</a>
          </div>
        </div>
        <div className="floating-frame" aria-hidden>
          <Image src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80" alt="" fill className="floating-img" />
        </div>
      </section>

      <section className="section-wrap story-grid fade-in">
        <div>
          <p className="micro-label">02 / LEGACY</p>
          <h2 className="section-title">حكاية بدأت من يد الأب… وبقي أثرها في كل قطعة</h2>
          <div className="gold-divider" />
          <p className="story-quote">"هنا لا نكرر الشكل؛ نوقّع الحضور."</p>
          <p className="lead">المعرض امتداد لحرفة قديمة نشأت داخل ورشة عائلية، ثم كبرت لتصبح ذاكرة بصرية للمكان.</p>
          <p className="lead">من الخط إلى الجدارية، كل عمل يمر بيدٍ تعرف الصبر قبل اللون.</p>
          <span className="heritage-badge">تراث حي منذ الجيل الأول</span>
        </div>
        <article className="story-frame">
          <Image src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80" alt="تفاصيل عمل يدوي" fill className="story-image" />
        </article>
      </section>

      <section className="section-wrap fade-in">
        <p className="micro-label">03 / ATELIER INDEX</p>
        <h2 className="section-title">مجالات الحرفة</h2>
        <div className="gold-divider" />
        <div className="atelier-index">
          {siteContent.services.map((service, i) => (
            <article key={service} className="atelier-line">
              <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{service}</h3>
              <p>{serviceDescriptions[service]}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="section-wrap fade-in">
        <p className="micro-label">04 / EXHIBITION</p>
        <h2 className="section-title">قطع مختارة من الذاكرة</h2>
        <div className="gold-divider" />
        <div className="exhibit-grid">
          {featured && (
            <article className="art-frame featured">
              <Image src={featured.src} alt={featured.title} width={1200} height={850} className="art-image" />
              <div className="museum-label">
                <p>{featured.title}</p>
                <small>قطعة مختارة · تنفيذ يدوي</small>
                <div className="meta"><span>الخامة: مختلطة</span><span>النوع: رئيسي</span></div>
              </div>
            </article>
          )}
          {rest.map((item, index) => (
            <article key={item.title} className={`art-frame tone-${(index % 3) + 1}`}>
              <Image src={item.src} alt={item.title} width={900} height={700} className="art-image" />
              <div className="museum-label">
                <p>{item.title}</p>
                <small>تنفيذ يدوي</small>
                <div className="meta"><span>الخامة</span><span>النوع</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="order" className="section-wrap fade-in">
        <p className="micro-label">05 / COMMISSION</p>
        <h2 className="section-title">ابدأ قطعة تحمل اسمك</h2>
        <p className="hero-en">Private Art Commission</p>
        <div className="gold-divider" />
        <form onSubmit={submitWhatsApp} className="commission-panel">
          <p className="helper-copy">اترك تفاصيل الفكرة، وسنعود إليك بصياغة فنية تناسب المساحة والذوق والميزانية.</p>
          {([
            ["name", "الاسم"], ["phone", "رقم الهاتف"], ["workType", "نوع العمل"], ["size", "المقاس"], ["material", "الخامة"], ["budget", "الميزانية التقريبية (اختياري)"]
          ] as Array<[keyof FormState, string]>).map(([key, label]) => (
            <input key={key} placeholder={label} value={form[key]} onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))} required={key !== "budget"} />
          ))}
          <textarea placeholder="وصف الفكرة" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} required />
          <button className="btn btn-gold" type="submit">إرسال الطلب عبر واتساب</button>
        </form>
      </section>

      <section className="section-wrap fade-in calligraphy-atmosphere">
        <p className="micro-label">06 / CALLIGRAPHY</p>
        <h2 className="section-title">الحرف حين يُكتب بيدٍ صبورة، يصبح لوحة.</h2>
        <div className="gold-divider" />
        <p className="lead">جلسات تدريب على الخط العربي بروح الورق والحبر؛ من انضباط الحرف إلى جمال التكوين.</p>
        <a href={`https://wa.me/${siteContent.whatsappPhone}?text=${encodeURIComponent("السلام عليكم، أريد الاستفسار عن مواعيد تعليم الخط العربي.")}`} className="btn btn-outline">اسأل عن مواعيد التعليم</a>
      </section>

      <section className="section-wrap contact fade-in">
        <p className="micro-label">07 / VISIT</p>
        <h2 className="section-title">ادخلوا إلى المكان</h2>
        <div className="gold-divider" />
        <p className="lead">باب المعرض مفتوح لمن يبحث عن قطعة تبقى… لا عن شيءٍ عابر.</p>
        <div className="contact-grid">
          <article><h4>العنوان</h4><p>{siteContent.address}</p></article>
          <article><h4>الهاتف</h4><p>{siteContent.phones[0]}</p><p>{siteContent.phones[1]}</p></article>
          <article><h4>واتساب</h4><p>متاح يوميًا للاستفسارات والطلبات الخاصة</p></article>
        </div>
        <div className="hero-actions"><a href="tel:01098866456" className="btn btn-gold">اتصل الآن</a><a href={`https://wa.me/${siteContent.whatsappPhone}`} className="btn btn-outline">راسلنا واتساب</a><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteContent.address)}`} className="btn btn-outline">افتح الخريطة</a></div>
      </section>

      <footer><p className="f-title">القطعة الفريدة - معرض الفنون</p><p>Handmade Heritage · Egyptian Artistry</p></footer>
    </main>
  );
}
