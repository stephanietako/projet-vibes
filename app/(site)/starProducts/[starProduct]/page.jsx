import { getDataStarProductSlug } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";

export const dynamic = "force-dynamic";

const StarProductsDetails = async ({ params }) => {
  const slug = params.starProduct;
  const starProduct = await getDataStarProductSlug(slug);

  return (
    <>
      <section
        className="starProduct_details__section"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <div
          className="starProduct_details__container"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            position: "relative",
            justifyContent: "center",
            flexDirection: "column",
            cursor: "none",
          }}
        >
          <div
            className="starProduct_details__bloc"
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
              position: "relative",
              justifyContent: "center",
              // border: "4px solid red",
            }}
          >
            <div
              className="starProduct_details__title"
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                justifyContent: "center",
                position: "absolute",
                top: "40%",
                zIndex: 2,
              }}
            >
              <h1>{starProduct && starProduct.name}</h1>
            </div>
          </div>

          <div className="starProduct_details__categories">
            <div
              className="display_categories"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                height: "auto",
                flexWrap: "wrap",
                margin: "2rem",
              }}
            >
              {starProduct.stars.map((item) => (
                <Link href={`/stars/${item.slug}`} key={item._id}>
                  <div
                    className="data_group__categories"
                    style={{
                      display: "flex",
                      padding: "2rem",
                      borderRadius: "12px",
                      width: "27 rem",
                      height: "auto",
                      //  justifyContent: "center",
                      flexDirection: "column",
                      background: "#fff",
                    }}
                  >
                    <span>
                      <div
                        className="images"
                        style={{
                          display: "flex",
                          width: "auto",
                          height: "auto",
                          justifyContent: "center",
                          padding: "0.5rem",
                          borderRadius: "30px",
                        }}
                      >
                        {item.coverImages ? (
                          <Image
                            src={urlFor(item.coverImages).url()}
                            alt="les fleurs"
                            className="product__img"
                            width={450}
                            height={300}
                            style={{
                              objectFit: "cover",
                              borderRadius: "18px",
                            }}
                          />
                        ) : (
                          <p>No image available</p>
                        )}
                      </div>
                    </span>
                    <div className="title__content">
                      <h3
                        className="title"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          height: "auto",
                          position: "relative",
                          zIndex: 1,
                          justifyContent: "center",
                          color: "#000",
                          fontSize: "27px",
                        }}
                      >
                        {item.name}
                      </h3>
                    </div>
                    <div className="productDetails__infos">
                      <span>
                        <PortableText value={item.content} />
                      </span>
                      <span>
                        <p
                          className="price_content"
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {item.price}€
                        </p>
                      </span>
                      <span>
                        <button
                          style={{
                            padding: "10px 0",
                            backgroundColor: "transparent",
                            color: "#000",
                            border: "none",
                            outline: "none",
                            cursor: "none",
                          }}
                        >
                          Découvrir
                        </button>
                      </span>
                      <span>
                        <p
                          style={{
                            fontSize: "8px",
                            color: "gray",
                          }}
                        >
                          REF: {item._id}
                        </p>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StarProductsDetails;
