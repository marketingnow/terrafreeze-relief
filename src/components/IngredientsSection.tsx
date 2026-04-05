import { ShieldCheck, Leaf, Beaker, Award, Truck, MapPin } from "lucide-react";
import mentholImg from "@/assets/ingredient-menthol.jpg";
import arnicaImg from "@/assets/ingredient-arnica.jpg";
import msmImg from "@/assets/ingredient-msm.jpg";
import emuOilImg from "@/assets/ingredient-emu-oil.jpg";

const ingredients = [
  {
    name: "Menthol",
    img: mentholImg,
    desc: "Delivers an instant cooling sensation that calms inflamed tissue and eases muscle tension on contact.",
    dosage: "5%",
  },
  {
    name: "Arnica Montana",
    img: arnicaImg,
    desc: "A time-tested botanical used by Canadian athletes and physiotherapists to reduce bruising and swelling naturally.",
    dosage: "4%",
  },
  {
    name: "MSM",
    img: msmImg,
    desc: "Supports joint flexibility and helps reduce oxidative stress in connective tissue — essential for active Canadians.",
    dosage: "2%",
  },
  {
    name: "Emu Oil",
    img: emuOilImg,
    desc: "Deep-penetrating carrier that drives active ingredients beneath the skin — right where pain lives.",
    dosage: "3%",
  },
];

const badges = [
  { icon: ShieldCheck, label: "Health Canada NPN Registered" },
  { icon: Leaf, label: "Natural Ingredients" },
  { icon: Beaker, label: "Clinically Studied" },
  { icon: Award, label: "Third Party Tested" },
  { icon: Truck, label: "Free Shipping $60+" },
  { icon: MapPin, label: "Made in Canada" },
];

const IngredientsSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-foreground relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-white">
              Health Canada Registered (NPN)
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] font-bold text-[clamp(28px,3.5vw,46px)] leading-[1.1] text-white mb-5">
            What's inside{" "}
            <span className="italic text-white">every jar.</span>
          </h2>
          <p className="text-white text-xl max-w-xl mx-auto leading-relaxed">
            4 clinically studied ingredients. Zero fillers. Trusted by 15,000+ Canadians coast to coast.
          </p>
        </div>

        {/* Ingredient cards — photo-backed like reference */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {ingredients.map((item) => (
            <div
              key={item.name}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-default"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-5 lg:p-6">
                <div>
                  <h3 className="font-['Playfair_Display',serif] font-bold text-2xl lg:text-3xl text-white leading-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white text-base lg:text-lg leading-relaxed max-w-[90%]">
                    {item.desc}
                  </p>
                </div>
                {/* Dosage badge */}
                <div className="self-start">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold tracking-wide">
                    {item.dosage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 pt-10 border-t border-primary-foreground/10">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-primary-foreground/80 text-sm lg:text-base font-medium">
              <b.icon className="w-4 h-4" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
