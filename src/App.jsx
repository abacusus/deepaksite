import React, {  useState } from "react";
import { motion } from "framer-motion";
import "./LogoCarousel.css";



const products = [
  {
    id: 1,
    name: "Industrial Platform Scale",
    blurb: "Rugged, high-capacity platform scales for warehouses and factories.",
    img: "https://images.unsplash.com/photo-1555544919-61c64536c8c5?q=80&w=1600&auto=format&fit=crop",
    tag: "Industrial",
  },
  {
    id: 2,
    name: "Bench Scale",
    blurb: "Compact bench-top weighing for production lines.",
    img: "https://images.unsplash.com/photo-1532634876-26909d0d4b6a?q=80&w=1600&auto=format&fit=crop",
    tag: "Manufacturing",
  },
  {
    id: 3,
    name: "Precision Lab Balance",
    blurb: "Analytical balances with micro-gram precision.",
    img: "https://images.unsplash.com/photo-1582719478250-89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    tag: "Laboratory",
  },
  {
    id: 4,
    name: "Retail POS Scale",
    blurb: "Billing and label printing for modern counters.",
    img: "https://images.unsplash.com/photo-1584467735871-77eb4a4bba79?q=80&w=1600&auto=format&fit=crop",
    tag: "Retail",
  },
  {
    id: 5,
    name: "Weighbridge (Truck Scale)",
    blurb: "Above / pit-mounted solutions for heavy vehicles.",
    img: "https://images.unsplash.com/photo-1612143858510-15b4a9a6e08c?q=80&w=1600&auto=format&fit=crop",
    tag: "Logistics",
  },
  {
    id: 6,
    name: "IoT Indicator & Cloud",
    blurb: "Smart indicators with cloud dashboards and APIs.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af75?q=80&w=1600&auto=format&fit=crop",
    tag: "Digital",
  },
];

const clientLogos = [

  {
    name: "Tata",
    src: "https://www.svgrepo.com/show/330695/infosys.svg",
  },
  {
    name: "Aditya Birla",
    src: "https://www.svgrepo.com/show/303108/google-icon-logo.svg",
  },
  { name: "Nestlé", src: "https://cdn.worldvectorlogo.com/logos/nestle-4.svg" },
  { name: "Bosch", src: "https://www.svgrepo.com/show/330084/bosch.svg" },
  { name: "Reliance", src: "https://www.svgrepo.com/show/303405/honda-4-logo.svg" },
  { name: "Siemens", src: "https://www.svgrepo.com/show/303547/siemens-logo.svg" },
];

const stats = [
  { k: "100+", v: "Years of legacy" },
  { k: "40+", v: "Countries served" },
  { k: "1M+", v: "Installations" },
  { k: "24x7", v: "Service network" },
];

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>
);



const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/dcajb02df/image/upload/v1755178945/logod-removebg-preview_saiuhy.png" alt="Deepak Electronics" className="h-7 w-27"/>
          <span className="font-bold tracking-wide">Deepak Electronics</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#products" className="hover:text-gray-900 text-gray-600">Products</a>
          <a href="#industries" className="hover:text-gray-900 text-gray-600">Industries</a>
          <a href="#about" className="hover:text-gray-900 text-gray-600">About</a>
          <a href="#resources" className="hover:text-gray-900 text-gray-600">Resources</a>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black">Contact</a>
        </nav>
        <button className="md:hidden inline-flex items-center" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 grid gap-3 text-sm">
            <a href="#products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#about">About</a>
            <a href="#resources">Resources</a>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-gray-900 text-white w-max">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <Section id="home" className="pt-10 md:pt-16">
    <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 items-center gap-10">
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Precision Weighing for <span className="text-gray-900">Industry</span>,
          <br className="hidden md:block"/> Retail & Laboratories
        </h1>
        <p className="mt-5 text-gray-600 max-w-prose">
          A legacy brand delivering trusted <strong>Deepak Electronics</strong> weighing solutions since 1918 —
          from micro-gram lab balances to heavy-duty truck scales with IoT indicators and nationwide service.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#products" className="px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black">Explore Products</a>
          <a href="#contact" className="px-5 py-3 rounded-xl border border-gray-300 hover:border-gray-400">Request a Quote</a>
        </div>
        <div className="mt-8 flex items-center gap-8 text-sm text-gray-600">
          {stats.map((s)=> (
            <div key={s.v} className="">
              <div className="font-bold text-xl">{s.k}</div>
              <div>{s.v}</div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}}>
        <div className="relative">
          <img className="w-full h-[420px] object-cover rounded-3xl shadow-xl" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop" alt="Industrial scale"/>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 w-[260px] border border-gray-100">
            <div className="text-sm font-semibold">Connected Indicator</div>
            <div className="text-xs text-gray-600 mt-1">Real‑time dashboards • API • Alerts</div>
          </div>
        </div>
      </motion.div>
    </div>
  </Section>
);


