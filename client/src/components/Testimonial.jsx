import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Jenny",
    text:
      "The tools offered clarity on budgeting and savings. The community engagement was a game-changer, making financial management not just effective but enjoyable. It’s the perfect mix of tools and a supportive community.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    name: "Satya Narayan",
    text:
      "The tools simplified everything. Engaging with like-minded individuals, sharing experiences, and gaining insights not only made the journey informative but genuinely enjoyable.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Chris",
    text:
      "The community shared insightful tips, making my financial journey less daunting. Highly Recommended!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-10 dark:bg-gray-900 dark:text-white">
      <div className="container">
        <div className="text-center mb-8 max-w-[600px] mx-auto pt-8">
          <p className="text-xl text-gray-400 dark:text-white">
            Here's what our customers say:
          </p>
        </div>
        <div className="max-w-[800px] mx-auto">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-navbg bg-primary/10 relative">
                  <div>
                    <img
                      className="rounded-full w-20 h-20 mx-auto"
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="text-center mt-10">
            <p className="text-lg font-medium mb-2">
              <b>Want to share your experience?</b>
            </p>
            <button className="bg-navyblue text-white rounded-full py-2 px-8 transition duration-300 hover:bg-opacity-80">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
