import comparisonChart from "@/assets/tf-comparison-chart.png";

const PainCrisisSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Headline */}
        <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(28px,3.5vw,46px)] leading-[1.1] text-primary-foreground text-center mb-14 lg:mb-16">
          The Silent Pain Crisis:{" "}
          <span className="italic text-accent">A Modern Epidemic</span>
        </h2>

        {/* Two-column: copy left, chart right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-6">
            <p className="text-primary-foreground/80 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-accent">Chronic pain rates</span>{" "}
              have been climbing steadily for decades. Sedentary lifestyles, repetitive strain,
              screen-heavy routines, and aging joints are wearing down the body faster than ever.
            </p>
            <p className="text-primary-foreground/80 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-primary-foreground">The impact?</span>{" "}
              Persistent aches and stiffness drain your energy, limit your mobility, and steal
              your focus — making it harder to stay active, productive, and present in everyday life.
            </p>
            <p className="text-primary-foreground/80 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-accent">The good news:</span>{" "}
              TERRAFREEZE helps you take back control with fast-acting, natural topical pain
              relief for sore muscles, stiff joints, and everyday aches — so you can move
              freely and feel like yourself again.
            </p>
          </div>

          {/* Right — chart image */}
          <div>
            <img
              src={comparisonChart}
              alt="Comparison chart showing TERRAFREEZE achieves 59.5% pain reduction vs only 32.3% for generic pharmacy cream"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainCrisisSection;
