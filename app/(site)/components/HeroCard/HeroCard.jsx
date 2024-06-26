import Image from "next/image";
import backgroundImg from "@/public/assets/vibes_front_shop.webp";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

function HeroCard({ imageUrl, title, subtitle, description }) {
  return (
    <div className={styles.herocard}>
      <div className={styles.herocard_container}>
        <Image
          src={backgroundImg}
          alt="boutique Vibes Saint-tropez"
          className={styles.__bg_img}
          fill={true}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg..."
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "contain",
          }}
        />
        <figure className={styles.figure}>
          <div className={styles.card}>
            <Image
              src={imageUrl}
              alt="logo vibes shop"
              className="hero__img"
              width={100}
              height={100}
              style={{
                display: "flex",
                objectFit: "cover",
              }}
            />
            <div className={styles.title_content}>
              <h1 className={styles.title}>{title}</h1>
            </div>
            <h4 className={styles.subtitle}>{subtitle}</h4>
            <figcaption>
              <p>{description}</p>
            </figcaption>
            <a href="/" title="Continue Reading">
              Continue Reading
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </a>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default HeroCard;
