import { Droplets, Layers, ShieldCheck } from "lucide-react";
import terrafreezeJar from "@/assets/terrafreeze-jar.webp";

const steps = [
  {
    icon: Droplets,
    num: "1",
    title: "Apply",
    description:
      "Massage a small amount onto the sore area. Absorbs quickly with no greasy residue — cooling comfort starts on contact.",
  },
  {
    icon: Layers,
    num: "2",
    title: "Penetrate",
    description:
      "Emu Oil helps carry Menthol, Arnica, and MSM deeper — reaching joints, muscles, and tendons where basic creams can't.",
  },
  {
    icon: ShieldCheck,
    num: "3",
    title: "Relief",
    description:
      "Feel cooling relief that lasts for hours. Stay active throughout the day with no pills required. Reapply as needed.",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, hsl(210 30% 96%) 0%, hsl(210 25% 98%) 50%, hsl(0 0% 100%) 100%)",
      }}
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, hsl(202 72% 35% / 0.12), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            How to use it
          </span>
        </div>

        {/* Headline */}
        <h2 className="mb-12 max-w-lg font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] text-foreground md:mb-16">
          The Simple Routine That{" "}
          <span className="italic text-accent">Ends Your Pain</span>
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left — Steps */}
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5">
                {/* Number badge */}
                <div className="flex flex-shrink-0 flex-col items-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
                    {step.num}
                  </span>
                  {step.num !== "3" && (
                    <div className="mt-2 h-full w-px bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <h3 className="mb-1.5 text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Product image */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={terrafreezeJar}
              alt="TERRAFREEZE Extra Strength Pain Relief Cream jar with natural ingredients"
              className="w-full max-w-[420px] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 md:mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-9 py-3.5 text-[15px] font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Try It Risk-Free
          </a>
          <span className="text-xs text-muted-foreground">
            🇨🇦 Ships Free Across Canada on Orders Over $60
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
