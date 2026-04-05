import comparisonChart from "@/assets/tf-comparison-chart.png";

const PainCrisisSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Headline */}
        <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(28px,3.5vw,46px)] leading-[1.1] text-foreground text-center mb-6 lg:mb-8">
          The Silent Pain Crisis:{" "}
          <span className="italic text-accent">A Modern Epidemic</span>
        </h2>

        {/* Copy */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12 lg:mb-16">
          <p className="text-foreground/80 text-base lg:text-lg leading-relaxed text-center">
            <span className="font-bold text-accent">Chronic pain rates</span>{" "}
            have been climbing steadily for decades. Sedentary lifestyles, repetitive strain,
            screen-heavy routines, and aging joints are wearing down the body faster than ever.
          </p>
          <p className="text-foreground/80 text-base lg:text-lg leading-relaxed text-center">
            <span className="font-bold text-foreground">The good news:</span>{" "}
            TERRAFREEZE helps you take back control with fast-acting, natural topical pain
            relief for sore muscles, stiff joints, and everyday aches — so you can move
            freely and feel like yourself again.
          </p>
        </div>

        {/* Chart Image */}
        <div className="max-w-4xl mx-auto">
          <img
            src={comparisonChart}
            alt="Comparison chart showing TERRAFREEZE achieves 59.5% pain reduction vs only 32.3% for generic pharmacy cream"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PainCrisisSection;
