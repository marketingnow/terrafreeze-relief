import { Hand, Zap, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: Hand,
    step: "01",
    title: "Apply",
    desc: "Massage a small amount onto the affected area. The non-greasy formula absorbs quickly — no residue on your favourite flannel.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Absorb",
    desc: "Emu Oil carries Menthol, Arnica, and MSM deep beneath the skin to reach inflamed joints and tired muscles.",
  },
  {
    icon: HeartPulse,
    step: "03",
    title: "Relief",
    desc: "Feel the cooling relief in minutes. Whether you're shovelling snow in Winnipeg or hiking in Banff, TERRAFREEZE keeps you moving.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 rounded-full bg-accent" />
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
              Simple as 1-2-3
            </span>
            <span className="w-8 h-0.5 rounded-full bg-accent" />
          </div>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(26px,3vw,42px)] leading-tight text-foreground mb-4">
            How <span className="italic text-accent">TERRAFREEZE</span> works
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            From application to relief in minutes — built for the active Canadian lifestyle.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center mx-auto mb-5 relative z-10">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <span className="text-xs font-semibold text-accent tracking-widest uppercase mb-2 block">
                Step {item.step}
              </span>
              <h3 className="text-foreground font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
