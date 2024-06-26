import HeroCard from "../HeroCard/HeroCard";
import vibesImage from "@/public/assets/vibes.png";
// Styles
import styles from "./styles.module.scss";

function HeroContainer() {
  const cards = [
    {
      imageUrl: vibesImage,
      title: "VIBES CBD SAINT-TROPEZ",
      subtitle: "Qu'est-ce que le cbd et comment l'utiliser",
      description:
        "Jellyfish are fascinating marine creatures known for their graceful and mesmerizing movements in the water. Belonging to the phylum Cnidaria, these gelatinous animals come in various shapes, sizes, and colors. One distinctive feature of jellyfish is their umbrella-shaped bell, which pulsates to propel them through the ocean.",
    },
  ];

  return (
    <article className={styles.article}>
      <div className={styles.__sectionWrapper}>
        <div className={styles.__wrapper}>
          {cards.map((card, index) => (
            <div key={index}>
              <HeroCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default HeroContainer;
