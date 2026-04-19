import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const MAIN_IMAGE = "https://terrafreeze.ca/wp-content/uploads/terrafreeze-jar-main.png";
const THUMBS = [
  "https://terrafreeze.ca/wp-content/uploads/terrafreeze-jar-main.png",
  "https://terrafreeze.ca/wp-content/uploads/terrafreeze-jar-side.png",
  "https://terrafreeze.ca/wp-content/uploads/terrafreeze-ingredients-flat.png",
  "https://terrafreeze.ca/wp-content/uploads/terrafreeze-application.png",
  "https://terrafreeze.ca/wp-content/uploads/terrafreeze-package-bundle.png",
];

type Pkg = {
  id: string;
  badge?: string;
  tier: string;
  qty: string;
  price: number;
  priceLabel: string;
  perJar: string;
  savings?: string;
};

const PACKAGES: Pkg[] = [
  {
    id: "starter",
    tier: "Starter",
    qty: "1 Jar",
    price: 59.99,
    priceLabel: "$59.99",
    perJar: "$59.99/jar",
  },
  {
    id: "popular",
    badge: "MOST POPULAR",
    tier: "Most Popular",
    qty: "3 Jars",
    price: 149.99,
    priceLabel: "$149.99",
    perJar: "$49.99/jar",
    savings: "Save $29.98",
  },
  {
    id: "best",
    badge: "BEST VALUE",
    tier: "Best Value",
    qty: "6 Jars",
    price: 269.99,
    priceLabel: "$269.99",
    perJar: "$44.99/jar",
    savings: "Save $89.95",
  },
];

const FAQS = [
  {
    q: "Product Information & Specifications",
    a: "TERRAFREEZE Extra Strength Pain Relief Cream — 100g jar. 18 active ingredients including Menthol (10%), Arnica, MSM, Emu Oil, and Methyl Salicylate. Health Canada NPN registered. Made in Canada.",
  },
  {
    q: "Shipping & Returns",
    a: "Free shipping on Canadian orders over $60. Ships from Canada within 1-2 business days. 180-day money-back guarantee — return the empty jar for a full refund if you're not satisfied.",
  },
  {
    q: "How do I use it?",
    a: "Apply a small amount to the affected area and massage gently until absorbed. Use up to 4 times daily. For best results, use consistently for at least 60 days.",
  },
  {
    q: "Is it safe to use with other medications?",
    a: "TERRAFREEZE is a topical cream and generally safe alongside oral medications. As with any pain relief product, consult your healthcare professional if you have concerns or pre-existing conditions.",
  },
];

