import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/sanity";
import { PortableText } from "@portabletext/react";
import SearchFlowers from "../SearchFlowers/SearchFlowers";
import canaIcon from "@/public/assets/canaleaf.png";
import SearchTypeFlowers from "../SearchTypeFlowers/SearchTypeFlowers";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";
// DISPLAY
const Flowers = ({ allflowers }) => {
  return (
    <section className={styles.flowers__section}>
      <div className={styles.flowers__container}>
        <div className={styles.display_all_flowers}>
          <header className={styles.title__bloc}>
            <div className={styles.title__content}>
              <h1 className={styles.title}>
                <span className={styles.icon}>
                  <Image
                    src={canaIcon}
                    alt="les produits de la boutiques vibes cbd"
                    className="cana_icon__img"
                    width={50}
                    height={70}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </span>
                Toutes nos fleurs
              </h1>
            </div>
          </header>

          <div className={styles.flowers_cards}>
            {/* Boucle EXTERNE à travers tous les produits, cette boucle extérieure parcourt tous les produits disponibles. */}
            {allflowers.map((product) => (
              <div key={product._id}>
                {product.categories && product.categories.length > 0 ? (
                  <div className={styles.flowers_cards__display}>
                    <div className={styles.flowers_bloc}>
                      <div className={styles.flowers_bloc__searchbar}>
                        <div className={styles.flowers__searchflowers}>
                          <SearchFlowers />
                        </div>
                        <div className={styles.flowers__searchtypeflowers}>
                          <SearchTypeFlowers />
                        </div>
                      </div>

                      <div className={styles.data_group__container}>
                        {product.categories.map((category) => (
                          <React.Fragment key={category._id}>
                            <div className={styles.data_group__products}>
                              <div className={styles.content_flowers}>
                                <div className={styles.categories_flowers}>
                                  <div className={styles.title__content}>
                                    <h3 className={styles.title}>
                                      {category.name}
                                    </h3>
                                  </div>
                                  <div className={styles.__flowers_images}>
                                    {category.coverImages && (
                                      <Image
                                        src={urlFor(category.coverImages).url()}
                                        alt="les fleurs"
                                        className="product__img"
                                        width={315}
                                        height={220}
                                        style={{
                                          objectFit: "cover",
                                          borderRadius: "30px",
                                          padding: "0.5rem",
                                          // justifyContent: "center",
                                        }}
                                      />
                                    )}
                                  </div>
                                </div>
                                <div className={styles.flowers__infos}>
                                  <span>
                                    <PortableText value={category.content} />
                                  </span>
                                  <span>
                                    {" "}
                                    <p className={styles.__price_content}>
                                      {category.price.toFixed(2)}€
                                    </p>
                                  </span>
                                  <Link
                                    href={`/categories/${category.slug}`}
                                    className="link_cards"
                                  >
                                    Acheter
                                  </Link>
                                  <span className="ref_products_flowers">
                                    {" "}
                                    <p
                                      style={{
                                        color: "gray",
                                        fontSize: "8px",
                                      }}
                                    >
                                      REF: {product._id}
                                    </p>
                                  </span>
                                </div>
                              </div>
                              {/* // FIN SUBCATEGORIES KEY CLASS DATA GROUP EN DESSOUS DE LA DIV */}
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    {/* fin boucle interne */}
                  </div>
                ) : (
                  <p>No category available for this product.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flowers;
