import comparisonChart from "@/assets/tf-comparison-chart.png";

const PainCrisisSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Headline */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[clamp(28px,3.5vw,46px)] leading-[1.1] text-foreground text-center mb-14 lg:mb-16">
          Most Pain Creams{" "}
          <span className="italic text-accent">Quit Before You Do</span>
        </h2>

        {/* Two-column: copy left, chart right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Left — copy */}
          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed">
              You rub it on, feel the cool tingle, and for twenty minutes think maybe this one's different. Then it fades. The ache creeps back, and you're reaching for the tube again. Most drugstore creams mask the surface and leave everything underneath where it was.
            </p>
            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed">
              It wears you down. You ration relief, plan your day around flare-ups, wake at 3 a.m. because the stiffness won't settle.
            </p>
            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-accent">TERRAFREEZE was built for that.</span>{" "}
              An 18-ingredient formula — cooling Menthol for fast, targeted relief, with Arnica, MSM, and Emu Oil to soothe and support recovery underneath. Quick relief that lasts for hours, not minutes. Over 15,000 Canadians have already made the switch.
            </p>
          </div>

          {/* Right — chart image */}
          <div className="h-full flex items-center">
            <img
              src={comparisonChart}
              alt="Comparison chart showing TERRAFREEZE achieves 59.5% pain reduction vs only 32.3% for generic pharmacy cream"
              className="w-full h-auto max-h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainCrisisSection;
