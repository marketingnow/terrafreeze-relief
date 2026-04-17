import heroBgFull from "@/assets/hero-bg-full.jpg";

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Stars = ({ size = "w-5 h-5" }: { size?: string }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className={`${size} text-[hsl(43,76%,46%)]`} />
    ))}
  </div>
);

const TerrafreezeHero = () => {
  return (
    <section className="relative w-full">
      {/* MOBILE LAYOUT (<md): full-bleed background, content overlaid, fits viewport */}
      <div
        className="md:hidden relative w-full min-h-[100svh] flex flex-col bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${heroBgFull})`,
          backgroundSize: "150% auto",
          backgroundPosition: "center 58%",
          backgroundColor: "hsl(200,22%,91%)",
        }}
      >
        {/* Top fade for headline legibility */}
        <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-[hsl(200,25%,93%)] via-[hsl(200,25%,93%)]/75 to-transparent pointer-events-none" />
        {/* Bottom fade for CTA legibility */}
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[hsl(200,25%,93%)] via-[hsl(200,25%,93%)]/88 to-transparent pointer-events-none" />

        {/* Top: stars + headline */}
        <div className="relative z-10 px-5 pt-6 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-2.5">
            <Stars size="w-4 h-4" />
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12.5px] font-medium tracking-tight text-foreground">
              4.9/5 — 2,400+ verified reviews
            </span>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] leading-[1.05] text-foreground tracking-tight">
            <span>Finally — A Pain Cream Built For </span>
            <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">
              Canadian Life.
            </span>
          </h1>
        </div>

        {/* Spacer letting the product (background image) show through */}
        <div className="flex-1 min-h-[200px]" />

        {/* Bottom: subtitle + CTA */}
        <div className="relative z-10 px-5 pb-6 text-center">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-foreground text-[15.5px] leading-snug mb-4 font-medium">
            Our 18-ingredient cooling formula delivers fast-acting, targeted comfort for sore joints, tight muscles, and everyday aches.
          </p>
          <a
            href="#"
            className="font-['Plus_Jakarta_Sans',sans-serif] inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground font-extrabold text-[18px] tracking-wide rounded-md hover:brightness-110 transition-all active:scale-[0.97]"
          >
            TRY TERRAFREEZE TODAY →
          </a>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12.5px] font-medium text-foreground mt-2.5">
            180-Day Guarantee. Love it or we'll refund every penny.
          </p>
        </div>
      </div>

      {/* DESKTOP / TABLET LAYOUT (md+): original overlay design */}
      <div
        className="hidden md:flex relative w-full min-h-[580px] lg:min-h-[620px] items-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBgFull})`, backgroundPosition: "right bottom", backgroundSize: "85% auto" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(200,20%,90%)]/95 via-background/40 via-40% to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-1.5 mb-3">
              <Stars />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-thin tracking-tight text-[hsl(0,0%,0%)]">4.9/5 — 2,400+ verified reviews</span>
            </div>

            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[clamp(30px,4vw,54px)] leading-[1.08] text-foreground mb-5 tracking-tight">
              <span>Finally — A Pain Cream</span>
              <br />
              <span>{"Built For "}</span>
              <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">
                Canadian Life.
              </span>
            </h1>

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-foreground text-[18px] leading-snug mb-8 max-w-lg font-medium">
              Our 18-ingredient cooling formula delivers fast-acting, targeted comfort — working right at the source for sore joints, tight muscles, and everyday aches.
            </p>

            <div className="mb-2 w-full sm:max-w-md">
              <a
                href="#"
                className="font-['Plus_Jakarta_Sans',sans-serif] inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary text-primary-foreground font-extrabold text-[25px] tracking-wide rounded-md hover:brightness-110 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
              >
                TRY TERRAFREEZE TODAY →
              </a>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm font-medium text-foreground text-center mt-3">
                180-Day Guarantee. Love it or we'll refund every penny.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerrafreezeHero;
