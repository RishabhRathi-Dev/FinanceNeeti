import React from "react";
import NewsImg1 from "../assets/news/news1.jpeg";
import NewsImg2 from "../assets/news/news2.avif";
import NewsImg3 from "../assets/news/news3.jpeg";

const NewsData = [
  {
    id: 1,
    img: NewsImg1,
    title: "News 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: NewsImg2,
    title: "News 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: NewsImg3,
    title: "News 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const News = ({ handleReadMore }) => {
  return (
    <>
      <div className="py-10 dark:bg-gray-900 dark:text-white">
        <div className="container">
            <div className="text-left py-8 mb-10 max-w-[500px]">
            <h1 className="text-5xl font-bold">Top Finance News</h1>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {NewsData.map((news) => (
            <div
            key={news.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-950 hover:bg-navyblue dark:hover:bg-navbg hover:text-white
            dark:text-white
            dark:hover:text-black  shadow-xl duration-high group max-w-[400px] md:max-w-[500px]"
            >
                <img
                  src={news.img}
                  alt=""
                  className="w-full h-[300px] object-cover rounded-t-2xl"
                />
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold text-left mb-2">
                    {news.title}
                  </h1>
                  <p className=" text-sm line-clamp-2">
                    {news.description}
                  </p>
                  <button
                    className="bg-navbg rounded hover:scale-105 duration-300 text-black py-1 px-4  mt-4 group-hover:bg-white 
                    dark:group-hover:bg-navyblue
                    group-hover:text-navyblue
                    dark:group-hover:text-white"
                    onClick={handleReadMore}
                  >
                    Read more..
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
