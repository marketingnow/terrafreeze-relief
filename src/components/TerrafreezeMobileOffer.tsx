import { useState } from "react";
import { Check, Package, Truck, ShieldCheck, Flame } from "lucide-react";
import jarImg from "@/assets/terrafreeze-jar.png";
import threePackImg from "@/assets/terrafreeze-3pack.png";
import sixPackImg from "@/assets/terrafreeze-6pack.png";

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

type Qty = {
  id: string;
  qty: string;
  price: number;
  priceLabel: string;
  perJar: string;
  badge?: string;
  badgeColor?: string;
  jars: number;
  checkoutUrl: string;
};

const QUANTITIES: Qty[] = [
  {
    id: "starter",
    qty: "1 Jar",
    price: 29.95,
    priceLabel: "$29.95",
    perJar: "$29.95 each",
    jars: 1,
    checkoutUrl: "https://terrafreeze.ca/checkout/?add-to-cart=677",
  },
  {
    id: "popular",
    qty: "3 Jars",
    price: 49.0,
    priceLabel: "$49.00",
    perJar: "$16.33 each",
    badge: "BEST SELLER",
    badgeColor: "bg-[hsl(207,76%,24%)]",
    jars: 3,
    checkoutUrl: "https://terrafreeze.ca/checkout/?add-to-cart=7361",
  },
  {
    id: "best",
    qty: "6 Jars",
    price: 89.0,
    priceLabel: "$89.00",
    perJar: "$14.83 each",
    badge: "BEST VALUE",
    badgeColor: "bg-[hsl(43,76%,46%)]",
    jars: 6,
    checkoutUrl: "https://terrafreeze.ca/checkout/?add-to-cart=7575",
  },
];

const TerrafreezeMobileOffer = () => {
  const [selectedQty, setSelectedQty] = useState<string>("popular");
  

  const current = QUANTITIES.find((q) => q.id === selectedQty) ?? QUANTITIES[1];

  return (
    <section
      className="md:hidden w-full font-['Plus_Jakarta_Sans',sans-serif]"
      style={{ backgroundColor: "hsl(200,20%,98%)" }}
    >
      <div className="max-w-md mx-auto px-5 py-10">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="text-[26px] font-extrabold text-[hsl(207,76%,24%)] tracking-tight">
            TERRAFREEZE™
          </h2>
          <div className="flex items-center justify-center gap-2 mt-1.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-[hsl(43,76%,46%)]" />
              ))}
            </div>
            <span className="text-[14px] text-[hsl(200,15%,30%)]">2,400+ Reviews</span>
          </div>
        </div>

        {/* Quantity selector */}
        <p className="text-[15px] font-semibold text-foreground mb-3">Select quantity:</p>
        <div className="grid grid-cols-3 gap-2.5 mb-7">
          {QUANTITIES.map((q) => {
            const isActive = selectedQty === q.id;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setSelectedQty(q.id)}
                className={`relative rounded-xl border-2 p-2 pt-3 bg-white transition-all ${
                  isActive
                    ? "border-[hsl(207,76%,24%)] bg-[hsl(200,30%,96%)]"
                    : "border-[hsl(200,20%,88%)]"
                }`}
              >
                {q.badge && (
                  <span
                    className={`absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[9px] font-bold tracking-wider whitespace-nowrap text-white ${q.badgeColor}`}
                  >
                    {q.badge}
                  </span>
                )}
                <div className="relative h-32 mb-2 flex items-center justify-center overflow-hidden">
                  {q.jars === 1 && (
                    <img src={jarImg} alt="" className="max-h-full max-w-full object-contain" />
                  )}
                  {q.jars === 3 && (
                    <img src={threePackImg} alt="" className="max-h-full max-w-full object-contain scale-110" />
                  )}
                  {q.jars === 6 && (
                    <img src={sixPackImg} alt="" className="max-h-full max-w-full object-contain scale-110" />
                  )}
                </div>
                <p className="text-[14px] font-bold text-foreground text-center">{q.qty}</p>
                <p className="text-[11px] text-[hsl(200,15%,40%)] text-center">{q.perJar}</p>
              </button>
            );
          })}
        </div>

        {/* One Time */}
        <p className="text-[15px] font-semibold text-foreground mb-3">
          Select your purchase type:
        </p>
        <div className="w-full rounded-xl border-2 border-[hsl(207,76%,24%)] bg-[hsl(200,30%,96%)] p-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full border-2 border-[hsl(207,76%,24%)] bg-[hsl(207,76%,24%)] flex-shrink-0 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white" />
            </span>
            <span className="text-[16px] font-semibold text-foreground">One Time</span>
            <span className="ml-auto text-[16px] font-bold text-foreground">
              {current.priceLabel}
            </span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={current.checkoutUrl}
          className="block text-center w-full px-6 py-4 bg-[hsl(207,76%,24%)] text-white font-extrabold text-[18px] tracking-wide rounded-md hover:brightness-110 transition-all active:scale-[0.98]"
        >
          ADD TO CART — {current.priceLabel}
        </a>

        {/* Trust icons */}
        <div className="grid grid-cols-3 gap-3 mt-5 mb-4">
          <div className="flex flex-col items-center text-center gap-1.5">
            <Package className="w-6 h-6 text-[hsl(207,76%,24%)]" />
            <span className="text-[11px] leading-tight text-[hsl(200,15%,30%)]">
              Free shipping on orders $60+
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-1.5">
            <Truck className="w-6 h-6 text-[hsl(207,76%,24%)]" />
            <span className="text-[11px] leading-tight text-[hsl(200,15%,30%)]">
              Ships from Canada 1-2 days
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-1.5">
            <ShieldCheck className="w-6 h-6 text-[hsl(207,76%,24%)]" />
            <span className="text-[11px] leading-tight text-[hsl(200,15%,30%)]">
              180-Day Money-Back Guarantee
            </span>
          </div>
        </div>

        {/* Urgency */}
        <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[hsl(43,90%,94%)] border border-[hsl(43,76%,80%)]">
          <Flame className="w-4 h-4 text-[hsl(20,90%,50%)] flex-shrink-0" />
          <span className="text-[13px] font-semibold text-[hsl(20,40%,25%)]">
            Selling fast — 287 orders in the last 24 hours!
          </span>
        </div>
      </div>
    </section>
  );
};

export default TerrafreezeMobileOffer;
