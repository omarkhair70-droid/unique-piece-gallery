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
  "لوحات فنية": "لوحات تحمل هوية المكان وتترك أثرًا بصريًا خالدًا.",
  "لوحات مائية": "شفافية اللون مع نبض هادئ يليق بالمساحات الراقية.",
  "أشغال يدوية": "قطعة تُصاغ بالصبر والتفاصيل، لا بالتكرار الجاهز.",
  "جداريات نحت بارز": "جدران تتحول إلى تكوينات نحتية بعمق معماري.",
  "أعمال فنية للجامعات والمدارس": "مشروعات فنية تصنع ذاكرة تعليمية وهوية بصرية للمؤسسة.",
  "تعليم الخط العربي": "رحلة من ميزان الحرف إلى تكوين اللوحة الحروفية.",
  "شلالات ونوافير": "حركة ماء مصممة كعنصر فني يوازن السكينة والطاقة.",
  "تابلوهات مودرن": "لغة حديثة، جريئة، ومتناغمة مع العمارة المعاصرة.",
  "تابلوهات كلاسيك": "روح تراثية بتفاصيل أصيلة ولمسات متزنة."
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
        <div className="opening-overlay" />
        <div className="spotlight" />
        <div className="spotlight spotlight-2" />
        <div className="calligraphy-texture" aria-hidden>الفريدة</div>
        <div className="section-wrap opening-content fade-in">
          <p className="micro-label">01 / PROLOGUE</p>
          <p className="hero-en">The Unique Piece Art Gallery</p>
          <h1>القطعة الفريدة</h1>
          <p className="opening-tagline">ليست مجرد قطعة… إنها أثر يد وحكاية مكان.</p>
          <p className="opening-copy">عالم بصري يُعامل كل سطح كأنه معرض مستقل: ورق، خشب، حبر، قماش، وضوء دافئ يوقّع المشهد.</p>
          <div className="hero-actions">
            <a href="#gallery" className="btn btn-gold">ادخل المعرض الرقمي</a>
            <a href="#order" className="btn btn-outline">ابدأ قطعة تحمل اسمك</a>
          </div>
        </div>
        <div className="floating-frame" aria-hidden>
          <Image src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80" alt="" fill className="floating-img" />
        </div>
      </section>

      <section className="section-wrap story-grid fade-in">
        <div>
          <p className="micro-label">02 / LEGACY</p>
          <h2 className="section-title">إرث حرفة… لا صفحة تعريف</h2>
          <div className="gold-divider" />
          <p className="story-quote">"نحن لا نوثّق المكان بالكاميرا، بل نبنيه بصريًا من أثر اليد."</p>
          <p className="lead">كل قطعة هنا تُعرض كأثر ثقافي صغير: مادة حيّة، تركيب متوازن، وتوقيع يدوي واضح.</p>
          <p className="lead">الهوية ليست صورة متجر؛ الهوية هي لغة فنية متماسكة تتكرر عبر الزمن.</p>
        </div>
        <article className="story-frame textured-panel" />
      </section>

      <section className="section-wrap fade-in">
        <p className="micro-label">03 / CRAFT DOMAINS</p>
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
        <p className="micro-label">04 / DIGITAL EXHIBITION</p>
        <h2 className="section-title">معرض بصري مُنسّق</h2>
        <div className="gold-divider" />
        <div className="exhibit-grid">
          {featured && (
            <article className="art-frame featured">
              <Image src={featured.src} alt={featured.title} width={1200} height={850} className="art-image" />
              <div className="museum-label">
                <p>{featured.title}</p>
                <small>{featured.subtitle}</small>
                <div className="meta"><span>{featured.material}</span><span>{featured.kind}</span></div>
              </div>
            </article>
          )}
          {rest.map((item, index) => (
            <article key={item.title} className={`art-frame tone-${(index % 3) + 1}`}>
              <Image src={item.src} alt={item.title} width={900} height={700} className="art-image" />
              <div className="museum-label">
                <p>{item.title}</p>
                <small>{item.subtitle}</small>
                <div className="meta"><span>{item.material}</span><span>{item.kind}</span></div>
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
          <p className="helper-copy">أخبرنا بفكرتك، ونحوّلها إلى عمل فني مخصص للمساحة والذوق والميزانية.</p>
          {([
            ["name", "الاسم"], ["phone", "رقم الهاتف"], ["workType", "نوع العمل"], ["size", "المقاس"], ["material", "الخامة"], ["budget", "الميزانية التقريبية (اختياري)"]
          ] as Array<[keyof FormState, string]>).map(([key, label]) => (
            <input key={key} placeholder={label} value={form[key]} onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))} required={key !== "budget"} />
          ))}
          <textarea placeholder="وصف الفكرة" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} required />
          <button className="btn btn-gold" type="submit">إرسال الطلب عبر واتساب</button>
        </form>
      </section>

      <section className="section-wrap contact fade-in">
        <p className="micro-label">06 / INVITATION</p>
        <h2 className="section-title">ادخلوا إلى المكان</h2>
        <div className="gold-divider" />
        <p className="lead">ليس المطلوب زيارة واجهة… بل دخول تجربة فنية تُصنع خصيصًا لكم.</p>
        <div className="contact-grid">
          <article><h4>الهاتف</h4><p>{siteContent.phones[0]}</p><p>{siteContent.phones[1]}</p></article>
          <article><h4>واتساب</h4><p>متاح يوميًا للطلبات الخاصة والاستفسارات.</p></article>
          <article><h4>الخريطة</h4><p>{siteContent.address}</p></article>
        </div>
        <div className="hero-actions"><a href="tel:01098866456" className="btn btn-gold">اتصل الآن</a><a href={`https://wa.me/${siteContent.whatsappPhone}`} className="btn btn-outline">راسلنا واتساب</a><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteContent.address)}`} className="btn btn-outline">افتح الخريطة</a></div>
      </section>

      <footer><p className="f-title">The Unique Piece Art Gallery</p><p>Handmade Heritage · Egyptian Artistry</p></footer>
    </main>
  );
}
