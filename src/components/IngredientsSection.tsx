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
    img: mentholImg,
    desc: "Delivers an instant cooling sensation that calms inflamed tissue and eases muscle tension on contact.",
    dosage: null,
  },
  {
    name: "Arnica Montana",
    img: arnicaImg,
    desc: "A time-tested botanical used by Canadian athletes and physiotherapists to reduce bruising and swelling naturally.",
    dosage: null,
  },
  {
    name: "Aloe Vera",
    img: aloeVeraImg,
    desc: "Soothes and hydrates skin while enhancing absorption of active ingredients for deeper, longer-lasting relief.",
    dosage: null,
  },
  {
    name: "Emu Oil",
    img: emuOilImg,
    desc: "Deep-penetrating carrier that drives active ingredients beneath the skin — right where pain lives.",
    dosage: null,
  },
  {
    name: "Turmeric",
    img: turmericImg,
    desc: "Rich in curcumin, a powerful natural compound that calms inflammation and supports joint comfort.",
    dosage: null,
  },
  {
    name: "Ginger",
    img: gingerImg,
    desc: "Warming root extract that helps ease stiffness and soothe sore, overworked muscles.",
    dosage: null,
  },
  {
    name: "Chamomile",
    img: chamomileImg,
    desc: "Gentle botanical that calms irritated skin and supports recovery for sensitive areas.",
    dosage: null,
  },
  {
    name: "MSM",
    img: msmImg,
    desc: "Trusted sulfur compound that supports joint mobility, flexibility, and faster muscle recovery.",
    dosage: null,
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

        {/* Ingredient cards — photo-backed like reference */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {ingredients.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="group relative aspect-[4/3.5] lg:aspect-[4/3.3] rounded-2xl overflow-hidden cursor-default"
            >
              {/* Background image */}
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                width={640}
                height={512}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-start pt-3 pb-5 px-5 lg:pt-4 lg:pb-6 lg:px-6">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[35px] text-white leading-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white font-medium text-[16px] leading-[21px] max-w-[90%]">
                    {item.desc}
                  </p>
                </div>
                {item.dosage && (
                  <div className="self-start">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 bg-white/15 backdrop-blur-sm text-white text-sm font-bold tracking-wide">
                      {item.dosage}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
