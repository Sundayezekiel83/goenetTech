import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSliceAction } from "../store/slice/productSlice";
import Product from "./Product";
import AnimatedText from "react-animated-text-content";
import { categorySliceAction } from "../store/slice/categorySlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./HomePage";
import HomeSlider from "../component/HomeSlider/HomeSlider";
import SideBar from "../component/SideBar/SideBar";

const HomeProduct = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const { response: product } = useSelector((state) => state.product);

  const { response: categories } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productSliceAction());
    dispatch(categorySliceAction());
  }, []);

  const tempProducts = [];

  if (product?.products.length > 0) {
    for (let i in product.products) {
      let randomIndex = Math.floor(Math.random() * product?.products.length);

      while (tempProducts.includes(product?.products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * product?.products.length);
      }
      tempProducts[i] = product?.products[randomIndex];
    }
  }

  let catProductsOne = product?.products.filter(
    (product) => product.category === categories[0]
  );

  let catProductsFour = product?.products.filter(
    (product) => product.category === categories[1]
  );

  let catProductsTwo = product?.products.filter(
    (product) => product.category === categories[2]
  );

  let catProductsThree = product?.products.filter(
    (product) => product.category === categories[3]
  );

  // console.log("categories", catProductsOne);

  return (
    <>
      <section className="grid grid-cols-4 gap-4 mt-4 px-8">
        <div className="cols-span-1 w-16 ">
          <SideBar />
        </div>

        <div className="cols-span-3 ">
          <HomePage />
          <HomeSlider />
        </div>
      </section>

      <div className="text-center flex justify-center mb-8 text-lg font-bold text-appcolor-500">
        <AnimatedText
          type="char" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          FEATURED PRODUCTS
        </AnimatedText>
      </div>
      <div className="grid grid-cols-4 gap-4 px-6 justify-center items-center left-[50%]">
        {tempProducts.map((product) => (
          <div key={product.id}>
            <Product products={product} />
          </div>
        ))}
      </div>

      <div className="text-center flex justify-center my-8 text-lg font-bold text-appcolor-500">
        <AnimatedText
          type="char" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          New Arrivals
        </AnimatedText>
      </div>

      <div className="bg-white shadow-lg px-10">
        <Slider {...settings}>
          {catProductsOne?.map((product) => (
            <div key={product.id}>
              <Product products={product} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center flex justify-center my-8 text-lg font-bold text-appcolor-500">
        <AnimatedText
          type="char" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          Fragrances
        </AnimatedText>
      </div>

      <div className="grid grid-cols-3 gap-4 px-6">
        {catProductsTwo?.map((product) => (
          <div key={product.id}>
            <Product products={product} />
          </div>
        ))}
      </div>

      <div className="text-center flex justify-center my-8 text-lg font-bold text-appcolor-500">
        <AnimatedText
          type="char" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          SmartPhones
        </AnimatedText>
      </div>
      <div className="grid grid-cols-3 gap-4 px-6">
        {catProductsOne?.map((product) => (
          <div key={product.id}>
            <Product products={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeProduct;
