import { Droplets, Layers, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Droplets,
    step: "STEP 01",
    time: "5 seconds",
    title: "APPLY",
    bullets: [
      "Massage a small amount onto the sore area",
      "Absorbs quickly with no greasy residue",
      "Won't stain skin or clothing",
      "Cooling comfort starts on contact",
    ],
  },
  {
    icon: Layers,
    step: "STEP 02",
    time: "2 minutes",
    title: "PENETRATE",
    bullets: [
      "Emu Oil helps carry key ingredients deeper",
      "Menthol, Arnica, and MSM reach the target area",
      "Supports joints, muscles, and tendons directly",
      "Goes beyond the surface where basic creams stop",
    ],
  },
  {
    icon: ShieldCheck,
    step: "STEP 03",
    time: "Hours",
    title: "RELIEF",
    bullets: [
      "Feel cooling relief that lasts for hours",
      "Stay active throughout the day",
      "Simple topical support with no pills required",
      "Reapply as needed for continued comfort",
    ],
  },
];

const HowItWorksCard = ({
  icon: Icon,
  step,
  time,
  title,
  bullets,
}: (typeof steps)[number]) => {
  return (
    <article className="relative z-10 flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="absolute inset-2 rounded-full bg-accent/20 blur-2xl" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm">
          <Icon className="h-9 w-9 text-accent" strokeWidth={1.65} />
        </div>
      </div>

      <div className="mb-3 flex items-center gap-2.5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent md:text-xs">
          {step}
        </span>
        <span className="rounded-full border border-primary-foreground/10 bg-primary-foreground/6 px-3 py-1 text-[11px] font-medium text-primary-foreground/75 md:text-xs">
          {time}
        </span>
      </div>

      <h3 className="mb-5 text-[22px] font-bold tracking-[0.14em] text-primary-foreground">
        {title}
      </h3>

      <ul className="w-full max-w-[290px] space-y-3 text-left">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-primary-foreground/70">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-foreground via-primary to-primary py-20 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[24rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <h2 className="mb-4 font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.1] text-primary-foreground">
            How <span className="italic text-accent">TERRAFREEZE™</span> Works
          </h2>
          <p className="text-base leading-relaxed text-primary-foreground/60">
            Three simple steps to fast-acting, long-lasting pain relief.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[16%] right-[16%] top-12 hidden h-px bg-primary-foreground/15 md:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {steps.map((item) => (
              <HowItWorksCard key={item.step} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 md:mt-20">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-primary px-9 py-3.5 text-[15px] font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Try It Risk-Free
          </a>
          <span className="text-xs text-primary-foreground/45">
            🇨🇦 Ships Free Across Canada on Orders Over $60
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
