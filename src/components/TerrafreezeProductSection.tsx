import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import whatsInsideImg from "@/assets/terrafreeze-whats-inside.jpg";
import jarImg from "@/assets/terrafreeze-jar.png";
import threePackImg from "@/assets/terrafreeze-3pack.png";
import sixPackImg from "@/assets/terrafreeze-6pack.png";

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const MAIN_IMAGE = jarImg;
const THUMBS = [
  jarImg,
  whatsInsideImg,
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
  jars: number;
  checkoutUrl: string;
};

const PACKAGES: Pkg[] = [
  {
    id: "starter",
    tier: "Starter",
    qty: "1 Jar",
    price: 29.95,
    priceLabel: "$29.95",
    perJar: "Reg. $69.00",
    savings: "Save $39.05",
    jars: 1,
    checkoutUrl: "https://terrafreeze.ca/?add-to-cart=677",
  },
  {
    id: "popular",
    badge: "MOST POPULAR",
    tier: "Most Popular",
    qty: "3 Jars",
    price: 49.00,
    priceLabel: "$49.00",
    perJar: "Reg. $119.00",
    savings: "Save $70.00",
    jars: 3,
    checkoutUrl: "https://terrafreeze.ca/?add-to-cart=7361",
  },
  {
    id: "best",
    badge: "BEST VALUE",
    tier: "Best Value",
    qty: "6 Jars",
    price: 89.00,
    priceLabel: "$89.00",
    perJar: "Reg. $149.00",
    savings: "Save $60.00",
    jars: 6,
    checkoutUrl: "https://terrafreeze.ca/?add-to-cart=7575",
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
              TERRAFREEZE Relief Cream
            </h2>

            <blockquote className="tf-product__quote hidden md:block border-l-4 border-[hsl(202,72%,35%)] pl-4 py-1 mb-6">
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
                    <div className="flex flex-col items-center text-center">
                      <div className="h-24 w-full flex items-end justify-center mb-2">
                        {pkg.jars === 1 && (
                          <img src={jarImg} alt="1 jar" className="h-24 w-auto object-contain" />
                        )}
                        {pkg.jars === 3 && (
                          <img src={threePackImg} alt="3 jars" className="h-24 w-auto object-contain" />
                        )}
                        {pkg.jars === 6 && (
                          <img src={sixPackImg} alt="6 jars" className="h-24 w-auto object-contain" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                            isActive ? "border-[hsl(207,76%,24%)] bg-[hsl(207,76%,24%)]" : "border-[hsl(200,20%,70%)]"
                          }`}
                        >
                          {isActive && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                        </span>
                        <p className="text-[13px] font-bold text-foreground">{pkg.qty}</p>
                      </div>
                      <p className="text-[16px] font-extrabold text-[hsl(207,76%,24%)]">{pkg.priceLabel}</p>
                      <p className="text-[11px] text-[hsl(200,10%,45%)] line-through">{pkg.perJar}</p>
                      {pkg.savings && (
                        <p className="text-[11px] font-semibold text-[hsl(142,55%,35%)] mt-1">{pkg.savings}</p>
                      )}
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

            <a
              href={current.checkoutUrl}
              className="tf-product__cta block text-center w-full px-6 py-4 bg-[hsl(207,76%,24%)] text-white font-extrabold text-[18px] md:text-[22px] tracking-wide rounded-md hover:brightness-110 transition-all active:scale-[0.98]"
            >
              ADD TO CART • {current.priceLabel}
            </a>

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
