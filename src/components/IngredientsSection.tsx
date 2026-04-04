import { Snowflake, Leaf, FlaskConical, Droplets, ShieldCheck } from "lucide-react";

const ingredients = [
  {
    icon: Snowflake,
    name: "Menthol",
    desc: "Instant cooling that calms inflamed tissue and eases muscle tension on contact. Feel the difference in seconds.",
    highlight: "Fast-acting cooling",
    stat: "< 30s",
    statLabel: "to feel relief",
  },
  {
    icon: Leaf,
    name: "Arnica Montana",
    desc: "Trusted by Canadian athletes and physiotherapists to reduce bruising and swelling — naturally, without harsh chemicals.",
    highlight: "Natural anti-inflammatory",
    stat: "100%",
    statLabel: "plant-derived",
  },
  {
    icon: FlaskConical,
    name: "MSM",
    desc: "Supports joint flexibility and reduces oxidative stress in connective tissue — essential for active Canadians through every season.",
    highlight: "Joint & tissue support",
    stat: "3rd",
    statLabel: "most researched joint compound",
  },
  {
    icon: Droplets,
    name: "Emu Oil",
    desc: "Deep-penetrating carrier that delivers active ingredients beneath the skin's surface — right where pain lives.",
    highlight: "Deep absorption carrier",
    stat: "5x",
    statLabel: "deeper penetration",
  },
];

const IngredientsSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.03] blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-accent">
              Health Canada Registered (NPN)
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(28px,3.5vw,46px)] leading-[1.1] text-foreground mb-5">
            4 clinically studied ingredients.{" "}
            <br className="hidden sm:block" />
            <span className="italic bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Zero compromises.
            </span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Every jar is backed by science, trusted by 15,000+ Canadians, and registered with Health Canada. Not your average pain cream.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ingredients.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.15)]"
            >
              {/* Stat badge */}
              <div className="absolute top-5 right-5">
                <div className="text-right">
                  <span className="block text-xl font-bold text-accent leading-none">{item.stat}</span>
                  <span className="text-[9px] text-muted-foreground uppercase tracking-wider">{item.statLabel}</span>
                </div>
              </div>

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-5 group-hover:from-accent/25 group-hover:to-accent/10 transition-colors">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-accent/60 mb-1.5">
                {item.highlight}
              </span>
              <h3 className="text-foreground font-semibold text-lg mb-2.5">{item.name}</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Want to see the full ingredient list?{" "}
            <a href="#" className="text-accent font-medium underline underline-offset-2 hover:text-primary transition-colors">
              View Certificate of Analysis →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
