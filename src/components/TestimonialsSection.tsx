const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    name: "Dave M.",
    location: "Vancouver, BC",
    quote: "Cools fast, no greasy feel. Back on the ice within the hour. My hockey team swears by it.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    location: "Toronto, ON",
    quote: "I've tried every cream at Shoppers — nothing compares. My arthritis in both knees finally feels manageable through the winter.",
    rating: 5,
  },
  {
    name: "Marc T.",
    location: "Montréal, QC",
    quote: "After 12-hour shifts at the warehouse, TERRAFREEZE is the only thing that lets me sleep without shoulder pain. Merci!",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Calgary, AB",
    quote: "Ordered for my husband's back pain after shovelling. Now we both use it daily. The 180-day guarantee sealed the deal.",
    rating: 5,
  },
  {
    name: "James W.",
    location: "Halifax, NS",
    quote: "Health Canada registered was important to me. Fast shipping from within Canada too — arrived in 3 days to the East Coast.",
    rating: 5,
  },
  {
    name: "Priya S.",
    location: "Winnipeg, MB",
    quote: "The menthol cooling is incredible in the summer after long runs. My physio actually recommended it — she uses it herself!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 rounded-full bg-accent" />
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-accent">
              Real Reviews
            </span>
            <span className="w-8 h-0.5 rounded-full bg-accent" />
          </div>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(26px,3vw,42px)] leading-tight text-foreground mb-4">
            What Canadians are{" "}
            <span className="italic text-accent">saying.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Over 15,000 customers from every province trust TERRAFREEZE for daily pain relief.
          </p>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-[hsl(43,76%,46%)]" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent text-xs font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <span className="text-foreground text-sm font-medium block">{t.name}</span>
                  <span className="text-muted-foreground text-xs">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
