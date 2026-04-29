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
    <main className="grain warm-glow min-h-screen bg-[var(--bg-main)] text-[var(--cream)]">
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1577083552431-6e5fd75fc537?auto=format&fit=crop&w=1800&q=80" alt="خلفية فنية" fill className="object-cover opacity-35" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#1a1410]/70 to-[#1a1410]" />
        <div className="section-wrap flex min-h-[92vh] flex-col justify-center">
          <p className="mb-4 inline-block w-fit rounded-full border border-amber-700/50 bg-black/30 px-4 py-2 text-sm text-[var(--beige)]">خبرة فنية ممتدة من جيل لجيل</p>
          <h1 className="text-5xl leading-tight font-semibold sm:text-7xl">القطعة الفريدة<br />معرض الفنون</h1>
          <p className="mt-5 max-w-2xl text-xl text-[var(--beige)]">أعمال فنية مصنوعة بروح المكان وتاريخ الحرفة.</p>
          <p className="mt-4 max-w-2xl text-base text-[var(--beige)]/90">لوحات فنية، خط عربي، جداريات، أشغال يدوية، شلالات ونوافير، وتفاصيل تنبض بذوق أصيل.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#gallery" className="rounded-md bg-[var(--gold)] px-6 py-3 text-[#1a1410] transition hover:brightness-105">شاهد الأعمال</a>
            <a href="#order" className="rounded-md border border-[var(--gold)] px-6 py-3 text-[var(--cream)] transition hover:bg-[var(--gold)]/10">اطلب عمل مخصوص</a>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <h2 className="text-3xl sm:text-4xl">حكاية معرض بدأ من الفن، واستمر بالحرفة.</h2><div className="gold-divider" />
        <p className="max-w-4xl leading-8 text-[var(--beige)]">القطعة الفريدة ليس مجرد مكان لبيع اللوحات. هو معرض فني قديم نشأ على يد الأب، وتوارثت فيه الحرفة بروحها الأصلية: الرسم، الخط، الأشغال اليدوية، النحت، وتشكيل المساحات الفنية. كل عمل داخل المعرض يحمل لمسة يد، وقرارًا فنيًا، وتفصيلة لا تتكرر. لذلك لا نصنع شيئًا عاديًا. نصنع قطعة لها حضور.</p>
      </section>

      <section className="section-wrap">
        <h2 className="text-3xl sm:text-4xl">خدماتنا الفنية</h2><div className="gold-divider" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.services.map((service) => <div key={service} className="rounded-lg border border-amber-900/60 bg-[var(--bg-surface)]/80 px-4 py-4 text-lg text-[var(--beige)] transition hover:-translate-y-0.5 hover:border-[var(--gold)]">{service}</div>)}
        </div>
      </section>

      <section id="gallery" className="section-wrap">
        <h2 className="text-3xl sm:text-4xl">مختارات من أعمالنا</h2><div className="gold-divider" />
        <div className="grid gap-4 lg:grid-cols-3">
          {featured && <div className="tile-shadow relative overflow-hidden rounded-xl lg:col-span-2 lg:row-span-2"><Image src={featured.src} alt={featured.title} width={1200} height={800} className="h-full w-full object-cover transition duration-700 hover:scale-105" /><span className="absolute bottom-3 right-3 rounded bg-black/60 px-3 py-1 text-sm">{featured.title}</span></div>}
          {rest.map((item) => <div key={item.title} className="tile-shadow relative overflow-hidden rounded-xl"><Image src={item.src} alt={item.title} width={700} height={500} className="h-56 w-full object-cover transition duration-700 hover:scale-105" /><span className="absolute bottom-3 right-3 rounded bg-black/60 px-3 py-1 text-sm">{item.title}</span></div>)}
        </div>
      </section>

      <section id="order" className="section-wrap">
        <h2 className="text-3xl sm:text-4xl">اطلب قطعة فنية مخصوصة</h2><div className="gold-divider" />
        <p className="mb-6 text-[var(--beige)]">لديك مساحة تحتاج إلى عمل فني خاص؟ أرسل لنا الفكرة، المقاس، والخامة المفضلة، وسنقترح عليك تنفيذًا يناسب المكان والميزانية.</p>
        <form onSubmit={submitWhatsApp} className="grid gap-4 rounded-2xl border border-amber-900/50 bg-[var(--bg-surface)]/75 p-5">
          {([
            ["name", "الاسم"], ["phone", "رقم الهاتف"], ["workType", "نوع العمل"], ["size", "المقاس"], ["material", "الخامة"], ["budget", "الميزانية التقريبية (اختياري)"]
          ] as Array<[keyof FormState, string]>).map(([key, label]) => (
            <input key={key} placeholder={label} value={form[key]} onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))} className="rounded-md border border-amber-900/70 bg-black/20 px-4 py-3 text-[var(--cream)] placeholder:text-[var(--beige)]/80 outline-none focus:border-[var(--gold)]" required={key !== "budget"} />
          ))}
          <textarea placeholder="الوصف" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className="min-h-32 rounded-md border border-amber-900/70 bg-black/20 px-4 py-3 placeholder:text-[var(--beige)]/80 outline-none focus:border-[var(--gold)]" required />
          <button className="rounded-md bg-[var(--gold)] px-6 py-3 font-medium text-[#1a1410] transition hover:brightness-105">إرسال الطلب عبر واتساب</button>
        </form>
      </section>

      <section className="section-wrap grid gap-12 lg:grid-cols-2">
        <div><h3 className="text-3xl">تعليم الخط العربي</h3><div className="gold-divider" /><p className="text-[var(--beige)]">نقدم تعليمًا للخط العربي بأسلوب عملي، مناسب للمبتدئين والمهتمين بتطوير مهارتهم في الكتابة الفنية. من أساسيات الحروف إلى تكوين اللوحات، تتعلم الخط كحرفة وفن له روح.</p><a href={`https://wa.me/${siteContent.whatsappPhone}?text=${encodeURIComponent("السلام عليكم، أريد الاستفسار عن مواعيد تعليم الخط العربي.")}`} className="mt-4 inline-block text-[var(--gold)]">اسأل عن مواعيد التعليم</a></div>
        <div><h3 className="text-3xl">أعمال فنية للمدارس والجامعات</h3><div className="gold-divider" /><p className="text-[var(--beige)]">ننفذ أعمالًا فنية وتعليمية للمؤسسات، تشمل اللوحات، الجداريات، المجسمات، الأعمال اليدوية، والتصميمات الفنية الخاصة بالأنشطة والمعارض.</p><ul className="mt-4 space-y-2 text-[var(--beige)]"><li>• المدارس</li><li>• الجامعات</li><li>• المعارض الطلابية</li><li>• الأنشطة الفنية</li><li>• الديكور الداخلي للمؤسسات</li></ul></div>
      </section>

      <section className="section-wrap">
        <h2 className="text-3xl sm:text-4xl">ثقة صنعتها السنين</h2><div className="gold-divider" />
        <div className="grid gap-4 sm:grid-cols-3">{siteContent.testimonials.map((t) => <blockquote key={t} className="rounded-xl border border-amber-900/60 bg-[var(--bg-surface)]/70 p-5 text-[var(--beige)]">“{t}”</blockquote>)}</div>
      </section>

      <section className="section-wrap">
        <h2 className="text-3xl sm:text-4xl">زورونا في المعرض</h2><div className="gold-divider" />
        <p>العنوان: {siteContent.address}</p><p>الهاتف: {siteContent.phones[0]}</p><p>رقم إضافي: {siteContent.phones[1]}</p>
        <div className="mt-5 flex flex-wrap gap-3"><a href="tel:01098866456" className="rounded-md bg-[var(--gold)] px-5 py-3 text-[#1a1410]">اتصل الآن</a><a href={`https://wa.me/${siteContent.whatsappPhone}`} className="rounded-md border border-[var(--gold)] px-5 py-3">راسلنا واتساب</a><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteContent.address)}`} className="rounded-md border border-[var(--gold)] px-5 py-3">افتح الخريطة</a></div>
      </section>

      <footer className="border-t border-amber-900/40 py-10 text-center text-[var(--beige)]"><p className="text-lg">القطعة الفريدة - معرض الفنون</p><p>The Unique Piece Art Gallery</p><p className="mt-2 text-sm">Handcrafted art, calligraphy, murals, and custom pieces.</p></footer>
    </main>
  );
}
