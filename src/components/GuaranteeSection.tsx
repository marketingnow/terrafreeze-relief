import { ArrowRight } from "lucide-react";
import collage from "@/assets/guarantee-collage.png";

const GuaranteeSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Eyebrow */}
        <div className="text-center mb-4">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Try It Risk-Free
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-center font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.1] text-foreground mb-14 md:mb-16">
          <span className="italic text-accent">Real Relief</span> — or Your
          Money Back
        </h2>

        {/* Two-column: collage left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left — Collage */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={collage}
              alt="Happy TERRAFREEZE customers showing their results"
              className="w-full max-w-md lg:max-w-none rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* Right — Copy */}
          <div className="space-y-5 text-muted-foreground text-[15px] leading-relaxed">
            <p>
              The ingredients speak for themselves — and so do the Canadians
              already using TERRAFREEZE every day.
            </p>
            <p>
              That's why we stand behind every jar with our{" "}
              <span className="font-semibold text-foreground">
                Empty Jar Guarantee
              </span>
              . Use the entire jar. Apply it daily. Put it to work on your
              knees, your back, your shoulders — wherever you need targeted
              comfort.
            </p>
            <p>
              If you're not feeling the difference, get a full refund.{" "}
              <span className="font-semibold text-foreground">
                No hoops, no hassle, no fine print.
              </span>
            </p>
            <p>
              We can make that offer because we know what happens when menthol,
              arnica, MSM, and emu oil go to work on sore, stiff, uncomfortable
              joints and muscles. The cooling hits. The comfort builds. And day
              after day, you reach for the jar again — because it earned its
              spot in your routine.
            </p>
            <p className="font-semibold text-foreground">
              Thousands of Canadians already have. Now it's your turn.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-3 px-8 py-3.5 bg-accent text-accent-foreground rounded-lg font-medium text-[15px] shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Shop TERRAFREEZE — Ships Free Across Canada
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
