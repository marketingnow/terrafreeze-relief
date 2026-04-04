const PainCrisisSection = () => {
  // Chart data points for SVG path
  // "Without Relief" line — pain climbs with age
  const withoutPoints = [
    [0, 85], [1, 75], [2, 60], [3, 48], [4, 38], [5, 30], [6, 25], [7, 20], [8, 18],
  ];
  // "With TERRAFREEZE" line — pain managed, stays lower
  const withPoints = [
    [0, 85], [1, 78], [2, 70], [3, 72], [4, 74], [5, 75], [6, 73], [7, 70], [8, 68],
  ];

  const ages = ["20", "30", "40", "50", "60", "70", "80"];
  const yLabels = ["Low", "", "Moderate", "", "High"];

  const toSvgX = (i: number) => 60 + i * 52;
  const toSvgY = (pct: number) => 10 + (100 - pct) * 2.6;

  const pathD = (pts: number[][]) =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"}${toSvgX(p[0])},${toSvgY(p[1])}`).join(" ");

  return (
    <section className="w-full py-20 lg:py-28 bg-foreground relative overflow-hidden">
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Headline */}
        <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(28px,3.5vw,46px)] leading-[1.1] text-primary-foreground text-center mb-14 lg:mb-16">
          The Silent Pain Crisis:{" "}
          <span className="italic text-accent-foreground">A Modern Epidemic</span>
        </h2>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-6">
            <p className="text-primary-foreground/90 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-accent-foreground">Chronic pain rates</span>{" "}
              have been climbing steadily for decades. Sedentary lifestyles, repetitive strain,
              screen-heavy routines, and aging joints are wearing down the body faster than ever.
            </p>
            <p className="text-primary-foreground/90 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-primary-foreground">The impact?</span>{" "}
              Persistent aches and stiffness drain your energy, limit your mobility, and steal
              your focus — making it harder to stay active, productive, and present in everyday life.
            </p>
            <p className="text-primary-foreground/90 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-accent-foreground">The good news:</span>{" "}
              TERRAFREEZE helps you take back control with fast-acting, natural topical pain
              relief for sore muscles, stiff joints, and everyday aches — so you can move
              freely and feel like yourself again.
            </p>
          </div>

          {/* Right — chart */}
          <div className="w-full">
            <svg viewBox="0 0 500 290" className="w-full h-auto" aria-label="Chart showing mobility quality declining with age, but maintained with TERRAFREEZE">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="60"
                  y1={toSvgY(20 + i * 20)}
                  x2="476"
                  y2={toSvgY(20 + i * 20)}
                  stroke="hsl(0,0%,100%)"
                  strokeOpacity="0.08"
                  strokeWidth="0.5"
                />
              ))}

              {/* Y axis labels */}
              {yLabels.map((label, i) => (
                label && (
                  <text
                    key={i}
                    x="55"
                    y={toSvgY(20 + i * 20) + 3}
                    textAnchor="end"
                    fill="hsl(0,0%,100%)"
                    fillOpacity="0.4"
                    fontSize="9"
                    fontFamily="DM Sans, sans-serif"
                    letterSpacing="0.08em"
                  >
                    {label}
                  </text>
                )
              ))}

              {/* Y axis title */}
              <text
                x="15"
                y="145"
                textAnchor="middle"
                fill="hsl(0,0%,100%)"
                fillOpacity="0.5"
                fontSize="8"
                fontFamily="DM Sans, sans-serif"
                letterSpacing="0.15em"
                transform="rotate(-90, 15, 145)"
              >
                MOBILITY &amp; QUALITY OF LIFE
              </text>

              {/* X axis labels */}
              {ages.map((age, i) => (
                <text
                  key={age}
                  x={toSvgX(i + 1)}
                  y="278"
                  textAnchor="middle"
                  fill="hsl(0,0%,100%)"
                  fillOpacity="0.5"
                  fontSize="10"
                  fontFamily="DM Sans, sans-serif"
                >
                  {age}
                </text>
              ))}

              {/* X axis title */}
              <text
                x="268"
                y="295"
                textAnchor="middle"
                fill="hsl(0,0%,100%)"
                fillOpacity="0.5"
                fontSize="8"
                fontFamily="DM Sans, sans-serif"
                letterSpacing="0.15em"
              >
                A G E
              </text>

              {/* Axes */}
              <line x1="60" y1="10" x2="60" y2="270" stroke="hsl(0,0%,100%)" strokeOpacity="0.2" strokeWidth="1" />
              <line x1="60" y1="270" x2="476" y2="270" stroke="hsl(0,0%,100%)" strokeOpacity="0.2" strokeWidth="1" />

              {/* "Without Relief" line (white, declining) */}
              <path
                d={pathD(withoutPoints)}
                fill="none"
                stroke="hsl(0,0%,100%)"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* "With TERRAFREEZE" line (accent, maintaining) */}
              <path
                d={pathD(withPoints)}
                fill="none"
                stroke="hsl(202,72%,55%)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* End dots */}
              <circle cx={toSvgX(8)} cy={toSvgY(18)} r="5" fill="hsl(0,0%,100%)" />
              <circle cx={toSvgX(8)} cy={toSvgY(68)} r="5" fill="hsl(202,72%,55%)" />

              {/* Start dot */}
              <circle cx={toSvgX(0)} cy={toSvgY(85)} r="5" fill="hsl(202,72%,55%)" />

              {/* Legend labels */}
              <text
                x="476"
                y={toSvgY(68) - 12}
                textAnchor="end"
                fill="hsl(202,72%,55%)"
                fontSize="9"
                fontFamily="DM Sans, sans-serif"
                fontWeight="500"
                letterSpacing="0.1em"
              >
                WITH TERRAFREEZE
              </text>
              <text
                x="476"
                y={toSvgY(18) + 18}
                textAnchor="end"
                fill="hsl(0,0%,100%)"
                fillOpacity="0.6"
                fontSize="9"
                fontFamily="DM Sans, sans-serif"
                letterSpacing="0.1em"
              >
                WITHOUT RELIEF
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainCrisisSection;
