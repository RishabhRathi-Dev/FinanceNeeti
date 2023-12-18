import React from "react";
import Slider from "react-slick";
import ShareImg from "../assets/posts/share.png";
import IconImg from "../assets/posts/icon.png";
import lineChartImage from '../assets/posts/stats.png';

const userPostsData = [
  {
    id: 1,
    userId: "john_doe95",
    designation: "Financial Analyst",
    userProfilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    heading: "Navigating Personal Finance",
    content:
      "As a financial analyst, I've learned the importance of managing personal finances effectively. It's not just about numbers; it's about creating a strategy that aligns with one's lifestyle and financial goals. My experience has taught me that budgeting isn't about restricting oneself but rather prioritizing spending to achieve long-term financial freedom. By allocating a percentage of my income towards rent, lifestyle expenses, investments, and transportation, I've been able to strike a balance. It's crucial to monitor these allocations regularly to ensure they align with evolving financial goals and market changes. Learning from real-life experiences has been instrumental in my financial journey.",
    salary: {
      rent: 30,
      lifestyle: 20,
      invested: 25,
      transport: 25,
    },
    totalSalary: 65000,
  },
  {
    id: 2,
    userId: "alice_finance22",
    designation: "Wealth Manager",
    userProfilePic: "https://randomuser.me/api/portraits/women/12.jpg",
    heading: "Crafting Wealth Management Strategies",
    content:
      "In my role as a wealth manager, I've encountered various approaches to wealth management. Each individual has unique financial aspirations, making it essential to tailor strategies accordingly. My journey involves guiding clients through investment opportunities, risk assessment, and diversification. Understanding the balance between risk and reward is crucial when navigating the complex landscape of wealth management. By emphasizing diversified portfolios, I've seen clients achieve robust financial growth while minimizing potential risks. It's about creating a roadmap that not only protects wealth but also maximizes its potential for future generations.",
    salary: {
      rent: 25,
      lifestyle: 30,
      invested: 30,
      transport: 15,
    },
    totalSalary: 80000,
  },
  {
    id: 3,
    userId: "fin_guru_mark",
    designation: "Investment Advisor",
    userProfilePic: "https://randomuser.me/api/portraits/men/13.jpg",
    heading: "Insights into Investment Markets",
    content:
      "As an investment advisor, staying ahead of market trends is fundamental. The investment landscape is dynamic, requiring constant monitoring and analysis. My role involves deciphering market movements, understanding economic indicators, and predicting potential impacts on various investment portfolios. By diversifying across sectors and asset classes, I've helped clients mitigate risks while maximizing returns. However, educating clients about the unpredictability of markets remains a crucial aspect. It's not just about generating returns; it's about managing expectations and aligning investments with individual risk tolerances and long-term goals.",
    salary: {
      rent: 20,
      lifestyle: 25,
      invested: 35,
      transport: 20,
    },
    totalSalary: 75000,
  },
];

const UserPosts = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  const handleAddComment = (postId) => {
    // Logic to add comment to specific post
  };

  const handleSharePost = (postId) => {
    // Logic to share the post
  };

  const handleIconPost = (postId) => {
    // Logic to like the post
  };
  

  return (
    <div className="py-10 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto pt-8">
        <div className="text-left mb-10 max-w-[500px]">
          <h1 className="text-5xl font-bold">Posts from users</h1>
        </div>

        <div className="align-center max-w-[1200px] mx-auto">
          <Slider {...settings}>
            {userPostsData.map((post) => (
              <div key={post.id} className="my-6 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl duration-high max-w-[1200px] p-8 flex">

                  <div className="w-3/4 pr-6">
                    <div className="flex items-center mb-4">
                      <img
                        className="rounded-full w-16 h-16 mr-4"
                        src={post.userProfilePic}
                        alt=""
                      />
                      <div>
                        <p className="text-sm">{post.userId}</p>
                        <p className="text-xs text-gray-600">{post.designation}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold">{post.heading}</h3>
                      <p className="text-gray-800 dark:text-white">{post.content}</p>
                    </div>
                    
                    <div className="mb-4 flex items-center">
                    <input
                      type="text"
                      placeholder="Add your comment..."
                      className="flex-1 p-2 border border-gray-300 rounded mr-2"
                    />
                    <div className="flex flex-grow items-stretch space-x-2">
                      <button
                        onClick={() => handleAddComment(post.id)}
                        className="bg-navyblue text-white border border-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black hover:border-blue-500 text-xs flex items-center"
                      >
                        + Add comment
                      </button>
                      <button
                        onClick={() => handleSharePost(post.id)}
                        className="bg-navyblue text-white border border-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black hover:border-blue-500 flex items-center"
                      >
                        <img src={ShareImg} alt="Share" className="h-4 w-4 mr-2" />
                      </button>
                      <button
                        onClick={() => handleIconPost(post.id)}
                        className="bg-navyblue text-white border border-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black hover:border-blue-500 flex items-center"
                      >
                        <img src={IconImg} alt="Icon" className="h-4 w-4 mr-2" />
                      </button>
                    </div>
                  </div>
                  
                  </div>

                  <div className="w-1/4">
                    <div className="flex flex-col space-y-4">
                      {/* Total Salary */}
                      <div className="">
                        <p className="text-xs">Total Salary</p>
                        <p className="text-4xl font-bold">${post.totalSalary}</p>
                      </div>

                      <div className="flex items-center space-x-4 dark:text-black">
          {/* Line Chart Image */}
          <div className="w-full">
            <img src={lineChartImage} alt="Line Chart" className="w-full" />
          </div>
        </div>

                      <div className="flex space-x-4 dark:text-black">
                        {/* Rent and Lifestyle containers */}
                        <div className="flex-1">
                          <div className="bg-gray-200 p-4 rounded">
                            <p className="text-sm">Rent</p>
                            <p className="text-lg font-bold">{post.salary.rent}%</p>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-200 p-4 rounded">
                            <p className="text-sm">Lifestyle</p>
                            <p className="text-lg font-bold">{post.salary.lifestyle}%</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4 dark:text-black">
                        {/* Invested and Transport containers */}
                        <div className="flex-1">
                          <div className="bg-gray-200 p-4 rounded">
                            <p className="text-sm">Invested</p>
                            <p className="text-lg font-bold">{post.salary.invested}%</p>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-200 p-4 rounded">
                            <p className="text-sm">Transport</p>
                            <p className="text-lg font-bold">{post.salary.transport}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
