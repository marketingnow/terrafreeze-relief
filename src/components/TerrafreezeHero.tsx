import heroBgFull from "@/assets/hero-bg-full.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

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
              {[avatar1, avatar2, avatar3].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-[hsl(0,0%,100%)] object-cover"
                  style={{ zIndex: 3 - i }}
                  width={36}
                  height={36}
                />
              ))}
            </div>
            <div className="flex flex-col gap-0.5">
              <Stars />
              <span className="text-foreground text-sm font-medium">Loved By 15,000 Canadians</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-['Playfair_Display',serif] font-bold text-[clamp(30px,4vw,54px)] leading-[1.08] text-foreground mb-5 tracking-tight">
            Finally — a pain cream <br /> built for{" "}
            <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">
              Canadian life.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-foreground text-lg leading-relaxed mb-8 max-w-lg font-medium">
            Our 18-ingredient cooling formula delivers fast-acting, targeted comfort — working right at the source for sore joints, tight muscles, and everyday aches.
          </p>

          {/* CTA */}
          <div className="mb-6">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 w-full sm:max-w-md px-8 py-4 bg-primary text-primary-foreground font-bold text-lg tracking-wide rounded-md hover:brightness-110 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
            >
              TRY TERRAFREEZE TODAY →
            </a>
          </div>

          {/* Trust */}
          <p className="text-sm font-medium text-foreground">
            180-Day Empty Jar Guarantee. Love it or we'll refund every penny.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TerrafreezeHero;
