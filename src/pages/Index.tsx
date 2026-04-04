import TerrafreezeHero from "@/components/TerrafreezeHero";

const variants = ["ice", "smoke", "energy", "mountain"] as const;

const Index = () => {
  return (
    <main>
      {variants.map((v) => (
        <TerrafreezeHero key={v} variant={v} />
      ))}
    </main>
  );
};

export default Index;
