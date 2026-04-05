import { Droplets, Layers, ShieldCheck, ChevronRight } from "lucide-react";

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
      className="w-full py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #071821 0%, #0B2430 100%)",
      }}
    >
      {/* Subtle icy glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(25,191,234,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(25,191,234,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="font-['Playfair_Display',serif] font-bold mb-4"
            style={{ fontSize: "clamp(30px, 3.5vw, 46px)", color: "#F5FBFF" }}
          >
            How <span style={{ color: "#19BFEA" }}>TERRAFREEZE™</span> Works
          </h2>
          <p style={{ fontSize: "16px", color: "#B9CBD6", lineHeight: 1.6 }}>
            Three simple steps to fast-acting, long-lasting pain relief.
          </p>
        </div>

        {/* Steps row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative">
          {/* Connector line — desktop */}
          <div
            className="hidden md:block absolute top-[44px] left-[16%] right-[16%] z-0"
            style={{
              height: "1px",
              background: "rgba(120, 210, 235, 0.22)",
            }}
          />

          {steps.map((item, idx) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
              {/* Icon circle */}
              <div className="relative mb-6">
                <div
                  className="w-[88px] h-[88px] rounded-full flex items-center justify-center"
                  style={{ background: "#0F2A36" }}
                >
                  <item.icon
                    className="w-8 h-8"
                    style={{ color: "#19BFEA" }}
                    strokeWidth={1.5}
                  />
                </div>
                {/* Glow behind icon */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    boxShadow: "0 0 30px rgba(25,191,234,0.15)",
                  }}
                />
              </div>

              {/* Arrow connector between icons — desktop */}
              {idx < 2 && (
                <div
                  className="hidden md:flex absolute top-[34px] -right-[28px] lg:-right-[32px] z-20"
                  style={{ color: "rgba(120, 210, 235, 0.35)" }}
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                </div>
              )}

              {/* Step + time */}
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="font-semibold tracking-wider uppercase"
                  style={{ fontSize: "12px", color: "#19BFEA", letterSpacing: "0.1em" }}
                >
                  {item.step}
                </span>
                <span
                  className="px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(25, 191, 234, 0.12)",
                    color: "#66E0FF",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {item.time}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-bold mb-5"
                style={{
                  fontSize: "22px",
                  color: "#F5FBFF",
                  letterSpacing: "0.05em",
                }}
              >
                {item.title}
              </h3>

              {/* Bullets */}
              <ul className="space-y-2.5 text-left w-full max-w-[280px]">
                {item.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    className="flex items-start gap-2.5"
                    style={{ fontSize: "14px", color: "#B9CBD6", lineHeight: 1.55 }}
                  >
                    <span
                      className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                      style={{ background: "#58D2EE" }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 flex flex-col items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-lg font-medium text-white transition-all"
            style={{
              background: "linear-gradient(135deg, #19BFEA, #0F8FA8)",
              fontSize: "15px",
              boxShadow: "0 4px 20px rgba(25,191,234,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 28px rgba(25,191,234,0.4)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(25,191,234,0.25)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Try It Risk-Free
          </a>
          <span style={{ fontSize: "12px", color: "#7A9BAA" }}>
            🇨🇦 Ships Free Across Canada on Orders Over $60
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
