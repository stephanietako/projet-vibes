"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
import Link from "next/link";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const Slider = ({ allproducts }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Dupliquez les éléments pour le défilement continu
  const duplicatedProducts = [...allproducts, ...allproducts];

  return (
    <div className={styles.sliderShow__container}>
      <span className={styles.sliderShow__title}>
        <h1>DÉCOUVREZ NOS PRODUITS</h1>
      </span>

      <div
        className={styles.carousel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.carousel__track} data-ishovered={isHovered}>
          {duplicatedProducts.map((product, index) => (
            <div key={index} className={styles.carousel__bloc__img}>
              <Link href={`/products/${product.slug}`}>
                <Image
                  src={urlFor(product.coverImages).url()}
                  alt={`Slide ${index}`}
                  className={styles.carousel__img}
                  width={300}
                  height={350}
                  loading="lazy"
                  placeholder="blur"
                  quality={80}
                  blurDataURL="data:image/jpeg..."
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <div className={styles.title__content}>
                <h1 className={styles.title}>
                  <p>{product.name}</p>
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
