import { Droplets, Layers, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Droplets,
    step: "STEP 01",
    time: "5 seconds",
    title: "APPLY",
    bullets: [
      "Massage a small amount onto the sore area",
      "Absorbs quickly with no greasy residue",
      "Won't stain skin or clothing",
      "Cooling comfort starts on contact",
    ],
  },
  {
    icon: Layers,
    step: "STEP 02",
    time: "2 minutes",
    title: "PENETRATE",
    bullets: [
      "Emu Oil helps carry key ingredients deeper",
      "Menthol, Arnica, and MSM reach the target area",
      "Supports joints, muscles, and tendons directly",
      "Goes beyond the surface where basic creams stop",
    ],
  },
  {
    icon: ShieldCheck,
    step: "STEP 03",
    time: "Hours",
    title: "RELIEF",
    bullets: [
      "Feel cooling relief that lasts for hours",
      "Stay active throughout the day",
      "Simple topical support with no pills required",
      "Reapply as needed for continued comfort",
    ],
  },
];

const HowItWorksSection = () => {
  return (
    <section
      className="w-full py-20 md:py-24"
      style={{
        background: "linear-gradient(180deg, #F4F8FB 0%, #EDF3F8 50%, #F8FAFB 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="font-['Playfair_Display',serif] font-bold mb-3"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)", color: "#2D2D2D" }}
          >
            How <span style={{ color: "#0A8A8A" }}>TERRAFREEZE™</span> Works
          </h2>
          <p style={{ fontSize: "16px", color: "#888", lineHeight: 1.6 }}>
            Three simple steps to fast-acting, long-lasting pain relief.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-[52px] left-[20%] right-[20%] z-0"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, #B8CDD9 15%, #B8CDD9 85%, transparent)",
            }}
          />

          {steps.map((item) => (
            <div
              key={item.step}
              className="relative z-10 rounded-2xl p-7 flex flex-col items-center text-center"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid #DFE8EE",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* Icon */}
              <div
                className="w-[76px] h-[76px] rounded-full flex items-center justify-center mb-5"
                style={{
                  background: "#EFF5F9",
                  border: "1px solid #D9E4EC",
                }}
              >
                <item.icon
                  className="w-7 h-7"
                  style={{ color: "#1B9AAA" }}
                  strokeWidth={1.6}
                />
              </div>

              {/* Step + timing pill */}
              <div className="flex items-center gap-2.5 mb-2">
                <span
                  className="font-semibold tracking-wider"
                  style={{ fontSize: "12px", color: "#0A8A8A", letterSpacing: "0.08em" }}
                >
                  {item.step}
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full"
                  style={{
                    background: "#E8EFF4",
                    color: "#5A7A8A",
                    fontSize: "11px",
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
                  fontSize: "20px",
                  color: "#2D2D2D",
                  letterSpacing: "0.04em",
                }}
              >
                {item.title}
              </h3>

              {/* Bullets */}
              <ul className="space-y-2 text-left w-full">
                {item.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    className="flex items-start gap-2.5"
                    style={{ fontSize: "14px", color: "#555", lineHeight: 1.5 }}
                  >
                    <span
                      className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                      style={{ background: "#A8C4D0" }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-2.5">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-white transition-colors"
            style={{
              background: "#0A8A8A",
              fontSize: "15px",
              boxShadow: "0 2px 10px rgba(10,138,138,0.2)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#087878")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0A8A8A")}
          >
            Try It Risk-Free
          </a>
          <span style={{ fontSize: "12px", color: "#999" }}>
            🇨🇦 Ships Free Across Canada on Orders Over $60
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
