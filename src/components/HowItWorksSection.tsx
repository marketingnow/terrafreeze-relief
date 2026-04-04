import { Hand, Zap, HeartPulse, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Hand,
    step: "01",
    title: "Apply",
    desc: "Massage a small amount onto the sore area. Non-greasy, absorbs in seconds — no residue on your clothes.",
    time: "5 sec",
  },
  {
    icon: Zap,
    step: "02",
    title: "Penetrate",
    desc: "Emu Oil drives Menthol, Arnica & MSM deep past the skin barrier to reach inflamed joints and tired muscles.",
    time: "2 min",
  },
  {
    icon: HeartPulse,
    step: "03",
    title: "Relief",
    desc: "Feel cooling relief that lasts for hours. Whether you're clearing the driveway or chasing the grandkids — keep moving.",
    time: "Hours",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-primary/[0.03] via-background to-accent/[0.04]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
              How It Works
            </span>
            <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(28px,3.5vw,46px)] leading-[1.1] text-foreground">
              From jar to{" "}
              <span className="italic bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                jaw-dropping relief
              </span>
              <br className="hidden sm:block" />
              in under 3 minutes.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20 shrink-0"
          >
            Try It Risk-Free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative group"
            >
              {/* Card */}
              <div className={`relative p-8 lg:p-10 border border-border ${index === 0 ? 'rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none' : ''} ${index === 2 ? 'rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none' : ''} bg-card/60 backdrop-blur-sm hover:bg-card transition-colors`}>
                {/* Step number + time */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-accent/10 font-['Playfair_Display',serif]">
                    {item.step}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    {item.time}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-foreground font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-accent text-accent-foreground items-center justify-center">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Urgency bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-medium text-foreground">2,847</span> jars sold this month
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <span>180-day money-back guarantee</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <span>Free shipping across Canada over $60</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
