type ChartColumn = {
  label: string;
  value: number;
  badge?: string;
};

type ComparisonPanel = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tone: "generic" | "winner";
  columns: [ChartColumn, ChartColumn];
};

const yAxisTicks = [50, 40, 30, 20, 10, 0];
const maxValue = 50;
const barMaxHeight = 248;

const panels: ComparisonPanel[] = [
  {
    eyebrow: "Typical OTC option",
    title: "Generic Pharmacy Cream",
    subtitle: "Temporary, inconsistent results.",
    tone: "generic",
    columns: [
      { label: "Before Use", value: 45 },
      { label: "After 8 Days", value: 33, badge: "Only 32.3% relief" },
    ],
  },
  {
    eyebrow: "Clear winner",
    title: "TERRAFREEZE™",
    subtitle: "Fast-absorbing, deep relief.",
    tone: "winner",
    columns: [
      { label: "Before Use", value: 45 },
      { label: "After 8 Days", value: 20, badge: "59.5% reduction in pain!" },
    ],
  },
];

const toneStyles = {
  generic: {
    panel: "bg-muted/55",
    eyebrow: "text-muted-foreground",
    title: "text-foreground",
    subtitle: "text-muted-foreground",
    strongBar: "bg-chart-generic",
    softBar: "bg-chart-generic-soft",
    badge: "bg-chart-badge text-foreground",
  },
  winner: {
    panel: "bg-background shadow-xl",
    eyebrow: "text-accent",
    title: "text-primary",
    subtitle: "text-foreground/70",
    strongBar: "bg-chart-winner",
    softBar: "bg-chart-winner-soft",
    badge: "bg-destructive text-destructive-foreground",
  },
} as const;

const PainCrisisSection = () => {
  return (
    <section className="w-full bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="font-['Playfair_Display',serif] text-[clamp(30px,3.6vw,50px)] font-bold leading-[1.08] text-foreground">
            The Silent Pain Crisis:{" "}
            <span className="italic text-accent">A Modern Epidemic</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80 lg:text-lg">
            <p>
              <span className="font-bold text-accent">Chronic pain rates</span> have been
              climbing steadily for decades. Sedentary lifestyles, repetitive strain,
              screen-heavy routines, and aging joints are wearing down the body faster than ever.
            </p>
            <p>
              <span className="font-bold text-foreground">The impact?</span> Persistent aches and
              stiffness drain your energy, limit your mobility, and steal your focus — making it
              harder to stay active, productive, and present in everyday life.
            </p>
            <p>
              <span className="font-bold text-accent">The good news:</span> TERRAFREEZE helps you
              take back control with fast-acting, natural topical pain relief for sore muscles,
              stiff joints, and everyday aches — so you can move freely and feel like yourself
              again.
            </p>
          </div>
        </div>

        <div className="rounded-[32px] border border-border/80 bg-gradient-to-b from-background to-secondary/40 p-5 sm:p-8 lg:p-10">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Side-by-side outcome comparison
            </p>
            <h3 className="font-['Playfair_Display',serif] text-[clamp(28px,3vw,42px)] font-bold leading-tight text-foreground">
              Why Most Pain Creams Fail (And What Works Better)
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] lg:gap-8">
            {panels.map((panel, panelIndex) => {
              const styles = toneStyles[panel.tone];

              return (
                <div key={panel.title} className="contents lg:block">
                  {panelIndex === 1 && <div className="hidden bg-border lg:block" />}

                  <div
                    className={`rounded-[28px] border border-border/70 px-5 py-7 sm:px-8 sm:py-8 ${styles.panel}`}
                  >
                    <div className="mb-8 text-center">
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${styles.eyebrow}`}>
                        {panel.eyebrow}
                      </p>
                      <h4 className={`mt-3 font-['Playfair_Display',serif] text-[clamp(24px,2.7vw,34px)] font-bold leading-tight ${styles.title}`}>
                        {panel.title}
                      </h4>
                      <p className={`mt-2 text-sm sm:text-base ${styles.subtitle}`}>{panel.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-[34px_minmax(0,1fr)] gap-4 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-5">
                      <div className="flex h-[320px] flex-col justify-between pb-12 text-right text-[11px] font-medium text-muted-foreground sm:text-xs">
                        {yAxisTicks.map((tick) => (
                          <span key={`${panel.title}-${tick}`}>{tick}</span>
                        ))}
                      </div>

                      <div className="relative">
                        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-12">
                          {yAxisTicks.slice(0, -1).map((tick, index) => (
                            <div
                              key={`${panel.title}-grid-${tick}`}
                              className="absolute inset-x-0 border-t border-border/80"
                              style={{ top: `${(index / (yAxisTicks.length - 1)) * 100}%` }}
                            />
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-5 pt-2 sm:gap-8 lg:gap-10">
                          {panel.columns.map((column, columnIndex) => {
                            const isAfterBar = columnIndex === 1;
                            const barHeight = Math.max((column.value / maxValue) * barMaxHeight, 72);

                            return (
                              <div key={`${panel.title}-${column.label}`} className="flex flex-col items-center">
                                <div className="flex h-[320px] w-full items-end justify-center pb-12">
                                  <div className="relative flex w-full max-w-[132px] flex-col items-center justify-end">
                                    {isAfterBar && column.badge && (
                                      <div className="absolute right-[-18px] top-[110px] z-20 w-[124px] sm:w-[134px]">
                                        <div
                                          className={`rounded-full px-4 py-3 text-center text-[11px] font-extrabold uppercase leading-tight shadow-lg ring-4 ring-background/80 sm:text-xs ${styles.badge}`}
                                        >
                                          {column.badge}
                                        </div>
                                      </div>
                                    )}

                                    <span className="mb-3 text-sm font-bold text-foreground sm:text-base">
                                      {column.value}
                                    </span>

                                    <div
                                      className={`relative w-full overflow-hidden rounded-t-[24px] border border-background/60 ${
                                        isAfterBar ? styles.softBar : styles.strongBar
                                      } ${panel.tone === "generic" ? "opacity-85" : "shadow-lg"}`}
                                      style={{ height: `${barHeight}px` }}
                                    >
                                      <div className="absolute inset-x-0 top-0 h-8 bg-background/12" />
                                      <div
                                        className="absolute inset-0"
                                        style={{
                                          backgroundImage:
                                            panel.tone === "generic"
                                              ? "radial-gradient(circle at 18% 20%, hsl(var(--background) / 0.18) 0, transparent 34%), radial-gradient(circle at 78% 70%, hsl(var(--foreground) / 0.08) 0, transparent 30%)"
                                              : "linear-gradient(180deg, hsl(var(--background) / 0.16) 0%, transparent 46%)",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="min-h-[42px] max-w-[132px] text-center text-sm font-semibold leading-tight text-foreground sm:text-[15px]">
                                  {column.label}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            Most over-the-counter creams rely on temporary numbing—not recovery support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainCrisisSection;
