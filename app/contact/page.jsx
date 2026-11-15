import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact — Diskusi Proyek via WhatsApp',
  description:
    'Hubungi Arif Permana Putrasuryana untuk konsultasi proyek — website, ERP, EMS, CMS, LMS, SIMRS, atau solusi IT lainnya. WhatsApp 0858-1704-8266, email aripstrike@gmail.com — di Depok, Jawa Barat.',
  alternates: { canonical: '/contact' },
};

const INFO = [
  { icon: 'bi-geo-alt', label: 'Lokasi', value: 'Perumahan Sukamaju Permai, Jl. Sukamaju Permai Blok B1 Ujung, Rt.01 Rw.28 No.13, Cilodong, Depok 16415' },
  { icon: 'bi-envelope', label: 'Email', value: 'aripstrike@gmail.com', href: 'mailto:aripstrike@gmail.com' },
  { icon: 'bi-whatsapp', label: 'WhatsApp', value: '0858-1704-8266', href: 'https://wa.me/6285817048266', green: true },
  { icon: 'bi-clock-history', label: 'Jam Respons', value: 'Setiap hari, 08.00 — 22.00 WIB' },
];

export default function ContactPage() {
  return (
    <section className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-title left reveal">
          <span className="eyebrow"><span className="dot"></span> Kontak</span>
          <h2 id="contact-title">Mari <span className="gradient-text">ngobrol</span> soal proyek Anda</h2>
          <p>Isi formulir di bawah — sekali klik, pesannya langsung terbuka di WhatsApp saya (<strong>0858-1704-8266</strong>) untuk negosiasi. Respons cepat, biasanya di hari yang sama.</p>
        </div>

        <div className="map-frame reveal" style={{ marginBottom: '1.25rem' }}>
          <iframe
            title="Lokasi — Depok, Jawa Barat"
            src="https://maps.google.com/maps?q=Depok,%20West%20Java,%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="contact-grid">
          <div className="contact-info-list reveal">
            {INFO.map((item) => (
              <div className="fact-item" key={item.label}>
                <i className={`bi ${item.icon}`} style={{ fontSize: '1.25rem', color: item.green ? '#15803d' : 'var(--brand)' }} aria-hidden="true"></i>
                <span>
                  <small>{item.label}</small>
                  <strong>{item.href ? <a href={item.href} style={{ color: 'inherit' }}>{item.value}</a> : item.value}</strong>
                </span>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
