import heroBgFull from "@/assets/hero-bg-full.jpg";

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className="w-4 h-4 text-[hsl(43,76%,46%)]" />
    ))}
  </div>
);

const pills = ["Menthol", "Arnica", "MSM", "Emu Oil", "Methyl Salicylate"];

const TerrafreezeHero = () => {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden">
      {/* Full-bleed background with product baked in */}
      <img
        src={heroBgFull}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-right"
        width={1920}
        height={1080}
      />

      {/* Content — left side only, product is in the background image */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-xl">
          {/* Social proof */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-2.5">
              {[
                { initials: "S", bg: "hsl(202,72%,35%)" },
                { initials: "M", bg: "hsl(207,76%,24%)" },
                { initials: "J", bg: "hsl(202,60%,45%)" },
              ].map((a, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[hsl(0,0%,100%)] flex items-center justify-center text-[hsl(0,0%,100%)] text-xs font-medium"
                  style={{ background: a.bg, zIndex: 3 - i }}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-0.5">
              <Stars />
              <span className="text-muted-foreground text-xs">15,000+ Canadians</span>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-0.5 rounded-full bg-accent" />
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
              Topical Pain Relief · Health Canada Registered
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['Playfair_Display',serif] font-bold text-[clamp(30px,4vw,54px)] leading-[1.08] text-foreground mb-5 tracking-tight">
            Targeted relief, built for{" "}
            <span className="italic bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">
              real Canadians.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-lg">
            Menthol, Arnica, MSM and Emu Oil — applied where it hurts, felt where it counts.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {pills.map((p) => (
              <span
                key={p}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-accent/35 bg-[hsl(0,0%,100%,0.6)] backdrop-blur-sm text-accent text-xs font-medium"
              >
                {p}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium text-[15px] rounded-md hover:brightness-110 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Try TERRAFREEZE →
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:text-primary transition-colors"
            >
              See all packages
            </a>
          </div>

          {/* Trust */}
          <div className="flex items-center text-xs text-muted-foreground">
            <span>180-Day Guarantee</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mx-2.5" />
            <span>Free Shipping $60+</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mx-2.5" />
            <span>Ships from Canada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerrafreezeHero;
