import { ArrowRight } from "lucide-react";

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    name: "Dave M.",
    location: "Vancouver, BC",
    quote: "Cools fast, no greasy feel. Back on the ice within the hour. My entire hockey team now orders it by the case.",
    rating: 5,
    tag: "Athlete",
    verified: true,
  },
  {
    name: "Sarah L.",
    location: "Toronto, ON",
    quote: "I've tried every cream at Shoppers — nothing compares. My arthritis in both knees finally feels manageable through the winter.",
    rating: 5,
    tag: "Arthritis",
    verified: true,
  },
  {
    name: "Marc T.",
    location: "Montréal, QC",
    quote: "After 12-hour shifts at the warehouse, TERRAFREEZE is the only thing that lets me sleep without shoulder pain. Merci!",
    rating: 5,
    tag: "Back & Shoulder",
    verified: true,
  },
  {
    name: "Linda K.",
    location: "Calgary, AB",
    quote: "Ordered for my husband's back pain after shovelling. Now we both use it daily. The 180-day guarantee sealed the deal for us.",
    rating: 5,
    tag: "Daily Use",
    verified: true,
  },
  {
    name: "James W.",
    location: "Halifax, NS",
    quote: "Health Canada registered was important to me. Fast shipping from within Canada too — arrived in 3 days to the East Coast.",
    rating: 5,
    tag: "Trust & Quality",
    verified: true,
  },
  {
    name: "Priya S.",
    location: "Winnipeg, MB",
    quote: "The menthol cooling is incredible after long runs. My physio actually recommended it — she uses it herself!",
    rating: 5,
    tag: "Runner",
    verified: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-[hsl(43,76%,46%)]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">4.9/5</span>
              <span className="text-sm text-muted-foreground">from 2,400+ reviews</span>
            </div>
            <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(28px,3.5vw,46px)] leading-[1.1] text-foreground mb-3">
              Don't take our word for it.{" "}
              <br className="hidden sm:block" />
              <span className="italic bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Take theirs.
              </span>
            </h2>
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
              Real reviews from real Canadians — from Halifax to Vancouver. Verified purchasers only.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20 shrink-0"
          >
            Shop Now — Risk Free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Review grid — staggered masonry-like */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.1)] ${i === 0 || i === 5 ? 'sm:translate-y-0' : i === 1 || i === 3 ? 'lg:translate-y-4' : ''}`}
            >
              {/* Top row: stars + tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <StarIcon key={j} className="w-3.5 h-3.5 text-[hsl(43,76%,46%)]" />
                  ))}
                </div>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-accent/10 text-accent">
                  {t.tag}
                </span>
              </div>

              <p className="text-foreground text-sm leading-relaxed mb-5">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/20 to-primary/15 flex items-center justify-center text-accent text-xs font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <span className="text-foreground text-sm font-semibold block leading-tight">{t.name}</span>
                    <span className="text-muted-foreground text-xs">{t.location}</span>
                  </div>
                </div>
                {t.verified && (
                  <span className="text-[10px] text-accent font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom social proof */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border">
            <span className="flex -space-x-2">
              {["bg-accent/30", "bg-primary/30", "bg-accent/20", "bg-primary/20"].map((bg, i) => (
                <span key={i} className={`w-7 h-7 rounded-full ${bg} border-2 border-card flex items-center justify-center text-[10px] font-bold text-accent`}>
                  {["D", "S", "M", "L"][i]}
                </span>
              ))}
            </span>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">15,000+</span> Canadians trust TERRAFREEZE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
