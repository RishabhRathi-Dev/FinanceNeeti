import { React, useEffect, useState } from "react";
import NewsCard from "../components/News/NewsCard";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4688ee05c1f84e1a83778be414461acd"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  }, []);

  const dataForCarousel = data.slice(0, 5);
  const newdata = data.slice(5);

  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-950">
        <div>
          <div className="w-[80%] m-auto pt-5 shadow-lg">
            <Carousel showThumbs={false} autoplay>
              {dataForCarousel.map((slide) => (
                <a href={slide.url} target="_blank" rel="noopener noreferrer">
                  <div
                    className="h-96 object-cover px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition ease-in-out duration-150 rounded"
                    style={{
                      backgroundImage: `url(${slide.urlToImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    href={slide.url}
                  >
                  <div className="mt-52 mr-20 text-left">
                    <div className=" mb-2 text-2xl font-medium bg-opacity-50  inline text-black bg-slate-500 text-left rounded dark:text-white">
                      {slide.title}
                    </div>
                    <div className="mb-3 text-lg text-black dark:text-gray-400 bg-slate-100 bg-opacity-50 mt-4 dark:text-white">
                      {slide.description}
                      {"..."}
                    </div>
                    </div>
                  </div>
                </a>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="grid mt-8 md:grid-cols-3 gap-7 sm:grid-cols-2 2xl:grid-cols-4 pb-10">
          {newdata.map((value) => (
            <NewsCard
              newsImage={value.urlToImage}
              headline={value.title}
              description={value.description}
              url={value.url}
            ></NewsCard>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
