import {
  getDataStarProductsPages,
  getDataProductsPages,
  getDataPlusProductsPages,
} from "@/sanity/lib/client";
import StarProductsPages from "./components/StarProductsPages/StarProductsPages";
import Hero from "./components/Hero/Hero";
import FiltersProducts from "./products/filtersProducts/page";
import Banner from "./components/Banner/Banner";
import Slider from "./components/Slider/Slider";
import Carousel from "./components/Carousel/Carousel";
import HR from "./components/HR/HR";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Home = async () => {
  const starproducts = await getDataStarProductsPages();
  const allproducts = await getDataProductsPages();
  const plusproduct = await getDataPlusProductsPages();

  return (
    <>
      <div className="home_section">
        <div
          className="hero_section"
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          <Hero />
        </div>
        <div>
          <Banner />
        </div>
        <section className="slider_section">
          <Slider allproducts={allproducts} />
        </section>
        <HR color="gray" />
        <section className="starproducts_section">
          <StarProductsPages starproducts={starproducts} />
        </section>
        <HR color="gray" />
        <section className="productspages_section">
          <div
            className="productspages_main_title"
            id="all_products"
            style={{
              display: "flex",
              width: "100%",
              height: "auto%",
              paddingLeft: "3rem",
              marginTop: "2rem",
            }}
          >
            <h1>TOUS LES PRODUITS</h1>
          </div>
          <FiltersProducts />
        </section>
        <HR color="gray" />
        <section
          style={{
            display: "flex",
            width: "auto",
            flexDirection: "column",
            overflow: "hidden",
            padding: "2rem",
            height: "auto",
          }}
        >
          <div
            className="plusProduct_main_title"
            style={{
              display: "flex",
              width: "auto",
              justifyContent: "center",
            }}
          >
            <h1>LES PLUS DE VIBES CBD SHOP</h1>
          </div>
          <Carousel plusproduct={plusproduct} />
        </section>
      </div>
    </>
  );
};

export default Home;