const LogoMarquee = () => {


  return (
     <div className="logo-carousel">
      <div className="logo-track">
        {clientLogos.map((logo, idx) => (
          <div className="logo-card" key={idx}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
        {/* Duplicate for infinite effect */}
        {clientLogos.map((logo, idx) => (
          <div className="logo-card" key={`${idx}-dup`}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>


      
    </div>


   

    
  );
};


const Products = () => {
  const [query, setQuery] = useState("");
  const filtered = products.filter(p => (
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.tag.toLowerCase().includes(query.toLowerCase())
  ));
  return (
    <Section id="products">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Products</h2>
            <p className="text-gray-600 mt-2">From precision balances to heavy-duty weighbridges.</p>
          </div>
          <div className="w-full md:w-80">
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search products or tags..." className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"/>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filtered.map((p) => (
            <div key={p.id} className="group rounded-3xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <img src={p.img} alt={p.name} className="h-48 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"/>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-gray-500">{p.tag}</div>
                <h3 className="text-lg font-semibold mt-1">{p.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{p.blurb}</p>
                <div className="mt-4 flex justify-between items-center">
                  <a href="#contact" className="text-sm font-medium underline underline-offset-4">Get a quote</a>
                  <button className="text-xs px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50">Datasheet</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Industries = () => (
  <Section id="industries" className="bg-gray-50">
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Industries we serve</h2>
          <p className="text-gray-600 mt-3">Pharma & labs, food & FMCG, logistics & warehouses, metals & mining, retail, and more. Solutions include calibration, AMC, and IoT dashboards.</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "Pharmaceutical",
              "Food & Beverage",
              "Automotive",
              "Agriculture",
              "Logistics",
              "Retail",
              "Chemicals",
              "Textiles",
            ].map((i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-900"/> {i}
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-6 inline-block px-5 py-3 rounded-xl bg-gray-900 text-white">Talk to an expert</a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            "https://images.unsplash.com/photo-1582719478250-c89ca4dc85b?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542314831-068cd1bfeeb?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560143591-3a5889299a6?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581090700227-1e37b90418e?q=80&w=1600&auto=format&fit=crop",
          ].map((src, idx) => (
            <img key={idx} src={src} alt="Industry" className={`rounded-2xl h-40 md:h-48 w-full object-cover ${idx%2? 'mt-6':''}`} />
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const Resources = () => (
  <Section id="resources">
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid md:grid-cols-3 gap-6">
        {[{
          t: "Company Brochure",
          d: "Download the latest product lineup and service portfolio.",
          href: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Weighing_scale_manual_sample.pdf"
        },{
          t: "Calibration Services",
          d: "Traceable calibration as per ISO/IEC 17025.",
          href: "https://en.wikipedia.org/wiki/Calibration"
        },{
          t: "Case Studies",
          d: "How enterprises improved throughput with smart weighing.",
          href: "https://en.wikipedia.org/wiki/Weighbridge"
        }].map((r)=> (
          <a key={r.t} href={r.href} target="_blank" rel="noreferrer" className="rounded-3xl border border-gray-200 p-6 group hover:shadow-md bg-white">
            <div className="text-sm uppercase tracking-wide text-gray-500">Resources</div>
            <div className="mt-1 text-xl font-semibold group-hover:underline">{r.t}</div>
            <p className="text-gray-600 mt-2 text-sm">{r.d}</p>
            <div className="mt-4 text-sm">Open →</div>
          </a>
        ))}
      </div>
    </div>
  </Section>
);

const About = () => (
  <Section id="about" className="bg-white">
    <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">Over a century of trust</h2>
        <p className="text-gray-600 mt-3">Founded in 1918, our  brand has evolved from a small retail outlet to a global manufacturer with exports to 40+ countries. We pair robust hardware with modern software to deliver end‑to‑end weighing solutions.</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {stats.map(s => (
            <div key={s.v} className="rounded-2xl border border-gray-200 p-4">
              <div className="text-2xl font-bold">{s.k}</div>
              <div className="text-sm text-gray-600">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img className="w-full h-64 md:h-80 object-cover rounded-3xl shadow" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop" alt="Factory floor"/>
      </div>
    </div>
  </Section>
);

const CTA = () => (
  <Section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-7xl px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Need a tailored weighing solution?</h2>
      <p className="text-gray-300 mt-2">Our engineers can customize platforms, load cells, indicators and software for your throughput and compliance needs.</p>
      <a href="#contact" className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-gray-900">Request Consultation</a>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" className="bg-gray-50">
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Contact us</h2>
          <p className="text-gray-600 mt-2">Tell us about your requirement and we'll get back within one business day.</p>
          <div className="mt-6 rounded-2xl border border-gray-200 p-6 bg-white">
            <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We'll be in touch.");}} className="grid gap-4">
              <input required placeholder="Name" className="border border-gray-300 rounded-xl px-4 py-2"/>
              <input required type="email" placeholder="Email" className="border border-gray-300 rounded-xl px-4 py-2"/>
              <input placeholder="Phone" className="border border-gray-300 rounded-xl px-4 py-2"/>
              <select className="border border-gray-300 rounded-xl px-4 py-2">
                <option>Product Interest</option>
                <option>Platform Scale</option>
                <option>Bench Scale</option>
                <option>Precision Balance</option>
                <option>Weighbridge</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Your message" rows={4} className="border border-gray-300 rounded-xl px-4 py-2"/>
              <button className="px-5 py-3 rounded-xl bg-gray-900 text-white">Submit</button>
            </form>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="font-semibold">Head Office</h3>
          <p className="text-gray-600 text-sm mt-1">Garhi Harsaru, Gurugram, Haryana 122015</p>
          <div className="mt-4 grid gap-2 text-sm">
            <div>Phone: +91 91234 56789</div>
            <div>Email: service@abcd.com</div>
            <div>Mon–Sat, 9:30am – 6:00pm</div>
          </div>
          <iframe
            title="Map"
            className="mt-6 w-full h-64 rounded-xl"
            src="https://www.openstreetmap.org/export/embed.html?bbox=76.92212820053102%2C28.43622315500142%2C76.93661212921144%2C28.442996821072406&amp;layer=mapnik&amp;marker=28.439610042250358%2C76.92937016487122"
          ></iframe>
        </div>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-200">
    <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
      <div>
        <div className="flex items-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Scale_Simple_Icon.svg" alt="Eagle" className="h-6 w-6"/>
          <span className="font-semibold">Deepak  Weighing</span>
        </div>
        <p className="text-gray-600 mt-3">Certified quality • ISO 9001 • ISO/IEC 17025 Calibration</p>
      </div>
      <div>
        <div className="font-semibold">Products</div>
        <ul className="mt-3 space-y-2 text-gray-600">
          <li>Platform Scales</li>
          <li>Bench Scales</li>
          <li>Precision Balances</li>
          <li>Weighbridges</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold">Company</div>
        <ul className="mt-3 space-y-2 text-gray-600">
          <li>About</li>
          <li>Careers</li>
          <li>Dealers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold">Follow</div>
        <div className="flex gap-3 mt-3">
          <a href="https://www.instagram.com/deepak/" target="_blank" rel="noreferrer" className="underline">Instagram</a>
          <a href="https://play.google.com/store/apps/details?id=com.deepak." target="_blank" rel="noreferrer" className="underline">App</a>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} Deepak Weighing (Demo)</div>
  </footer>
);

export default function Site() {
  return (
    <div className="font-[ui-sans-serif] text-gray-900">
      <Nav/>
      <Hero/>
      <LogoMarquee/>
      <Products/>
      <Industries/>
      <About/>
      <Resources/>
      <CTA/>
      <Contact/>
      <Footer/>
    </div>
  );
}
