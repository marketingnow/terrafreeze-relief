import { Droplets, Layers, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Droplets,
    step: "01",
    title: "APPLY",
    time: "5 seconds",
    bullets: [
      "Massage a small amount onto the sore area",
      "Non-greasy formula absorbs instantly",
      "No residue left on clothes or skin",
      "Pleasant cooling sensation on contact",
    ],
  },
  {
    icon: Layers,
    step: "02",
    title: "PENETRATE",
    time: "2 minutes",
    bullets: [
      "Emu Oil drives actives deep past the skin barrier",
      "Menthol, Arnica & MSM reach inflamed tissue",
      "Targets joints, muscles and tendons directly",
      "Works where generic creams can't reach",
    ],
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "RELIEF",
    time: "Hours",
    bullets: [
      "Feel cooling relief that lasts for hours",
      "Stay active — walk, garden, play with grandkids",
      "No pills, no prescriptions, no side effects",
      "Reapply as needed throughout the day",
    ],
  },
];

const HowItWorksSection = () => {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #E8F4FD 0%, #F0FAFA 40%, #FFFFFF 100%)",
        padding: "90px 0 80px",
      }}
    >
      {/* Frost texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(10,138,138,0.04) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, rgba(27,154,170,0.03) 0%, transparent 50%),
                            radial-gradient(circle at 50% 10%, rgba(10,138,138,0.03) 0%, transparent 40%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            className="font-['Playfair_Display',serif] font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 46px)", color: "#2D2D2D" }}
          >
            How Does{" "}
            <span style={{ color: "#0A8A8A" }}>TERRAFREEZE™</span>{" "}
            Work?
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ fontSize: "17px", color: "#777", fontWeight: 400, lineHeight: 1.6 }}
          >
            Three simple steps to fast-acting, long-lasting natural pain relief.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-6 relative">
          {/* Connecting dashed line (desktop only) */}
          <div
            className="hidden md:block absolute top-[52px] left-[16.66%] right-[16.66%] z-0"
            style={{
              height: "2px",
              backgroundImage: "repeating-linear-gradient(90deg, #0A8A8A 0px, #0A8A8A 8px, transparent 8px, transparent 18px)",
              opacity: 0.35,
            }}
          />

          {steps.map((item, index) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center">
              {/* Icon circle with frost glow */}
              <div className="relative mb-6">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(10,138,138,0.12) 0%, transparent 70%)",
                    transform: "scale(1.8)",
                  }}
                />
                <div
                  className="relative w-[88px] h-[88px] rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(8px)",
                    border: "1.5px solid rgba(10,138,138,0.15)",
                    boxShadow: "0 4px 24px rgba(10,138,138,0.1), 0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <item.icon
                    className="w-8 h-8"
                    style={{ color: "#1B9AAA" }}
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* Step number + time */}
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="font-bold"
                  style={{ fontSize: "15px", color: "#0A8A8A", letterSpacing: "0.05em" }}
                >
                  STEP {item.step}
                </span>
                <span
                  className="inline-flex items-center px-3 py-0.5 rounded-full"
                  style={{
                    background: "rgba(10,138,138,0.08)",
                    color: "#0A8A8A",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {item.time}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-bold mb-4"
                style={{
                  fontSize: "clamp(20px, 2vw, 24px)",
                  color: "#2D2D2D",
                  letterSpacing: "0.06em",
                }}
              >
                {item.title}
              </h3>

              {/* Bullets — card on mobile */}
              <div
                className="w-full rounded-xl md:rounded-none md:bg-transparent md:border-0 md:shadow-none md:p-0 p-5"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(10,138,138,0.12)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-2"
                      style={{ fontSize: "15px", color: "#555", lineHeight: 1.55 }}
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#0A8A8A" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow between steps on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 lg:-right-1 top-[52px] z-20">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "#0A8A8A" }}
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "#0A8A8A",
              fontSize: "15px",
              boxShadow: "0 4px 16px rgba(10,138,138,0.25)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#087878")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0A8A8A")}
          >
            Try It Risk-Free
            <ArrowRight className="w-4 h-4" />
          </a>
          <span style={{ fontSize: "13px", color: "#999" }}>
            🇨🇦 Ships Free Across Canada on Orders Over $60
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
