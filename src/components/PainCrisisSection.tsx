const PainCrisisSection = () => {
  // Bar chart data
  const comparisonData = [
    { label: "Baseline", terrafreeze: 43, competitor: 45 },
    { label: "Day 8", terrafreeze: 17, competitor: 29 },
  ];

  const maxVal = 50;
  const barHeight = (val: number) => (val / maxVal) * 180;

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

          {/* Right — comparison bar chart card */}
          <div className="flex justify-center">
            <div className="bg-background rounded-2xl shadow-lg border border-border/60 p-8 max-w-md w-full">
              <h3 className="font-['Playfair_Display',serif] font-bold text-xl text-foreground text-center mb-1">
                TERRAFREEZE® vs. Top Pain Cream
              </h3>
              <p className="text-center text-xs text-muted-foreground mb-6">
                Severity of Pain Score (VAS)*
              </p>

              {/* Legend */}
              <div className="flex justify-center gap-6 mb-6 text-xs font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-accent" />
                  <span className="text-foreground">TERRAFREEZE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-destructive" />
                  <span className="text-foreground">Top Pain Cream</span>
                </div>
              </div>

              {/* Chart */}
              <svg viewBox="0 0 360 260" className="w-full h-auto">
                {/* Y-axis labels & gridlines */}
                {[0, 10, 20, 30, 40, 50].map((v) => {
                  const y = 220 - barHeight(v);
                  return (
                    <g key={v}>
                      <text x="28" y={y + 4} textAnchor="end" fill="hsl(215,16%,47%)" fontSize="10" fontFamily="DM Sans, sans-serif">{v}</text>
                      <line x1="34" y1={y} x2="340" y2={y} stroke="hsl(216,18%,91%)" strokeWidth="0.5" />
                    </g>
                  );
                })}

                {/* Bar groups */}
                {comparisonData.map((group, gi) => {
                  const groupX = gi === 0 ? 70 : 210;
                  const barW = 44;
                  const gap = 8;

                  const compH = barHeight(group.competitor);
                  const tfH = barHeight(group.terrafreeze);

                  return (
                    <g key={group.label}>
                      {/* Competitor bar (red) */}
                      <rect
                        x={groupX}
                        y={220 - compH}
                        width={barW}
                        height={compH}
                        rx="3"
                        fill="hsl(0,84%,60%)"
                      />
                      {/* TERRAFREEZE bar (blue) */}
                      <rect
                        x={groupX + barW + gap}
                        y={220 - tfH}
                        width={barW}
                        height={tfH}
                        rx="3"
                        fill="hsl(202,72%,35%)"
                      />

                      {/* Value labels on bars */}
                      <text
                        x={groupX + barW / 2}
                        y={220 - compH - 6}
                        textAnchor="middle"
                        fill="hsl(0,84%,60%)"
                        fontSize="11"
                        fontWeight="600"
                        fontFamily="DM Sans, sans-serif"
                      >
                        {group.competitor}
                      </text>
                      <text
                        x={groupX + barW + gap + barW / 2}
                        y={220 - tfH - 6}
                        textAnchor="middle"
                        fill="hsl(202,72%,35%)"
                        fontSize="11"
                        fontWeight="600"
                        fontFamily="DM Sans, sans-serif"
                      >
                        {group.terrafreeze}
                      </text>

                      {/* X-axis label */}
                      <text
                        x={groupX + barW + gap / 2}
                        y="240"
                        textAnchor="middle"
                        fill="hsl(215,16%,47%)"
                        fontSize="11"
                        fontFamily="DM Sans, sans-serif"
                      >
                        {group.label}
                      </text>
                    </g>
                  );
                })}

                {/* Reduction callouts */}
                {/* Competitor: 32.3% */}
                <g>
                  <circle cx="113" cy={220 - barHeight(29) + barHeight(14)} r="18" fill="hsl(43,76%,46%)" />
                  <text x="113" y={220 - barHeight(29) + barHeight(14) - 3} textAnchor="middle" fill="hsl(0,0%,100%)" fontSize="7" fontWeight="700" fontFamily="DM Sans, sans-serif">32.3%</text>
                  <text x="113" y={220 - barHeight(29) + barHeight(14) + 6} textAnchor="middle" fill="hsl(0,0%,100%)" fontSize="5.5" fontFamily="DM Sans, sans-serif">reduction*</text>
                </g>

                {/* TERRAFREEZE: 59.5% */}
                <g>
                  <circle cx="295" cy={220 - barHeight(17) + barHeight(8)} r="22" fill="hsl(43,76%,46%)" />
                  <text x="295" y={220 - barHeight(17) + barHeight(8) - 4} textAnchor="middle" fill="hsl(0,0%,100%)" fontSize="8" fontWeight="700" fontFamily="DM Sans, sans-serif">59.5%</text>
                  <text x="295" y={220 - barHeight(17) + barHeight(8) + 5} textAnchor="middle" fill="hsl(0,0%,100%)" fontSize="5.5" fontFamily="DM Sans, sans-serif">reduction</text>
                  <text x="295" y={220 - barHeight(17) + barHeight(8) + 12} textAnchor="middle" fill="hsl(0,0%,100%)" fontSize="5.5" fontFamily="DM Sans, sans-serif">in pain!</text>
                </g>

                {/* "Nearly TWICE THE RELIEF!" callout */}
                <text x="240" y="25" textAnchor="middle" fill="hsl(0,84%,60%)" fontSize="11" fontWeight="700" fontFamily="DM Sans, sans-serif" fontStyle="italic">
                  Nearly TWICE THE RELIEF!
                </text>
                {/* Arrow from callout to TERRAFREEZE Day 8 bar */}
                <path d="M275,28 Q320,50 297,55" fill="none" stroke="hsl(0,84%,60%)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <defs>
                  <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6" fill="hsl(0,84%,60%)" />
                  </marker>
                </defs>
              </svg>

              <p className="text-center text-[10px] text-muted-foreground mt-3">
                *Visual Analog Scale (100 mm)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainCrisisSection;
