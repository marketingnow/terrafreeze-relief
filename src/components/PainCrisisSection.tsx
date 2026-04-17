import comparisonChart from "@/assets/tf-comparison-chart.png";

const PainCrisisSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Headline */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[clamp(28px,3.5vw,46px)] leading-[1.1] text-foreground text-center mb-14 lg:mb-16">
          Here's Why{" "}
          <span className="italic text-accent">Nothing You've Tried Has Stuck</span>
        </h2>

        {/* Two-column: copy left, chart right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-6">
            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed">
              You rub it on, you feel the cool tingle, and for about twenty minutes you think maybe this one's different. Then it fades. The ache creeps back in while you're still mid-afternoon, and you're reaching for the tube again — or giving up and toughing it out. That's the pattern with most drugstore creams. They mask the surface for a moment and leave everything underneath exactly where it was.
            </p>
            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed">
              It wears you down. You start rationing relief, planning your day around flare-ups, waking up at 3 a.m. because the stiffness won't let you settle. After a week of that loop, nothing has actually changed. You're not looking for another quick hit that disappears before you've finished your coffee. You're looking for something that stays with you.
            </p>
            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-accent">TERRAFREEZE was built for that.</span>{" "}
              An 18-ingredient formula — cooling Menthol up top for fast, targeted relief, with Arnica, MSM, and Emu Oil working underneath to soothe and support recovery. Quick relief that lasts for hours, not minutes. Non-greasy, low odour, Health Canada registered, made in Canada and backed by a 180-day guarantee. Over 15,000 Canadians have already made the switch.
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
