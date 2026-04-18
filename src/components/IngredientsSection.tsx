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
            The Formula Behind{" "}
            <span className="text-foreground">The Relief.</span>
          </h2>
          <p className="text-foreground text-[25px] max-w-2xl mx-auto leading-relaxed">
            18 natural ingredients. No fillers, no shortcuts — just targeted comfort that goes deeper than the surface.
          </p>
        </div>

        {/* Ingredient cards — full background image layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-fr">
          {ingredients.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="group relative min-h-[230px] lg:min-h-[290px] rounded-2xl overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                width={640}
                height={760}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/65 to-foreground/25 lg:bg-gradient-to-b lg:from-foreground/85 lg:via-foreground/60 lg:to-foreground/35" />

              <div className="relative z-10 h-full flex flex-col justify-center lg:justify-start px-4 py-5 lg:px-6 lg:pt-5 lg:pb-6">
                <span className="hidden lg:inline-flex self-start items-center px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-[11px] font-bold tracking-[0.08em] uppercase mb-4">
                  {item.tag}
                </span>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[26px] lg:text-[34px] text-background leading-[1] mb-2 lg:mb-3 text-center lg:text-left">
                  {item.name}
                </h3>

                <p className="text-background font-medium lg:font-semibold text-[14px] lg:text-[16px] leading-[19px] lg:leading-[21px] max-w-full text-center lg:text-left">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
