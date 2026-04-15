import terrafreezeJar from "@/assets/terrafreeze-jar.webp";
import stepApply from "@/assets/step-apply.jpg";
import stepPenetrate from "@/assets/step-penetrate.jpg";
import stepRelief from "@/assets/step-relief.jpg";

const steps = [
  {
    num: "1",
    title: "Apply",
    image: stepApply,
    description:
      "Massage a small amount onto the sore area. Absorbs quickly with no greasy residue — cooling comfort starts on contact.",
  },
  {
    num: "2",
    title: "Penetrate",
    image: stepPenetrate,
    description:
      "Emu Oil helps carry Menthol, Arnica, and MSM deeper — reaching joints, muscles, and tendons where basic creams can't.",
  },
  {
    num: "3",
    title: "Relief",
    image: stepRelief,
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
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            How to use it
          </span>
        </div>

        {/* Headline */}
        <h2 className="mb-14 max-w-lg font-['Plus_Jakarta_Sans',sans-serif] text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] text-foreground md:mb-16">
          The Simple Routine That{" "}
          <span className="italic text-accent">Ends Your Pain</span>
        </h2>

        {/* Two-column: steps left, product right */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left — Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-5 rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 sm:gap-6 sm:p-5"
              >
                {/* Photo */}
                <div className="relative flex-shrink-0">
                  <img
                    src={step.image}
                    alt={`Step ${step.num}: ${step.title}`}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="h-28 w-28 rounded-xl object-cover sm:h-36 sm:w-36"
                  />
                  {/* Number badge overlay */}
                  <span className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground shadow-md">
                    {step.num}
                  </span>
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-center">
                  <h3 className="mb-1.5 text-lg font-bold text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Product image */}
          <div className="hidden items-center justify-center lg:flex">
            <img
              src={terrafreezeJar}
              alt="TERRAFREEZE Extra Strength Pain Relief Cream jar"
              className="w-[340px] drop-shadow-2xl"
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
