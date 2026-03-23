import productImg from "@/assets/terrafreeze-product.png";

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Stars = ({ size = 16 }: { size?: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className={`text-[#d4a017]`} />
    ))}
  </div>
);

const avatars = [
  { initials: "S", bg: "#1a6b9e" },
  { initials: "M", bg: "#0d3d6e" },
  { initials: "J", bg: "#2a7fb8" },
];

const pills = ["Menthol", "Arnica", "MSM", "Emu Oil", "Methyl Salicylate"];

const TerrafreezeHero = () => {
  return (
    <section className="tf-hero">
      {/* Left panel */}
      <div className="tf-hero__left">
        {/* Social proof */}
        <div className="tf-hero__reviews tf-hero__anim tf-hero__anim--d1">
          <div className="tf-hero__avatars">
            {avatars.map((a, i) => (
              <div key={i} className="tf-hero__avatar" style={{ background: a.bg }}>
                {a.initials}
              </div>
            ))}
          </div>
          <div className="tf-hero__stars-block">
            <Stars />
            <span className="tf-hero__customers-count">15,000+ Canadians</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div className="tf-hero__eyebrow tf-hero__anim tf-hero__anim--d2">
          <span className="tf-hero__eyebrow-line" />
          <span className="tf-hero__eyebrow-text">Topical Pain Relief · Health Canada Registered</span>
        </div>

        {/* Headline */}
        <h1 className="tf-hero__headline tf-hero__anim tf-hero__anim--d3">
          Targeted relief, built for{" "}
          <span className="tf-hero__headline-accent">real Canadians.</span>
        </h1>

        {/* Subtitle */}
        <p className="tf-hero__sub tf-hero__anim tf-hero__anim--d4">
          Menthol, Arnica, MSM and Emu Oil — applied where it hurts, felt where it counts.
        </p>

        {/* Pills */}
        <div className="tf-hero__pills tf-hero__anim tf-hero__anim--d4">
          {pills.map((p) => (
            <span key={p} className="tf-hero__pill">{p}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="tf-hero__cta-row tf-hero__anim tf-hero__anim--d5">
          <a href="#" className="tf-hero__btn">Try TERRAFREEZE →</a>
          <a href="#" className="tf-hero__link">See all packages</a>
        </div>

        {/* Trust */}
        <div className="tf-hero__trust tf-hero__anim tf-hero__anim--d6">
          <span className="tf-hero__trust-item">180-Day Guarantee</span>
          <span className="tf-hero__trust-dot" />
          <span className="tf-hero__trust-item">Free Shipping $60+</span>
          <span className="tf-hero__trust-dot" />
          <span className="tf-hero__trust-item">Ships from Canada</span>
        </div>
      </div>

      {/* Right panel */}
      <div className="tf-hero__right">
        <img
          src={productImg}
          alt="TERRAFREEZE pain relief cream jar"
          className="tf-hero__product-img tf-hero__anim tf-hero__anim--d3"
        />

        {/* Floating review card */}
        <div className="tf-hero__review-card">
          <div className="tf-hero__review-stars">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="tf-hero__review-star" />
            ))}
          </div>
          <p className="tf-hero__review-quote">
            "Cools fast, no greasy feel. Back on the ice."
          </p>
          <span className="tf-hero__review-attr">— Dave M., Vancouver BC</span>
        </div>
      </div>
    </section>
  );
};

export default TerrafreezeHero;
