import Image from "next/image";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

const All = ({ all }) => {
  return (
    <>
      <header
        className="header_data"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          padding: "33px",
        }}
      >
        <h2 className="_data"> TOUTES NOS DATAS</h2>
      </header>

      <section
        className="data_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <div
          className="data_container"
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "column",
          }}
        >
          <div
            className="display_all_data"
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              className="data_content"
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                height: "auto",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                className="section_searchbox_data"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                <div
                  className="_searchbox_flowers"
                  style={{
                    display: "flex",
                    width: "auto",
                    height: "auto",
                    justifyContent: "center",
                  }}
                >
                  <SearchBar />
                </div>
              </div>
              <div
                className="data_cards"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  height: "auto",
                  justifyContent: "center",
                }}
              >
                {all.map((data) => (
                  <div key={data._id}>
                    <div className="display_infos_products">
                      <div
                        className="main_title_data"
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "auto",
                          alignItems: "center",
                          padding: "14px",
                          flexWrap: "wrap",
                        }}
                      >
                        <h2>
                          hello world !!!!!
                          <Link href={`/all/${data.slug}`}>{data.name}</Link>
                        </h2>
                        <div className="images_products_categories">
                          {data.coverImages && (
                            <Image
                              src={data.coverImages}
                              alt="les fleurs"
                              className="product__img"
                              width={300}
                              height={300}
                              style={{
                                objectFit: "cover",
                                borderRadius: "30px",
                              }}
                            />
                          )}
                        </div>
                        <div
                          className="content"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <p className="price_content">
                            €{data.price.toFixed(2)}
                          </p>

                          <span>
                            <PortableText value={data.content} />
                          </span>

                          <Link
                            href={`/searchdata/${data.slug}`}
                            className="link_items"
                            style={{
                              color: "turquoise",
                            }}
                          >
                            ici !!!!!!!! View Details
                          </Link>
                          <span className="ref_products_categories">
                            {" "}
                            <p
                              style={{
                                color: "gray",
                                fontSize: "10px",
                              }}
                            >
                              REF: {data._id}
                            </p>
                          </span>
                        </div>
                      </div>
                      {data.categories &&
                        data.categories.map((subcategory) => (
                          <div
                            key={subcategory._id}
                            className="data_group_products"
                            style={{ padding: "20px" }}
                          >
                            <div
                              className="content_data"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <h3
                                className="title_data_categories"
                                style={{ color: "white" }}
                              >
                                subcategory !!!!!
                                <Link href={`/searchdata/${subcategory.slug}`}>
                                  {subcategory.name}
                                </Link>
                              </h3>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default All;
