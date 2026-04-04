const logos = [
  { name: "Health Canada", text: "Health Canada" },
  { name: "CBC", text: "CBC" },
  { name: "The Globe and Mail", text: "The Globe and Mail" },
  { name: "CTV", text: "CTV" },
  { name: "Hockey Canada", text: "Hockey Canada" },
  { name: "Canadian Running", text: "Canadian Running" },
];

const AsSeenInSection = () => {
  return (
    <section className="w-full py-14 lg:py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <p className="text-center text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground mb-10">
          Trusted across Canada
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <span className="font-['Playfair_Display',serif] font-bold text-lg lg:text-xl tracking-tight whitespace-nowrap">
                {logo.text}
              </span>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-border">
          {[
            { label: "Health Canada NPN Registered", icon: "🍁" },
            { label: "180-Day Money-Back Guarantee", icon: "🛡️" },
            { label: "Made & Shipped from Canada", icon: "📦" },
            { label: "Over 15,000 Canadian Customers", icon: "⭐" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-lg">{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenInSection;
