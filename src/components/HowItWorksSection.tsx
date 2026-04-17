import terrafreezeJar from "@/assets/terrafreeze-jar.webp";
import stepApply from "@/assets/step-apply-v3.png";
import stepPenetrate from "@/assets/step-penetrate-v3.png";
import stepRelief from "@/assets/step-relief-v3.png";

const steps = [
  {
    num: "1",
    image: stepApply,
    description:
      "Massage a small amount onto the sore area — cooling comfort starts on contact.",
  },
  {
    num: "2",
    image: stepPenetrate,
    description:
      "Emu Oil drives Menthol, Arnica, and MSM deeper — reaching joints and muscles where basic creams can't.",
  },
  {
    num: "3",
    image: stepRelief,
    description:
      "Feel cooling relief that lasts for hours. Stay active all day — no pills required.",
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
        {/* Headline — centered */}
        <h2 className="mb-12 text-center font-['Plus_Jakarta_Sans',sans-serif] text-[clamp(32px,4vw,50px)] font-extrabold leading-[1.15] text-foreground md:mb-16">
          3 Simple Daily Steps
        </h2>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col">
              {/* Image with Step badge */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
                <img
                  src={step.image}
                  alt={`Step ${step.num}`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-contain"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground shadow-md">
                  Step {step.num}
                </span>
              </div>

              {/* Description below */}
              <p className="mt-5 text-[17px] leading-relaxed text-foreground">
                {step.description}
              </p>
            </div>
          ))}
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