const TerrafreezeProductSection = () => {
  const [activeImage, setActiveImage] = useState(MAIN_IMAGE);
  const [selectedPkg, setSelectedPkg] = useState<string>("popular");

  const current = PACKAGES.find((p) => p.id === selectedPkg) ?? PACKAGES[1];

  return (
    <section
      className="tf-product-wrapper w-full font-['Plus_Jakarta_Sans',sans-serif]"
      style={{ backgroundColor: "hsl(200,20%,98%)" }}
    >
      <div className="tf-product max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="tf-product__grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* LEFT — Gallery */}
          <div className="tf-product__gallery">
            <div className="tf-product__main-image rounded-2xl bg-white border border-[hsl(200,20%,90%)] overflow-hidden aspect-square flex items-center justify-center p-6">
              <img
                src={activeImage}
                alt="TERRAFREEZE Extra Strength Pain Relief Cream"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="tf-product__thumbs grid grid-cols-5 gap-2 md:gap-3 mt-3 md:mt-4">
              {THUMBS.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(src)}
                  className={`tf-product__thumb aspect-square rounded-lg overflow-hidden bg-white border-2 p-1 transition-colors ${
                    activeImage === src
                      ? "border-[hsl(207,76%,24%)]"
                      : "border-[hsl(200,20%,88%)] hover:border-[hsl(202,72%,35%)]"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={src} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Details */}
          <div className="tf-product__details">
            <p className="tf-product__eyebrow text-[12px] font-semibold tracking-[0.12em] uppercase text-[hsl(202,72%,35%)] mb-3">
              Made in Canada • Health Canada Registered
            </p>

            <h2 className="tf-product__title text-[28px] md:text-[34px] lg:text-[38px] font-extrabold leading-[1.1] tracking-tight text-[hsl(207,76%,24%)] mb-4">
              TERRAFREEZE Extra Strength Pain Relief Cream
            </h2>

            <div className="tf-product__price-row flex items-baseline gap-3 mb-5">
              <span className="text-[28px] md:text-[32px] font-extrabold text-foreground">$59.99</span>
              <span className="text-[18px] md:text-[20px] line-through text-[hsl(200,10%,55%)]">$79.99</span>
            </div>

            <blockquote className="tf-product__quote border-l-4 border-[hsl(202,72%,35%)] pl-4 py-1 mb-6">
              <p className="italic text-[16px] md:text-[17px] leading-snug text-foreground">
                "I've tried so many creams for my arthritis and nothing has worked like TERRAFREEZE. I can finally enjoy gardening again without constant pain in my hands."
              </p>
              <footer className="text-[13px] text-[hsl(200,10%,40%)] mt-2">— Sarah M., Toronto ON</footer>
            </blockquote>

            <p className="tf-product__label text-[14px] font-bold uppercase tracking-wider text-foreground mb-3">
              Choose Your Package
            </p>

            <div className="tf-product__packages grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              {PACKAGES.map((pkg) => {
                const isActive = selectedPkg === pkg.id;
                const isMiddle = pkg.id === "popular";
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPkg(pkg.id)}
                    className={`tf-product__package relative text-left rounded-xl border-2 p-3 pt-5 bg-white transition-colors ${
                      isActive
                        ? "border-[hsl(207,76%,24%)] shadow-md"
                        : isMiddle
                          ? "border-[hsl(202,72%,35%)]"
                          : "border-[hsl(200,20%,88%)]"
                    } ${isMiddle ? "sm:-translate-y-1" : ""}`}
                  >
                    {pkg.badge && (
                      <span
                        className={`tf-product__badge absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider whitespace-nowrap ${
                          pkg.id === "popular"
                            ? "bg-[hsl(207,76%,24%)] text-white"
                            : "bg-[hsl(43,76%,46%)] text-white"
                        }`}
                      >
                        {pkg.badge}
                      </span>
                    )}
                    <div className="flex items-start gap-2">
                      <span
                        className={`mt-0.5 w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                          isActive ? "border-[hsl(207,76%,24%)] bg-[hsl(207,76%,24%)]" : "border-[hsl(200,20%,70%)]"
                        }`}
                      >
                        {isActive && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold text-foreground">{pkg.qty}</p>
                        <p className="text-[16px] font-extrabold text-[hsl(207,76%,24%)] mt-0.5">{pkg.priceLabel}</p>
                        <p className="text-[11px] text-[hsl(200,10%,45%)]">{pkg.perJar}</p>
                        {pkg.savings && (
                          <p className="text-[11px] font-semibold text-[hsl(142,55%,35%)] mt-1">{pkg.savings}</p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="tf-product__subtext text-[12px] italic text-[hsl(200,10%,45%)] mb-4">
              Our customers see the best results after using TERRAFREEZE consistently for 60 days.
            </p>

            <div className="tf-product__rating flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-[hsl(43,76%,46%)]" />
                ))}
              </div>
              <span className="text-[13px] font-medium text-foreground">4.9/5 — 2,400+ verified reviews</span>
            </div>

            <button
              type="button"
              className="tf-product__cta w-full px-6 py-4 bg-[hsl(207,76%,24%)] text-white font-extrabold text-[18px] md:text-[22px] tracking-wide rounded-md hover:brightness-110 transition-all active:scale-[0.98]"
            >
              ADD TO CART • {current.priceLabel}
            </button>

            <div className="tf-product__value-props flex flex-col sm:flex-row gap-2 sm:gap-6 mt-3 mb-6">
              <span className="flex items-center gap-2 text-[13px] text-foreground">
                <Check className="w-4 h-4 text-[hsl(142,55%,35%)]" strokeWidth={3} />
                Free shipping on orders over $60
              </span>
              <span className="flex items-center gap-2 text-[13px] text-foreground">
                <Check className="w-4 h-4 text-[hsl(142,55%,35%)]" strokeWidth={3} />
                180-day money-back guarantee
              </span>
            </div>

            <Accordion type="single" collapsible className="tf-product__accordion border-t border-[hsl(200,20%,88%)]">
              {FAQS.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-[hsl(200,20%,88%)]">
                  <AccordionTrigger className="text-[15px] font-semibold text-foreground hover:no-underline py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] leading-relaxed text-[hsl(200,15%,30%)]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerrafreezeProductSection;
