const PainCrisisSection = () => {
  // Data for the two treatment groups
  const groups = [
    {
      label: "Top Pain Cream",
      before: 43,
      after: 29,
      reduction: "32.3%",
    },
    {
      label: "TERRAFREEZE®",
      before: 45,
      after: 17,
      reduction: "59.5%",
    },
  ];

  const maxVal = 50;

  return (
    <section className="w-full py-20 lg:py-28 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Headline */}
        <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(28px,3.5vw,46px)] leading-[1.1] text-foreground text-center mb-14 lg:mb-16">
          The Silent Pain Crisis:{" "}
          <span className="italic text-accent">A Modern Epidemic</span>
        </h2>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-6">
            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-accent">Chronic pain rates</span>{" "}
              have been climbing steadily for decades. Sedentary lifestyles, repetitive strain,
              screen-heavy routines, and aging joints are wearing down the body faster than ever.
            </p>
            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-foreground">The impact?</span>{" "}
              Persistent aches and stiffness drain your energy, limit your mobility, and steal
              your focus — making it harder to stay active, productive, and present in everyday life.
            </p>
            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-accent">The good news:</span>{" "}
              TERRAFREEZE helps you take back control with fast-acting, natural topical pain
              relief for sore muscles, stiff joints, and everyday aches — so you can move
              freely and feel like yourself again.
            </p>
          </div>

          {/* Right — chart built with divs for clarity */}
          <div className="bg-background rounded-2xl shadow-xl border border-border/60 p-6 sm:p-8 lg:p-10">
            {/* Chart title */}
            <h3 className="font-['Playfair_Display',serif] font-bold text-2xl lg:text-[28px] text-foreground text-center mb-2">
              TERRAFREEZE® vs. Top Pain Cream
            </h3>

            {/* Callout */}
            <p className="text-center text-destructive font-bold italic text-lg lg:text-xl mb-6">
              Nearly <span className="text-2xl lg:text-3xl uppercase">TWICE</span> THE RELIEF!
            </p>

            {/* Legend */}
            <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-accent" />
                <span className="text-foreground">TERRAFREEZE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-destructive" />
                <span className="text-foreground">Top Pain Cream</span>
              </div>
            </div>

            {/* Y-axis label */}
            <div className="flex gap-3">
              <div className="flex items-center">
                <span
                  className="text-[10px] tracking-[0.12em] text-muted-foreground font-medium whitespace-nowrap"
                  style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
                >
                  SEVERITY OF PAIN (VAS)*
                </span>
              </div>

              {/* Chart area */}
              <div className="flex-1">
                {/* Y-axis scale + bars */}
                <div className="flex gap-2 w-full">
                  {/* Y labels */}
                  <div className="flex flex-col justify-between text-right text-xs text-muted-foreground pr-1" style={{ height: 240 }}>
                    <span>50</span>
                    <span>40</span>
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>
                  </div>

                  {/* Bars container */}
                  <div className="flex-1 relative" style={{ height: 240 }}>
                    {/* Horizontal grid lines */}
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="absolute w-full border-t border-border/60"
                        style={{ top: `${(i / 5) * 100}%` }}
                      />
                    ))}

                    {/* Bar groups */}
                    <div className="relative h-full flex items-end justify-around px-4">
                      {groups.map((group) => (
                        <div key={group.label} className="flex flex-col items-center gap-0">
                          {/* Two bars side by side */}
                          <div className="flex items-end gap-2 sm:gap-3">
                            {/* Before bar */}
                            <div className="flex flex-col items-center">
                              <span className="text-xs font-bold text-foreground mb-1">{group.before}</span>
                              <div
                                className={`w-12 sm:w-16 rounded-t-md ${group.label.includes("TERRA") ? "bg-accent" : "bg-destructive"}`}
                                style={{ height: `${(group.before / maxVal) * 220}px` }}
                              />
                              <span className="text-[10px] sm:text-xs text-muted-foreground mt-2 font-medium">Before</span>
                            </div>

                            {/* After bar */}
                            <div className="flex flex-col items-center relative">
                              <span className="text-xs font-bold text-foreground mb-1">{group.after}</span>
                              <div
                                className={`w-12 sm:w-16 rounded-t-md ${group.label.includes("TERRA") ? "bg-accent/70" : "bg-destructive/70"}`}
                                style={{ height: `${(group.after / maxVal) * 220}px` }}
                              />
                              <span className="text-[10px] sm:text-xs text-muted-foreground mt-2 font-medium">Day 8</span>

                              {/* Reduction badge */}
                              <div className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2">
                                <div className={`rounded-full flex flex-col items-center justify-center text-primary-foreground font-bold shadow-lg ${group.label.includes("TERRA") ? "w-16 h-16 sm:w-20 sm:h-20 bg-accent" : "w-14 h-14 sm:w-16 sm:h-16 bg-[hsl(43,76%,46%)]"}`}>
                                  <span className={`${group.label.includes("TERRA") ? "text-sm sm:text-base" : "text-xs sm:text-sm"} leading-tight`}>
                                    {group.reduction}
                                  </span>
                                  <span className="text-[8px] sm:text-[9px] opacity-90 leading-tight">
                                    {group.label.includes("TERRA") ? "less pain!" : "reduction"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Group label */}
                          <p className={`text-xs sm:text-sm font-semibold mt-4 ${group.label.includes("TERRA") ? "text-accent" : "text-destructive"}`}>
                            {group.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* X axis label */}
                <p className="text-center text-xs text-muted-foreground mt-4 tracking-wide">
                  Treatment Period
                </p>
              </div>
            </div>

            <p className="text-center text-[10px] text-muted-foreground mt-4">
              *Visual Analog Scale (100 mm)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainCrisisSection;
