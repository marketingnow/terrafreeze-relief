import { Snowflake, Leaf, FlaskConical, Droplets } from "lucide-react";

const ingredients = [
  {
    icon: Snowflake,
    name: "Menthol",
    desc: "Delivers an instant cooling sensation that calms inflamed tissue and eases muscle tension on contact.",
    highlight: "Fast-acting cooling",
  },
  {
    icon: Leaf,
    name: "Arnica Montana",
    desc: "A time-tested botanical used by Canadian athletes and physiotherapists to reduce bruising and swelling naturally.",
    highlight: "Natural anti-inflammatory",
  },
  {
    icon: FlaskConical,
    name: "MSM",
    desc: "Methylsulfonylmethane supports joint flexibility and helps reduce oxidative stress in connective tissue — essential for our cold Canadian winters.",
    highlight: "Joint & tissue support",
  },
  {
    icon: Droplets,
    name: "Emu Oil",
    desc: "Prized for its deep-penetrating properties, Emu Oil carries active ingredients beneath the skin where they're needed most.",
    highlight: "Deep absorption carrier",
  },
];

const IngredientsSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 rounded-full bg-accent" />
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
              What's Inside
            </span>
            <span className="w-8 h-0.5 rounded-full bg-accent" />
          </div>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(26px,3vw,42px)] leading-tight text-foreground mb-4">
            Nature-powered ingredients,{" "}
            <span className="italic text-accent">Canadian-trusted.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Every jar of TERRAFREEZE is Health Canada registered (NPN) and made with clinically studied ingredients trusted by over 15,000 Canadians from coast to coast.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="inline-block text-[10px] font-medium tracking-[0.1em] uppercase text-accent/70 mb-2">
                {item.highlight}
              </span>
              <h3 className="text-foreground font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
