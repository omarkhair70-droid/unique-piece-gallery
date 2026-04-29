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
      <section className="hero-cinematic">
        <Image src="https://images.unsplash.com/photo-1577083552431-6e5fd75fc537?auto=format&fit=crop&w=1800&q=80" alt="خلفية فنية" fill className="hero-image" priority />
        <div className="hero-overlay" />
        <div className="hero-calligraphy" aria-hidden>الفريدة</div>
        <div className="section-wrap hero-content fade-in">
          <p className="hero-badge">خبرة فنية ممتدة من جيل لجيل</p>
          <p className="hero-en">The Unique Piece Art Gallery</p>
          <h1>القطعة الفريدة<br />معرض الفنون</h1>
          <p className="hero-copy">تجربة معرض فني بروح مصرية أصيلة، حيث تعيش اللوحات والخط والجداريات في أجواء دافئة من الحرفة والتراث.</p>
          <div className="hero-actions">
            <a href="#gallery" className="btn btn-gold">شاهد الأعمال</a>
            <a href="#order" className="btn btn-outline">اطلب عملًا مخصوصًا</a>
          </div>
        </div>
      </section>

      <section className="section-wrap fade-in">
        <h2 className="section-title">حكاية معرض بدأ من الفن، واستمر بالحرفة</h2><div className="gold-divider" />
        <p className="lead">القطعة الفريدة ليس مجرد مكان لبيع اللوحات. هو معرض فني قديم نشأ على يد الأب، وتوارثت فيه الحرفة بروحها الأصلية: الرسم، الخط، الأشغال اليدوية، النحت، وتشكيل المساحات الفنية. كل عمل داخل المعرض يحمل لمسة يد، وقرارًا فنيًا، وتفصيلة لا تتكرر. لذلك لا نصنع شيئًا عاديًا. نصنع قطعة لها حضور.</p>
      </section>

      <section className="section-wrap fade-in">
        <h2 className="section-title">خدماتنا الفنية</h2><div className="gold-divider" />
        <div className="atelier-grid">
          {siteContent.services.map((service, i) => <article key={service} className="atelier-item"><span>{String(i + 1).padStart(2, "0")}</span><h3>{service}</h3></article>)}
        </div>
      </section>

      <section id="gallery" className="section-wrap fade-in">
        <h2 className="section-title">مختارات من المعرض</h2><div className="gold-divider" />
        <div className="masonry">
          {featured && <article className="art-frame featured"><Image src={featured.src} alt={featured.title} width={1200} height={850} className="art-image" /><div className="label"><p>{featured.title}</p><small>قــطــعــة مميزة</small></div></article>}
          {rest.map((item) => <article key={item.title} className="art-frame"><Image src={item.src} alt={item.title} width={900} height={700} className="art-image" /><div className="label"><p>{item.title}</p><small>من مجموعة المعرض</small></div></article>)}
        </div>
      </section>

      <section id="order" className="section-wrap fade-in">
        <h2 className="section-title">Commission a Unique Piece</h2>
        <p className="sub-ar">اطلب عملاً فنياً مخصوصاً</p><div className="gold-divider" />
        <form onSubmit={submitWhatsApp} className="commission-panel">
          {([
            ["name", "الاسم"], ["phone", "رقم الهاتف"], ["workType", "نوع العمل"], ["size", "المقاس"], ["material", "الخامة"], ["budget", "الميزانية التقريبية (اختياري)"]
          ] as Array<[keyof FormState, string]>).map(([key, label]) => (
            <input key={key} placeholder={label} value={form[key]} onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))} required={key !== "budget"} />
          ))}
          <textarea placeholder="الوصف" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} required />
          <button className="btn btn-gold" type="submit">إرسال الطلب عبر واتساب</button>
        </form>
      </section>

      <section className="section-wrap duo fade-in">
        <article className="paper-block"><h3>تعليم الخط العربي</h3><p className="lead">نقدم تعليمًا للخط العربي بأسلوب عملي، مناسب للمبتدئين والمهتمين بتطوير مهارتهم في الكتابة الفنية. من أساسيات الحروف إلى تكوين اللوحات، تتعلم الخط كحرفة وفن له روح.</p><a href={`https://wa.me/${siteContent.whatsappPhone}?text=${encodeURIComponent("السلام عليكم، أريد الاستفسار عن مواعيد تعليم الخط العربي.")}`} className="btn btn-outline">اسأل عن مواعيد التعليم</a></article>
        <article><h3 className="section-title">خدمات فنية للمؤسسات التعليمية</h3><div className="gold-divider" /><p className="lead">ننفذ أعمالًا فنية وتعليمية للمدارس والجامعات ضمن رؤية بصرية تليق بالهوية المؤسسية.</p><div className="chips">{["المدارس", "الجامعات", "المعارض الطلابية", "الأنشطة الفنية", "الديكور الداخلي"].map((chip) => <span key={chip}>{chip}</span>)}</div></article>
      </section>

      <section className="section-wrap fade-in">
        <h2 className="section-title">ثقة صنعتها السنين</h2><div className="gold-divider" />
        <div className="quotes">{siteContent.testimonials.map((t) => <blockquote key={t}>“{t}”</blockquote>)}</div>
      </section>

      <section className="section-wrap contact fade-in">
        <h2 className="section-title">زورونا في المعرض</h2><div className="gold-divider" />
        <div className="contact-grid"><article><h4>العنوان</h4><p>{siteContent.address}</p></article><article><h4>الهاتف</h4><p>{siteContent.phones[0]}</p><p>{siteContent.phones[1]}</p></article></div>
        <div className="hero-actions"><a href="tel:01098866456" className="btn btn-gold">اتصل الآن</a><a href={`https://wa.me/${siteContent.whatsappPhone}`} className="btn btn-outline">راسلنا واتساب</a><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteContent.address)}`} className="btn btn-outline">افتح الخريطة</a></div>
      </section>

      <footer><p className="f-title">القطعة الفريدة - معرض الفنون</p><p>The Unique Piece Art Gallery</p></footer>
    </main>
  );
}
