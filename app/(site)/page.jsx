import {
  getDataStarProducts,
  getDataFlowers,
  getDataProductsPages,
} from "@/sanity/lib/client";
// import { getDataProductsPages } from "@/sanity/lib/client";
// import Flowers from "./components/Flowers/Flowers";
import StarProducts from "./components/StarProducts/StarProducts";
import Hero from "./components/Hero/Hero";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import FiltersProducts from "./products/filtersProducts/page";
import Banner from "./components/Banner/Banner";
import Slider from "./components/Slider/Slider";
import SliderForCart from "./components/Carousel/Carousel";

const Home = async () => {
  const starproducts = await getDataStarProducts();
  const allflowers = await getDataFlowers();
  const allproducts = await getDataProductsPages();

  return (
    <>
      <div className="home_section">
        <div className="menu">
          <NavbarMenu />
        </div>

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
        {/* <section className="categories_section">
          <Flowers allflowers={allflowers} />
        </section> */}
        <section className="starproducts_section">
          <StarProducts starproducts={starproducts} />
        </section>
        <section className="productspages_section">
          <div
            className="productspages_main_title"
            style={{
              display: "flex",
              width: "100%",
              height: "auto%",
              paddingLeft: "4rem",
              marginTop: "2rem",
            }}
          >
            <h1>TOUS LES PRODUITS</h1>
          </div>
          <FiltersProducts />
        </section>
        <section
          style={{
            border: "2px solid red",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            overflow: "hidden",
            padding: "3rem",
          }}
        >
          ICI !!!!!!!!!!!!!
          <SliderForCart allproducts={allproducts} />
        </section>
      </div>
    </>
  );
};

export default Home;
