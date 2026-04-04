import { ShieldCheck, Truck, RotateCcw, MapPin } from "lucide-react";

const mediaLogos = [
  { name: "CBC", display: "CBC" },
  { name: "CTV News", display: "CTV" },
  { name: "The Globe and Mail", display: "Globe & Mail" },
  { name: "Toronto Star", display: "Toronto Star" },
  { name: "Global News", display: "Global" },
  { name: "Maclean's", display: "Maclean's" },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Health Canada NPN",
    desc: "Registered & compliant",
  },
  {
    icon: RotateCcw,
    title: "180-Day Guarantee",
    desc: "Full refund, no questions",
  },
  {
    icon: Truck,
    title: "Free Shipping $60+",
    desc: "Coast to coast, 3–5 days",
  },
  {
    icon: MapPin,
    title: "Made in Canada",
    desc: "Proudly Canadian-made",
  },
];

const AsSeenInSection = () => {
  return (
    <section className="w-full">
      {/* Trust bar */}
      <div className="bg-primary py-5 lg:py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {trustPoints.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-primary-foreground text-sm font-semibold block leading-tight">
                    {item.title}
                  </span>
                  <span className="text-primary-foreground/60 text-xs">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* As seen in */}
      <div className="bg-secondary/30 py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-center text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground mb-8">
            As featured in Canadian media
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:gap-x-16">
            {mediaLogos.map((logo) => (
              <span
                key={logo.name}
                className="text-muted-foreground/40 font-semibold text-lg lg:text-xl tracking-tight hover:text-muted-foreground/70 transition-colors cursor-default select-none"
              >
                {logo.display}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenInSection;
