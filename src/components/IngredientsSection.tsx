import { ShieldCheck, Leaf, Beaker, Award, Truck, MapPin } from "lucide-react";
import mentholImg from "@/assets/ingredient-menthol.jpg";
import arnicaImg from "@/assets/ingredient-arnica.jpg";
import aloeVeraImg from "@/assets/ingredient-aloe-vera.jpg";
import emuOilImg from "@/assets/ingredient-emu-oil.jpg";
import turmericImg from "@/assets/ingredient-turmeric.jpg";
import gingerImg from "@/assets/ingredient-ginger.jpg";
import chamomileImg from "@/assets/ingredient-chamomile.jpg";
import msmImg from "@/assets/ingredient-msm.jpg";

const ingredients = [
  {
    name: "Menthol 10%",
    tag: "Cooling Relief",
    img: mentholImg,
    desc: "Delivers an instant cooling sensation that calms inflamed tissue and eases muscle tension on contact.",
    benefit: "Instant cooling action",
  },
  {
    name: "Arnica Montana",
    tag: "Bruise & Swelling",
    img: arnicaImg,
    desc: "A time-tested botanical used by Canadian athletes and physiotherapists to reduce bruising and swelling naturally.",
    benefit: "Trusted by athletes",
  },
  {
    name: "Aloe Vera",
    tag: "Skin Soothing",
    img: aloeVeraImg,
    desc: "Soothes and hydrates skin while enhancing absorption of active ingredients for deeper, longer-lasting relief.",
    benefit: "Boosts absorption",
  },
  {
    name: "Emu Oil",
    tag: "Deep Penetration",
    img: emuOilImg,
    desc: "Deep-penetrating carrier that drives active ingredients beneath the skin — right where pain lives.",
    benefit: "Reaches deep tissue",
  },
  {
    name: "Turmeric",
    tag: "Anti-Inflammatory",
    img: turmericImg,
    desc: "Rich in curcumin, a powerful natural compound that calms inflammation and supports joint comfort.",
    benefit: "Calms inflammation",
  },
  {
    name: "Ginger",
    tag: "Warming Comfort",
    img: gingerImg,
    desc: "Warming root extract that helps ease stiffness and soothe sore, overworked muscles.",
    benefit: "Eases stiffness",
  },
  {
    name: "Chamomile",
    tag: "Gentle Recovery",
    img: chamomileImg,
    desc: "Gentle botanical that calms irritated skin and supports recovery for sensitive areas.",
    benefit: "Safe for sensitive skin",
  },
  {
    name: "MSM",
    tag: "Joint Mobility",
    img: msmImg,
    desc: "Trusted sulfur compound that supports joint mobility, flexibility, and faster muscle recovery.",
    benefit: "Supports recovery",
  },
];

const badges = [
  { icon: ShieldCheck, label: "Health Canada NPN Registered" },
  { icon: Leaf, label: "Natural Ingredients" },
  { icon: Truck, label: "Free Shipping $60+" },
  { icon: MapPin, label: "Made in Canada" },
];

const IngredientsSection = () => {
  return (
    <section className="w-full pt-8 pb-20 lg:pt-10 lg:pb-28 bg-[hsl(200,20%,88%)] relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4h-4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[50px] leading-[1.1] text-foreground mb-5">
            What's inside{" "}
            <span className="italic text-foreground">every jar.</span>
          </h2>
          <p className="text-foreground text-[25px] max-w-xl mx-auto leading-relaxed">
            18 Ingredients in 1 Powerful Formula
            <br />
            Clinically Reviewed + Zero Fillers
          </p>
        </div>

        {/* Ingredient cards — white card layout with corner thumbnail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {ingredients.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 p-6 lg:p-7 flex flex-col min-h-[320px]"
            >
              {/* Category tag */}
              <span className="self-start inline-flex items-center px-3 py-1.5 rounded-md bg-[hsl(207,73%,32%)] text-white text-[11px] font-bold tracking-[0.08em] uppercase mb-4">
                {item.tag}
              </span>

              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[26px] text-foreground leading-tight mb-3 pb-3 border-b border-black/10">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-foreground/80 font-medium text-[16px] leading-[24px] mb-6 max-w-[78%]">
                {item.desc}
              </p>

              {/* Bottom row: benefit text + circular thumbnail */}
              <div className="mt-auto flex items-end justify-between gap-3">
                <span className="text-[hsl(207,73%,32%)] font-semibold text-[15px] leading-snug max-w-[55%]">
                  {item.benefit}
                </span>
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={224}
                    height={224}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
